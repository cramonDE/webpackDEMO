const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    app: PATHS.app + '/index.js'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
	module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'//添加对样式表的处理
      },
			{
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=[name].[ext]'
        ]
      },{
	      test: /\.html$/,
	      loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
	    }, {
				test: /\.html$/,
　　　　　loader: 'html-withimg-loader'
			}
    ]
  },
};
