module.exports = function () {
  $.gulp.task(
    "build",
    $.gulp.series("clean", "copy", "scripts", "sass", "images", "css", "svg")
  );
};
