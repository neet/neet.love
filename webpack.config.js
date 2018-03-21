const webpack = require('webpack');
const path    = require('path');
const HtmlWebpackPlugin        = require('html-webpack-plugin');
const CleanWebpackPlugin       = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const config = {

  stats: { errorDetails: true },

  devtool: 'source-map',

  context: path.resolve(__dirname, 'src'),

  entry: {
    'main': './scripts/main.tsx',
    'style': './styles/main.scss',
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(txt|md|ya?ml)$/,
        use: 'raw-loader',
      },
      {
        test: /\.(jpe?g|png|gif|ttf|otf|eot|svg|woff(2)?)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        }],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.es', '.ts', '.tsx'],
    alias: { '@': __dirname + '/src/scripts' },
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),

    new CleanWebpackPlugin([
      'dist'
    ]),

    new HtmlWebpackPlugin({
      template:  path.join(__dirname, 'src/index.html'),
    }),

    new ExtractTextWebpackPlugin({
      filename: '[name].css',
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    index: './dist/index.html',
    port: 8080,
    hot: true,
    open: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
  }
};

module.exports = config;
