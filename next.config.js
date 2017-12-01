// next.config.js
module.exports = {
  distDir: 'build',
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
}