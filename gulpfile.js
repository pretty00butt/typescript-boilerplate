const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const del = require("del");
const sourcemaps = require("gulp-sourcemaps");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

gulp.task("clean", function(cb) {
  del(["dist/*"]);
  cb();
});

gulp.task("scripts", ["clean"], function() {
  return gulp
    .src("src/*.ts")
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function() {
  gulp.watch("src/**/*.ts", ["scripts"]);
});

gulp.task("build", ["scripts"]);

gulp.task("default", ["watch", "scripts"], function() {
  nodemon({
    script: "dist/index.js",
    watch: "dist",
    ext: "js",
    env: { NODE_ENV: "development" }
  });
});
