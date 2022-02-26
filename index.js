const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
/* Gumroad acces token */
const API_KEY = process.env.API_KEY;
/* Test purposes only
 If your product URL is "https://gumroad.com/l/QMGY" your product_permalink would be "QMGY." */
const customer_license_key = process.env.CUSTOMER_KEY;
const product_permalink = process.env.PRODUCT_PERMALINK;

/* Initiating the express app */
const app = express();

/* body-parser config */
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.use(cors());

// When the user try to install the package we need to trigger this function to verify if the license key is valid
// and if the uses count is less than 3
async function verifyLicense(customer_key) {
	const res = await fetch(`https://api.gumroad.com/v2/licenses/verify`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			product_permalink: product_permalink,
			license_key: customer_key,
			// Remove this property in production
			increment_uses_count: 'false'
		})
	});
	const data = await res.json();
	console.log(data);
}

// Send a response to verdaccio to determinate if the package can be installed or not

// Entry point
app.post('/verification', (req, res) => {
	verifyLicense(req.body);
	console.log(req.body);
	res.status(200);
	res.end();
});
// For test only
app.get('/verification', (err, res) => {
	res.status(200);
	verifyLicense(customer_license_key);
	res.json({ working: true });
	res.end();
});

const port = process.env.PORT || 3900;

app.listen(port, () => {
	console.log(`App Is Running On http://localhost:${port}`);
});
