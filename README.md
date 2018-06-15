## React-Playground
### June 14, 2018
#### [David Eliason](http://www.davethemaker.com)

## What
Exploring different skillsets around React in mini-apps all within a SPA

[good template](https://github.com/pinglinh/simple_webpack_boilerplate)

# Simple webpack boilerplate

A ready to use simple webpack boilerplate.

## Instructions

1.  Run `npm init` 
2.  Install the following dependencies:
```
npm i react react-dom -S
```
3.  Install the following dev dependencies:
```
npm i babel-core babel-loader babel-preset-env babel-preset-react css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server -D
```
4. Update your scripts to the following:
```
"start": "webpack-dev-server --mode development --open",
"build": "webpack --mode production"
```
5. Create **.babelrc** file with the following configurations:
```
{
  "presets": ["env", "react"]
}
```
5. Create **webpack.config.js** file with the following configurations:
```
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};
```
7. Create **src** folder with **index.js** and **index.html** file.
8. **index.js** should have:
```
import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
```
9. **index.html** should have:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>React and Webpack4</title>
</head>
<body>
  <section id="index"></section>
</body>
</html>
```
10. Create **.gitignore** file and input **/node_modules/** and **/dist**.
GET | 302 | ? ms | GitHub.com
GET | 200 | ? ms