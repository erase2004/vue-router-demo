module.exports = {
  chainWebpack: config => {
    // 自訂網站標題: https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-plugin

    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Demo for Multiple View and Nested Route'
        return args
      })
  }
}
