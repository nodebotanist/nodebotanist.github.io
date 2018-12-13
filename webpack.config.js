const path = require('path')
const fs = require('fs')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "main.js", // string
  },
  devServer: {
    // after: (app, server) => {
    //   fs.copyFileSync(path.resolve(__dirname, 'index.html'), 
    //     path.resolve(__dirname, 'dist'))
    // }
  }
}