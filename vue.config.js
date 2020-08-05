const path = require("path");
const vueSrc = "./src";

module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/scss/index.scss";`
        }
      }
    },
    configureWebpack: {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, vueSrc)
        },
        extensions: ['.js', '.vue', '.json']
      }
    }
  };