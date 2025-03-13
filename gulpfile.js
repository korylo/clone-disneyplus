const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

// Função para compilar o Sass
function styles() {
  return gulp
    .src("./src/styles/**/*.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError)) // Adicionando tratamento de erro
    .pipe(gulp.dest("./dist/css"));
}

// Função para otimizar imagens
function images() {
  return gulp
    .src("./src/images/**/*")
    .pipe(imagemin()) // Correção: Remover "sass" e apenas usar "imagemin"
    .pipe(gulp.dest("./dist/images"));
}

// Exportar as tarefas
exports.default = gulp.parallel(styles, images);
exports.watch = function () {
  gulp.watch("./src/styles/**/*.scss", gulp.parallel(styles)); // Assista por alterações em arquivos .scss
};
