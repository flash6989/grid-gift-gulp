const sass = require("gulp-sass")(require("sass"));

global.$ = {
  gulp: require("gulp"),
  sass: require("gulp-sass")(require("sass")),

  gp: require("gulp-load-plugins")(),
  browserSync: require("browser-sync").create(),
  imageminJpegRecompress: require("imagemin-jpeg-recompress"),
  pngquant: require("imagemin-pngquant"),
  del: require("del"),
  path: {
    config: require("./gulp/config.js"),
    jquery: "./js/jquery.js",
    js: "./js/**/*.js",
  },
};

$.path.config.forEach(function (path) {
  require(path)();
});
