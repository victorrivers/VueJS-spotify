# Spotify with Vue.js

This project contains basic demos showing data requests from Spotify API and rendering data with Vue.js.

## Installation

These examples run on Node.js. On [its website](http://www.nodejs.org/download/) you can find instructions on how to install it. You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm.

Once installed, clone the repository and install its dependencies running:

    $ npm install

## Running the examples
In order to run the different examples, open the `source` folder, and run its `app.js` file:

    $ cd source
    $ node app.js

Then, open `http://localhost:8888` in a browser.

### Using your own credentials
The example contains a working client ID and secret key. Note, however, that they might be rate limited if they are used frequently. If you are planning to create an application, we recommend you register your app and get your own credentials instead of using the ones in this project.

Go to [My Applications on Spotify Developer](https://developer.spotify.com/my-applications) and create your application. For the example, we registered this Redirect URI:

* http://localhost:8888/callback

Once you have created your app, replace the `client_id`, `redirect_uri` and `client_secret` in the example with the ones you get from My Applications.