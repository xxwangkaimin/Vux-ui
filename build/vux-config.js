'use strict'

module.exports = {
  plugins: [
    'vux-ui', 'inline-manifest',
    {
      name: 'duplicate-style',
      options: {
        cssProcessorOptions : {
          safe: true,
          zindex: false,
          autoprefixer: {
            add: true,
            "browsers": [
              "iOS >= 7",
              "Android >= 4.1"
            ]
          }
        }
      }
    },
    {
      name: 'progress-bar',
      envs: ['development']
    },
    {
      name: 'i18n',
      vuxStaticReplace: false,
      staticReplace: false,
      extractToFiles: 'src/locales/components.yml',
      localeList: ['en', 'zh-CN']
    }
  ]
}