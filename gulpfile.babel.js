import gulp from 'gulp'
import todo from 'gulp-todo'
import size from 'gulp-size'
import notify from 'gulp-notify'


const path = {
  source: './styles/base.less',
  sendto: '.'
}

gulp.task('todo', () => {
 gulp.src(path.source)
   .pipe(todo({
     customTags: [
       'XXX',
       'SNTX-ALL',
       'SNTX-SPECIAL',
       'SNTX-JS',
       'SNTX-CSS',
       'SNTX-MD',
       'SNTX-YAML',
       'SNTX-JSON',
       'SNTX-HTML',
       'SNTX-JADE',
       'SNTX-REGEX',
       'SNTX-PHP'
     ]
   }))
   .pipe(gulp.dest(path.sendto))
})


gulp.task('size', () => {
  var s = size()
  return gulp.src(path.source)
    .pipe(s)
    .pipe(gulp.dest(path.sendto))
    .pipe(notify({
      onLast: true,
      message: function () {
        return 'Total size ' + s.prettySize
      }
    }))
})

gulp.task('default', ['todo', 'size'])
