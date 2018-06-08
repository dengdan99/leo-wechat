const path = require('path')
// const vuxLoader = require('vux-loader')

module.exports = {
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,

  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: null // string | Object
  },
  // 是否为生产环境构建生成 source map？
  productionSourceMap: true,

  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {},

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false
  },
  configureWebpack: {
    output: {
      publicPath: process.env.WEBPACK_PULICPATH
    },
    resolve: {
      alias: {
        'api': path.resolve(__dirname, './src/api'),
        'src': path.resolve(__dirname, './src'),
        'assets': path.resolve(__dirname, './src/assets'),
        'libs': path.resolve(__dirname, './src/libs')
      }
    },
    plugins: [
    ]
  }
  // configureWebpack: config => {
  //   config.output.publicPath = process.env.WEBPACK_PULICPATH
  //   config.resolve.alias = {
  //     'api': path.resolve(__dirname, './src/api'),
  //     'src': path.resolve(__dirname, './src'),
  //     'assets': path.resolve(__dirname, './src/assets'),
  //     'libs': path.resolve(__dirname, './src/libs')
  //   }
  //   config.plugins = [
  //     new VueLoaderPlugin()
  //   ]
    // vuxLoader.merge(config, {
    //   plugins: ['vux-ui']
    // })
  // }
}
