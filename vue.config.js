const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config => {
    const rule = config.module.rule('images');
    rule.uses.clear();
    rule
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.fallback.options.name = 'img/[name].[ext]';
        return options;
      });
  },

  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
