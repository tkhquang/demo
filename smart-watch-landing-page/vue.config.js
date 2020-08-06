module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Smart Watch App Landing Page";
      return args;
    });
  }
};
