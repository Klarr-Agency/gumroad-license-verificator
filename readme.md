# Gumroad Node.js

This is a simple example on how to use webhooks from Gumroad also called Ping.
https://app.gumroad.com/ping

## Installation

```
$ cd gumroad-nodejs
$ npm install
```

## Required

If you want to receive webhooks from Gumroad you need these two things.

1. You need to have acces to a public URL to receive webhooks ex: http://myserver.com:3900/hook. If you don't want to deploy this project on a server you can use https://ngrok.com/
2. Go to your advanced settings in gumroad and add your url into the ping endpoint field.
