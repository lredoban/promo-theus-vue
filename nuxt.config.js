const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'promo-theus-vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Promo-Theus website powered by Vuejs and nuxtjs' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#83b93f' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.module.rules.filter(v => v.test.toString() === String(/\.(png|jpe?g|gif|svg)$/))
          .map(v => { v.test = /\.(png|jpe?g|gif)$/ })
        config.module.rules.push({
          test: /\.svg$/,
          include: path.resolve('./assets/img'),
          loader: 'url-loader',
          query: {
            limit: 1000, // 1KO
            name: 'img/[name].[hash:7].[ext]'
          }
        })
        config.module.rules.push({
          test: /\.svg$/,
          include: path.resolve('./assets/svg'),
          use: [
            'svg-sprite-loader',
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                  {removeTitle: true},
                  {removeUselessStrokeAndFill: true},
                  { removeAttrs: {attrs: 'fill'} }
                ]
              }
            }
          ]
        })
      }
    }
  },
  css: [
    '@/assets/css/style.scss'
  ],
  plugins: ['~/plugins/vuelidate', '~/plugins/loadSvgs.js']
}
