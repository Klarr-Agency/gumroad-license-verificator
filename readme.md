# Gumroad license verificator with Node.js

This app verify license key from a Gumroad product and return a response to a external app.  
API reference: https://app.gumroad.com/api#licenses

## Installation

```
$ cd gumroad-nodejs
$ npm install
```

## Configuration

Rename .env_sample file to .env and replace value for each variable.

## Developing

Once you've created a project and installed dependencies with `npm install` , start a development server:

```
$ npm run dev
```

## Webhook Requirements

If you want to receive webhooks from Gumroad you need these two things.

1. You need to have acces to a public URL to receive webhooks ex: http://myserver.com:3900/hook. If you don't want to deploy this project on a server you can use https://ngrok.com/
2. Go to your advanced settings in gumroad and add your url into the ping endpoint field.
