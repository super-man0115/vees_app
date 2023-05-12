const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 4096,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[ext]',
              },
            },
          },
        },
      ],
    },
  },

  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
