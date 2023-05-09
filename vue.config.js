const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  chainWebpack: config => {
    const rule = config.module.rule('fonts');
    rule.uses.clear();
    rule
      .use('url-loader')
        .loader('url-loader')
        .options({
          limit: 10000,
          name: 'fonts/[name].[ext]',
        });
  },

  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

})
