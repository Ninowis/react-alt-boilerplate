# React App Boilerplate
A React + Webpack stack to kick start front-end developments.


## Pre-requisites

* [Node.js](https://nodejs.org/): Node >= 6 and npm >= 5.2 on your machine
* (Optional) [Yarn](https://yarnpkg.com/en/docs/install): for an optimised npm package management


## Features

* React Rooter integration
* Webpack 4 + Babel 7 toolchain
* Atomic Design based architecture, separating Sass and JS components for portability towards external technology-agnostic pattern-library
* Post CSS processing including autoprefixing with [PostCSS Preset Env](https://github.com/csstools/postcss-preset-env) to convert modern CSS into something most browsers can understand (list of said browsers configurable via [Browserslist](https://github.com/browserslist/browserslist)), determining the polyfills you need based on your targeted browsers or runtime environments.
* CSS minification in production mode using [cssnano](https://cssnano.co/)
* Source Maps and Hot Reload when running in development mode (using [webpack-dev-server](https://github.com/webpack/webpack-dev-server))
* Webfonts assets toolchain ready for integrating fonts in project


## Important Notice

**This is _not_ the recommended React approach for single app projects.**

The stack of this boilerplate is highly tailored to my personal requirements in terms of system architecture. As such don't consider it so much as a point of reference but merely as a starter kit yet to be adapted to your workflow and projects.

Coming from a [Gulp](https://gulpjs.com/) workflow, I've always used an external Sass structure for the styling of my projects, mostly relying on the [7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern) and Jonathan Snook's [SMACSS](https://smacss.com/) approach for engineering a versatile yet optimized pattern-library for complex applications.
With the growing trends of system architectures being based on micro-services, pattern-libraries have taken some serious new turns since SMACSS, but even though most of us have nowadays adopted [Brad Frost's Atomic Design methodoly](http://atomicdesign.bradfrost.com/), its actual implementation across a varied range of technologies often still rely on such external stylesheets/pattern-libraries.

Webpack has some very interesting tools to facilitate the transition towards fully independent components in frameworks like Vue or React (Styled Components, Scoped CSS modules).
This project is **not** an attempt at exploring them, but the voluntary intention to develop a React boilerplate compatible with an external and technology-agnostic pattern-library approach.
Check my recommended readings in the About page of this app should you aim for a more efficient single app approach.


## Getting Started

* Run `yarn install` or `npm install` to install project dependencies.
* Run `npm start` to run the app in the development mode.
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## Available Scripts

In the project directory, you can also run:

### Productions build

```
npm run build
```

It correctly bundles React in production mode, optimizing the build for best performance and copy required public assets to the `dist` folder.
