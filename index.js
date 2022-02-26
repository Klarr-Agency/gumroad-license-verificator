const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
/* Gumroad acces token */
const API_KEY = process.env.API_KEY;

/** Initiating the express app */
const app = express();

/*
 * Configure your express application to use body-parser
 */
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

/** Configure your express application to use CORS  */
app.use(cors());

async function getProducts() {
	const res = await fetch(`https://api.gumroad.com/v2/products`, {
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			'Content-Type': 'application/json'
		},
		method: 'GET'
	});
	const data = await res.json();
	console.log(data);
}

getProducts();

app.post('/hook', (req, res) => {
	console.log(req.body);
	res.status(200).end();
});

const port = process.env.PORT || 3900;

app.listen(port, () => {
	console.log(`App Is Running On http://localhost:${port}`);
});
