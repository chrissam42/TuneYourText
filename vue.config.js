module.exports = {
  publicPath: "/readabilitysandbox/",
  // indexPath: "sandbox.html",
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
      host: "0.0.0.0",
      disableHostCheck: true,
      port: 7676
  }
};
