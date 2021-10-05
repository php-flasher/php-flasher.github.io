let mix = require('laravel-mix');

mix
    .setPublicPath('dist')
    .postCss('assets/index.pcss', 'dist/', [
        require("tailwindcss"),
    ])
    .version()
;
