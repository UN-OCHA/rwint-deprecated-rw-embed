# ReliefWeb Embed Service

This is a Node.js and Hapi.js based webservice that provides web widgets carrying
ReliefWeb content in a variety of visualizations.

## Installation

* Install node.
* `npm install bower grunt-cli -g`
* `git clone https://github.com/reliefweb/rw-embed.git`
* `npm install`
* `grunt`

## Configuration

There are several configuration values for this system, all injected via
environment variables.

* **port:** APP_PORT (default: `3000`)
* **host:** APP_HOST (default: `0.0.0.0`)

Host is required for Swagger, it can otherwise be skipped.

## Start the Service

* `npm start`

## Exploring the Surface

If you want to learn more first-hand about what the Embed Service does, start
it up and point your browser or cURL to the root.

## Contributing

* All changes should pass the validation of the `grunt` operations.
* For faster feedback on changes, you can run `grunt watch` to automatically run
  checks on every file save.
