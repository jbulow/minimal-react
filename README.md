# minimal react app

## Contents
A minimal working app with React and JSX

## Use
```bash

git clone git@github.com:cs01/minimal-react.git
cd minimal-react
yarn install
```
then
`yarn build` (one time build) or `yarn watch` (build on changes) or `yarn start` (to run webpack dev server)

## View
Open `index.html`

## File Description
`package.json` contains npm dependencies; scripts to build the app; and [babel](https://babeljs.io/) configuration. `babel` is a JavaScript compiler

`webpack.config.js`: configuration for `webpack`, a module bundler and loader. It lets you use import statements in JavaScript files, and generates a single output file "packed" with all the imports. It can also use [loaders](https://webpack.js.org/concepts/loaders/) to compile the source files as it packs them. For React, this is required since React files are not plain JavaScript. In this case webpack is configured to use `babel` as a loader to compile JSX to plain JavaScript.

`src/App.js` React component

`src/index.js` Source file to be built with webpack+babel

`www/index.js` Output of build process (plain JavaScript)

`www/index.js.map` Output of build process (map from compiled, webpacked JavaScript back to source code)
