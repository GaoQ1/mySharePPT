title: 自动化工具和CSS的一些分享
speaker: 高权
url:
transition: circle
theme: moon
usemathjax: yes

[slide]
# 干货分享

[slide]
# 如何愉快而享受地写样式
----
* Gulp自动化工具 {:&.moveIn}
* Sass & PostCss
* Flexible

[slide]
# Gulp {:&.flexbox.vcenter}
> Automate and enhance your workflow

[slide]
<pre>
<code>
// 引入 gulp及组件
var gulp    = require('gulp'),                 //基础库
    imagemin = require('gulp-imagemin'),       //图片压缩
    less = require('gulp-less'),          		 //less
    minifycss = require('gulp-minify-css'),    //css压缩
    jshint = require('gulp-jshint'),           //js检查
    uglify  = require('gulp-uglify'),          //js压缩
    rename = require('gulp-rename'),           //重命名
    concat  = require('gulp-concat'),          //合并文件
    clean = require('gulp-clean'),             //清空文件夹
    livereload = require('gulp-livereload');   //livereload

// src - 样式处理
gulp.task('css', function () {
  gulp.src(cssSrc)
      .pipe(less({ style: 'expanded'}))
      .pipe(rename({ suffix: '.min' }))
      .pipe(minifycss())
      .pipe(livereload(server))
      .pipe(gulp.dest(cssDst));
});
</code>
</pre>

[slide]
# Sass & PostCss
----
* [Less](http://less.bootcss.com/) vs [Sass](http://sass.bootcss.com/docs/sass-reference/) {:&.moveIn}
* Sass的工具库([compass](http://compass-style.org/)、[juice](http://kylebrumm.com/juice/))
* PostCss -- [A tool for transforming CSS with JavaScript](http://postcss.org/)

[slide]
# Flexible
## [使用Flexible实现H5页面终端适配](http://blog.gaoquan.wang/2016/03/24/%E4%BD%BF%E7%94%A8Flexible%E5%AE%9E%E7%8E%B0H5%E9%A1%B5%E9%9D%A2%E7%BB%88%E7%AB%AF%E9%80%82%E9%85%8D/)

[slide]
# Q & A
