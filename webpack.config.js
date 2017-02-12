var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/entry.js",
  devServer: {
      historyApiFallback: true
  },  
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: "static",    
    filename: "./bundle.js",
    devtoolModuleFilenameTemplate: '../[resource-path]'    
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },  
  devtool: 'inline-source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  plugins: []
};
