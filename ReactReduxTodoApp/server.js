const express = require('express');
const app = express();
const path = require('path');

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});


if (process.env.NODE_ENV !=='production') {
	const webpackMiddleware = require('webpack-dev-middleware');
	const webpack = require('webpack');
	const webpackConfig = require('./webpack.config.js');

	app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
	app.use(express.static('build'));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'build/index.html'));
	});
}

app.listen(process.env.PORT || 3050, () => console.log('listening...'));