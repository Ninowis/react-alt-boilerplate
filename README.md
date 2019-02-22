# React App Boilerplate
A React + Webpack stack to kick start front-end developments.


## Pre-requisites

* [Node.js](https://nodejs.org/): Node >= 6 and npm >= 5.2 on your machine
* (Optional) [Yarn](https://yarnpkg.com/en/docs/install): for an optimised npm package management


## Features

* Webpack 4 + Babel 7 toolchain
* Atomic Design based Sass architecture (with added config and Vendor libs management), compiling into external stylesheet rather than into DOM / JS modules
* Post CSS processing including autoprefixing with [PostCSS Preset Env](https://github.com/csstools/postcss-preset-env) to convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments.
* CSS minification in production mode using [cssnano](https://cssnano.co/)
* Source Maps and Hot Reload when running in development mode (using [webpack-dev-server](https://github.com/webpack/webpack-dev-server))
* Webfonts assets toolchain


## Getting Started

* Run `yarn install` or `npm install` to install project dependencies.
* Run `npm start` to run the app in the development mode.
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## Available Scripts

In the project directory, you can also run:

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.