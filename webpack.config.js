
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

module.exports = {

    mode: 'development',
    entry: {
        main: './main.js'
    },
    output: {
        filename: 'bundle.js'
    },

    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "bundle.css",
      })
    ],

    module: {
        rules: [
      			{
      				test: /\.(sass|scss)$/,
              use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
              ]
      			},
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
        ]
    }
};
