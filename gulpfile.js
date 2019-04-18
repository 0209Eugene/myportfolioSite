// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

gulp.task('default', function () {
  gulp.watch('scss/*.scss', function () {
    // 自動化したいタスク
    // 読み込み先の取得
    gulp.src('scss/*.scss')
      //compile
      .pipe(sass({
        // 見慣れたcssに整形する
        outputStyle: 'expanded'
      }))
      .on('error', sass.logError)
      //保存先 
      .pipe(gulp.dest('dist/css'))
    // not compiled wrong pass?
  });
});