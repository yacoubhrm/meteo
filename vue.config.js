const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  pwa: {
    name: 'Meteo App',
    themeColor: '#B12A34',
    msTileColor: '#B12A34',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    manifestOptions: {
      icons: [
        {
          src: 'https://www.camping-soleillevant.com/wp-content/themes/plune/assets/img/Je-decouvre.png',
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
