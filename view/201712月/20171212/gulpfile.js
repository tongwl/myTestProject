/**
 * Created by tongwl on 2017/12/12.
 */
var gulp=require("gulp");
var less=require("gulp-less");

gulp.task("default",function(){
    gulp.src("./*.less").pipe(less()).pipe(gulp.dest('./'));
});

gulp.task("css-package",["lessToCss"],function(){
    gulp.src("./*.css").pipe(gulp.dest("./css"));
});

//less to css
gulp.task("lessToCss",function(){
    gulp.src("./*.less").pipe(less()).pipe(gulp.dest("./"));
});

gulp.watch("./*.*",["default"]);