const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    all: __dirname + '/assets/js/index.js',
  },
  resolve: {
    modules: [path.resolve(__dirname + '/assets/js'), 'node_modules'],
  },
  output: {
    path: __dirname + '/public/assets',
    filename: '[name].js',
    publicPath: '/assets',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  module: {
    rules: [
      {
        test: /.*\.sass$/,
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          { loader: 'import-glob-loader' }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'all.css' }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }
    })
  ]
};

