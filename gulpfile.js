/* 

    Gulp eklenti tanimlamalari 
    
    @sass 
    sass dosyalarini css'e cevirir.
    
    @uglifiy_js
    js dosyalarini minify eder.
    
    @file_include
    html leri ayristirip moduler bir yapi olusturur.
    
    @concat_css
    css dosyalarını birlestirir.
    
    @concat 
    js dosyalarini birlestirir.
    
    @minify_css
    css dosyalarini minify eder.
    
    @rename
    dosyalari yeniden isimlendirebilmemize olanak saglar.    
    
 
    */

    var gulp = require("gulp"),
    sass = require("gulp-sass"),
    uglify_js = require("gulp-uglifyjs"),
    file_include = require("gulp-file-include"),
    concat_css = require("gulp-concat-css"),
    concat = require("gulp-concat"),
    minify_css = require("gulp-minify-css"),
    rename = require("gulp-rename");
    



/* 

    Assets (assets) klasorunde urun ortamina hazir sekilde yapilandirilmis klasorler ve dosyalar bulunur.
    Dev (dev) klasorunde projenin yapilandirilandigi klasorler ve dosyalar bulunur.
    
    */

    var assets_dir = "assets/",
    assets_css_dir = "assets/css/",
    assets_js_dir = "assets/js/",
    assets_img_dir = "assets/img/",
    dev_dir = "dev/",
    dev_js_dir = "dev/js/",
    dev_layouts_dir = "dev/layouts/",
    dev_pages_dir = "dev/pages/",
    dev_scss_dir = "dev/scss/",
    dev_scss_sub_dir = "dev/scss/*/",
    dev_vendor_dir = "dev/vendor/";




/* 
    Gorev I : sass
    
    Ana sass dosyasini (dev/scss/main.scss) css'e cevir ve cevirilen css dosyasini minify edilip assets/css klasorune main.min.css olarak kaydedilmesi.
    
    */

    gulp.task("sass", function() {
        return gulp.src(dev_scss_dir + "main.scss")
        .pipe(sass())
        .pipe(minify_css({
            compatibility: 'ie8'
        }))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest(assets_css_dir));
    });




/* 

    Gorev II : external_js
    
    Eklentilerin cagirildigi ve eklentilerle bagimli olan javascriptlerin bulundugu external.js dosyasının (dev/js/external.js)
minify edilip assets/js klasorune external.min.js olarak kaydedilmesi.

*/

gulp.task("external_js", function() {
    return gulp.src(dev_js_dir + "external.js")
    .pipe(uglify_js())
    .pipe(rename('external.min.js'))
    .pipe(gulp.dest(assets_js_dir));
});




/* 

    Gorev III : main_js
    
    Proje icin yazilmis javascriptlerin bulundugu main.js dosyasının (dev/js/main.js) minify edilip assets/js klasorune main.min.js olarak kaydedilmesi.
    
    */

    gulp.task("main_js", function() {
        return gulp.src(dev_js_dir + "main.js")
        .pipe(uglify_js())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest(assets_js_dir));
    });




/* 

    Gorev IV : plugins_js
    
    Kullanilan eklentilerde bulunan javascriptlerin (dev/vendor) birlestirilip assets/js klasorune plugins.min.js olarak kaydedilmesi.
    
    */

    gulp.task("plugins_js", function() {
        return gulp.src([])
        .pipe(concat("plugins.min.js"))
        .pipe(uglify_js())
        .pipe(gulp.dest(assets_js_dir));
    });




/* 

    Gorev V : plugins_css
    
    Kullanilan eklentilerde bulunan css'lerin (dev/vendor) birlestirilip assets/css klasorune plugins.min.css olarak kaydedilmesi.
    
    */

    gulp.task("plugins_css", function() {
        return gulp.src([])
        .pipe(concat_css("plugins.min.css"))
        .pipe(minify_css({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest(assets_css_dir));
    });





/* 
    Gorev VI : bootstrap
    
    Bootstrap kutuphanesinin ozellestirilmis sass dosyalarının css e cevirilip assets/css klasorune bootstap.min.css olarak kaydedilmesi.
    
    */

    gulp.task("bootstrap", function() {
        return gulp.src(dev_scss_dir + "bootstrap.scss")
        .pipe(sass())
        .pipe(minify_css({
            compatibility: 'ie8'
        }))
        .pipe(rename('bootstrap.min.css'))
        .pipe(gulp.dest(assets_css_dir));
    });





/* 
    Gorev VII : file_include
    
    Parcalanmis html sablonlarini birlestirilmesi ve ana dizine kaydedilmesi.
    
    */

    gulp.task('file_include', function() {
        return gulp.src(dev_pages_dir + "*.html")
        .pipe(file_include({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest("./"));
    });


/* 

    Degisiklik yapildikca calisacak gorevler
    
    Gorev I (sass),
    Gorev II (external_js),
    Gorev III (main_js),
    Gorev VI (bootstrap)
    Gorev VII (file_include)
    
    */

    gulp.task("watch", function() {
        gulp.watch(dev_scss_sub_dir + "*.scss", ['sass']);
        gulp.watch(dev_js_dir + "external.js", ['external_js']);
        gulp.watch(dev_js_dir + "main.js", ['main_js']);
        gulp.watch(dev_scss_dir + "bootstrap/*.scss", ['bootstrap']);
        gulp.watch(dev_pages_dir + "*.html", ['file_include']);
        gulp.watch(dev_layouts_dir + "*.html", ['file_include']);
    });





/* 

    Varsayilan olarak calistarilacak gorevler
    
    Gorev I (sass),
    Gorev II (external_js),
    Gorev III (main_js),
    Gorev IV (plugins_js)
    Gorev V (plugins_css)
    Gorev VI (bootstrap)
    Gorev VII (file_include)
    
    */

    gulp.task("default", ["watch", "sass", "external_js", "main_js", "plugins_js", "plugins_css", "bootstrap", "file_include"]);