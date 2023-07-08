const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  pwa: {
    name: 'App',
    themeColor: '#B12A34',
    msTileColor: '#B12A34',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    manifestOptions: {
      icons: [
        {
          src: './scr/assets/logo.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      start_url: './',
      display: 'standalone',
      theme_color: '#B12A34',
      background_color: '#B12A34'
    }
  }
};