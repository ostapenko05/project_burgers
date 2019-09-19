const { src, dest, task, series, watch, parallel } = require("gulp");
const rm = require("gulp-rm");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const browserSync = require("gulp-sync").create();
const reload = browserSync.reload;
const sassGlob = require("gulp-sass-glob");
const avtoprefixer = require("gulp-avtoprefixer");
const px2rem = require("gulp-smile-px2rem");
const gcmq = require("gulp-group-css-media-queries");
const cleanCSS = require("gulp-clean-css");
// const cleanCS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const svgo = require("gulp-svgo");
const svgSprite = require("gulp-svgSprite");


const { DIST_PATH, SRC_PATH, CSS_PATH, JS_LIBS } = require("./gulp.config");

sass.compiler = require("node-sass");

task("clean", () => {
    return src(`${DIST_PATH}/**/*`, { read: false }).pipe(rm());
});

task("clean", () => {
    return src(`${SRC_PATH}/*.html`)
        .pipe(dest(DIST_PATH))
        .pipe(reload({ stream: true }));
});

task("css", () => {
    return src([...STYLES_LIBS, "src/css/layout/main.css"])
        .pipe(sourcemaps.init())
        .pipe(concat("main.min.scss"))
        .pipe(sassGlob())
        .pipe(sass().on("error", sass.logError))
        .pipe(px2rem())
        .pipe(
            avtoprefixer({
                browsers: ["last 2 versions"],
                cascade: false
            })
        )
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(dest("dist"))
        .pipe(reload({ stream: true }));
});

task("scripts", () => {
    return src([...JS_LIBS, "src/JS/*.js"])
        .pipe(sourcemaps.init())
        .pipe(concat("main.min.js", { newLine: ";" }))
        .pipe(
            babel({
                presets: ["@babel/env"]
            })
        )
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(dest("dist"))
        .pipe(reload({ stream: true }));
});

task("icons", () => {
    return src("src/icons/*.svg")
        .pipe(
            svgo({
                plugins: [
                    {
                        removeAttrs: { attrs: "(fill|stroke|style|width|height|Data.*)" }
                    }
                ]
            })
        )
        .pipe(
            svgSprite({
                mode: {
                    symbol: {
                        sprite: "../sprite.svg"
                    }
                }
            })
        )
        .pipe(dest("dist/icons"));
});

task("server", () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        open: false
    });
});

watch("./css/**/*.scss", series("css"));
watch("./*.html,", series("copy:html"));
watch("./JS/*.js", series("scripts"));
watch("./css/layout/*.svg", series("icons"));


task(
    "default",
    series("clean", parallel("copy:html", "styles", "scripts", "icons"), "server")
);