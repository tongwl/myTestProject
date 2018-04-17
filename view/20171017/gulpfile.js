/**
 * Created by tongwl on 2017/10/17.
 */
const gulp=require("gulp");
const babel=require("gulp-babel");


gulp.task("default", function(){
    gulp.src("1.js")
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest("dist"))
});

gulp.task("copy",function(){
    gulp.src("1.js").pipe(
        gulp.dest("dist")
    );
});
