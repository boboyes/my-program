/*
  *gulp的主文件，用于注册任务
  *
*/
//此处代码都是由node执行
//载入gulp模块

var gulp = require('gulp');

//格式话css模块less>css
// var less = require('gulp-less');

// //压缩css模块
// var cssnano =require('gulp-nanocss');
// //注册一个任务
// gulp.task('copy',function(){
//    // //当执行这个say的时候会自动执行该函数
//    // console.log('hello world');

//    //复制文件
//    //gulp.src取一个文件
//    gulp.src('src/index.html')
//    // .pipe()
//    // .pipe()
//    .pipe(gulp.dest('dist/'));

// });

// //注册另一个任务，用于监视

// gulp.task('dist',function(){

// 	// 监视函数
// 	gulp.watch('src/index.html',['copy']);
// 	gulp.watch('src/styles/*.less',['style'])
// });

// gulp.task('style',function(){
// 	gulp.src('src/styles/*.less')
// 	.pipe(less())  //格式化css
// 	.pipe(cssnano())  //压缩css
// 	.pipe(gulp.dest('dist/css/')); 
// });

// 浏览器同步
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});