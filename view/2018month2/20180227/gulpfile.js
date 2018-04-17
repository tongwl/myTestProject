const gulp = require('gulp');
const less = require('gulp-less');

gulp.task("default",function(){
    gulp.src("*.less").pipe(less()).pipe(gulp.dest("css"));
});


gulp.watch("*.less",["default"]);
