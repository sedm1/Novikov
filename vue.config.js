module.exports = {
  publicPath: process.env.PUBLIC_URL || "",
  devServer: {
    historyApiFallback: true
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/_vars.sass"
        `
      }
    }
  }
}