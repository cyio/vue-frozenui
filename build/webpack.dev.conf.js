var webpack = require('webpack')
var config = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// eval-source-map is faster for development
config.devtool = 'eval-source-map'

// add hot-reload related code to entry chunks
var polyfill = 'eventsource-polyfill'
var devClient = './build/dev-client'
Object.keys(config.entry).forEach(function (name, i) {
  var extras = i === 0 ? [polyfill, devClient] : [devClient]
  config.entry[name] = extras.concat(config.entry[name])
})

// necessary for the html plugin to work properly
// when serving the html from in-memory
config.output.publicPath = '/'

config.plugins = (config.plugins || []).concat([
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  // https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html',
    inject: true
  }),
  new BrowserSyncPlugin(
      // BrowserSync options
      {
        host: '127.0.0.1',
        port: 8080,
        proxy: 'http://127.0.0.1:8080/',
        logConnections: false,
        notify: false
      },
      // plugin options
      {
        reload: true
    })
])

module.exports = config
