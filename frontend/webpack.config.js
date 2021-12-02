const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const devMode = (process.env.BUILD || '') !== 'production';
//const nodeModules = path.resolve(path.join(__dirname, 'node_modules'));
//const FaviconsWebpackPlugin = require("favicons-webpack-plugin")

module.exports = {
  entry: './src/index.js',
  output: {
    //path: path.join(__dirname, "build"),
    path: path.resolve('./build'),
    publicPath: devMode ? '' : undefined,
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          'url-loader'
        ],
      },
      {
        test: /.(gif|png|ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[contenthash].[ext]',
            outputPath: './media',
          }
        }]
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      { // compiles s[ac]ss to CSS
        test: /\.(s[ac]ss|css)$/,
        //include: [path.join(nodeModules, 'bootstrap')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },

     // {
     //   test: /translations.csv$/,
      //  exclude: /node_modules/,
      //  use: [path.resolve('./loaders/i18next-custom-loader.js'), 'csv-loader?header=true?skipEmptyLines=true'],
     // }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    devMode &&
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: './public/favicon.ico'
    }),
    // new FaviconsWebpackPlugin('./public/favicon.ico')
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@ui': path.resolve(__dirname, 'src/uikit/components'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@files': path.resolve(__dirname, 'src/assets/files'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  }
};
