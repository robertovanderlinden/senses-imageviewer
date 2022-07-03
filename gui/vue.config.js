const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    extract: false
  },
  productionSourceMap: false,
  configureWebpack: {
    stats: 'none'
  },
  transpileDependencies: true
})
