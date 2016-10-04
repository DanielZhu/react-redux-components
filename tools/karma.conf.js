var path = require('path');

module.exports = function (config) {
  config.set({
    browsers: [ 'Firefox' ],
    // karma only needs to know about the test bundle
    files: [
      './tests.bundle.js'
    ],
    frameworks: [ 'chai', 'mocha' ],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],

    reporters : ['mocha', 'progress'],
    client: {
       mocha: {
           reporter: 'html',
           ui: 'bdd'
       }
    },
    colors: true,

    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      './tests.bundle.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    singleRun: true,
    // webpack config object
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js?/,
            exclude: [/node_modules/, /styles/],
            loaders: ['babel'],
            include: path.join(__dirname, '../src')
          },
          { 
            test: /\.css$/,
            loader: ['style?sourceMap',
            'css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]']
          },
          {
            loader: 'json-loader',
            test: /\.json?$/,
          }
        ],
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true,
      }
    },
    webpackMiddleware: {
      noInfo: true,
    }
  });
};