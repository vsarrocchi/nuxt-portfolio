export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Quicksand&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css',
        crossorigin: 'anonymous'
      }
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js',
        type: 'text/javascript'
      }
    ]
  },
  script: [],
  loading: { color: '#fff' },
  css: ['~/assets/css/styles.css'],
  plugins: ['@/plugins/google-maps'],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://aceforth.com/docs/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true
  },
  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
  },
  modules: ['@nuxtjs/dotenv'],
  build: {
    extend(config, ctx) {}
  },
  router: {
    linkActiveClass: 'active-link'
  }
}
