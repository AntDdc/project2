// const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
    devServer: {
      host: '0.0.0.0',
      port: 8080,
      disableHostCheck: true,
        proxy:'http://192.168.1.101:3000'
    // proxy: {
    //     '/xboot': {
    //         target: 'http://192.168.2.193:7777',  // 请求本地 需要xboot后台项目
    //         ws: false
    //     },
    //     '/api': {
    //       target: 'http://192.168.1.101:3000',
    //       ws: false,
    //     },
    //     '/scratch-gui/': {
    //       target: 'http://192.168.2.242:8601', // 换成正确的服务器域名
    //       changeOrigin: true,
    //       pathRewrite: {
    //         '^/scratch-gui/': ''
    //       }
    //     }
    // },
  },
  lintOnSave: true
}
