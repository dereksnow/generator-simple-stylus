var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync');
var nib = require('nib');
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './',
			directory: true
		}
	});
});

gulp.task('stylus', function() {
	gulp.src('./**/*.styl')
		.pipe(stylus({
			use: [nib()]
		}))
		.pipe(gulp.dest('.'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('bs-reload', function() {
	browserSync.reload();
});

gulp.task('default', ['stylus', 'browser-sync'], function() {
	gulp.watch('./assets/styles/*.styl', ['stylus']);
	gulp.watch(['./**/*', '!./assets/**/*.styl', '!./assets/**/*.css', '!./node_modules/**/*'], ['bs-reload']);
});
