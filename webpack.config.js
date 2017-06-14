// You can install more packages below to config more as you like:
// eslint
// babel-eslint
// eslint-config-standard
// eslint-loader
// eslint-plugin-html
// eslint-plugin-promise
// eslint-plugin-standard
// postcss-cssnext

var path = require('path')
var webpack = require('webpack')

var bannerPlugin = new webpack.BannerPlugin(
  '// { "framework": "Vue" }\n',
  { raw: true }
)

function getBaseConfig () {
  return {
    entry: {
      app: path.resolve('./app.js')
    },
    output: {
      path: 'dist',
      publicPath:'/dist/'
    },
    module: {

      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.vue(\?[^?]+)?$/,
          loaders: []
        },
        {
          test:/\.css/,
          loader:'style-loader!css-loader'

        },
        {
          test:/\.scss/,
          loader:'style-loader!css-loader!sass-loader',
          exclude:/node_modules/
        },

        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: './svg/[name].[ext]?[hash]'
          }
        }
      ]
    },
    vue: {
    },
    plugins: [bannerPlugin],
  }
}

var webConfig = getBaseConfig()
webConfig.output.filename = '[name].web.js'
webConfig.module.loaders[1].loaders.push('vue-loader')

var weexConfig = getBaseConfig()
weexConfig.output.filename = '[name].weex.js'
weexConfig.module.loaders[1].loaders.push('weex-loader')

module.exports = [webConfig, weexConfig]
