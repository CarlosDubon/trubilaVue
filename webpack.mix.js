let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
   'resources/assets/template/css/bootstrap-grid.css',
   'resources/assets/template/css/bootstrap.min.css',
   'resources/assets/template/css/normalize.css',
   'resources/assets/template/css/slick-theme.css',
   'resources/assets/template/css/slick.css',
   'resources/assets/template/css/style.css',
   'resources/assets/template/css/calendarPlug.css',
   'resources/assets/template/css/calendarDayGrid.css',

],'public/css/all.css')
.scripts([
   'resources/assets/template/js/jquery.js',
   'resources/assets/template/js/slick.js',
   'resources/assets/template/js/sticky-aside.js',
   'resources/assets/template/js/main.js',
   'resources/assets/template/js/calendarPlug.js',
   'resources/assets/template/js/calendarDayGrid.js',
],'public/js/all.js')
.js([
   'resources/assets/js/app.js'
],'public/js/app.js')