// next.config.js
module.exports = {
  distDir: 'build',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': {page: '/about'},
      '/bibliography': {page: '/bibliography'},
      '/bragging': {page: '/bragging'},
      '/projects': {page: '/projects'}
    }
  }
}