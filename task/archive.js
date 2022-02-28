const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function archive() {
  return src("build/**")
    .pipe(
      $.zip("arhive.zip", {
        compress: false,
      })
    )
    .pipe(dest("build"))
}
