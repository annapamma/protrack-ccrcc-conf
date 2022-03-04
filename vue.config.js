module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'development'
  ? 'http://localhost:8080'
  : 'http://ccrcc-conf.cptac-data-view.org/',
}
