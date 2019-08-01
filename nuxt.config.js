
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
    meta: [
      { charset: 'utf-8' },
      { name: 'referrer', content: 'no-referrer' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/index.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/less/main.less',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'~plugins/element-ui', ssr: true}
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      const sassResourcesLoader = {
        loader: 'sass-resources-loader',
        options: {
          resources: ['assets/style/theme.less', 'assets/style/mixins.less']
        }
      }
      config.module.rules.forEach(rule => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.less.push(sassResourcesLoader)
        }
        if (rule.test.toString() === '/\\.less$/') {
          rule.use.push(sassResourcesLoader)
        }
      })
    },
    ////防止element-ui被打包多次
    vendor:['element-ui']
  }
}
