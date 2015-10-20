var gulp = require('gulp');
var rename = require('gulp-rename');
var ejs = require("gulp-ejs");
var jsonData = require('./src/data/test.json');
var taskSet= [];
//ページ振り分け用。
var taskNumber = 0;
//タスクをページ毎に設定。
for (var key in jsonData){
 (function(key) {
  gulp.task('ejs', function(){
  /*gulp.task(jsonData[key].id, function(){*/
	 gulp.src('./src/ejs/template.ejs')
		.pipe(ejs({
		 jsonData: jsonData,//JSONデータをテンプレートファイルに渡す。
		 flag:taskNumber
		}))
		.pipe(rename(jsonData[key].id+'.html')) //出力ファイル名。
		.pipe(gulp.dest('./app/')); //ファイル出力先。
	 taskNumber++;
  });
 })(key);
 /*taskSet.push(jsonData[key].id)*/
 gulp.task('default', ['ejs']);
}