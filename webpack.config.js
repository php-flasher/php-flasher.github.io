const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('dist/')
    .setPublicPath('/dist')

    .cleanupOutputBeforeBuild()
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableBuildNotifications()

    .enablePostCssLoader()
    .configureManifestPlugin((options) => {
        options.fileName = '../_data/manifest.yml';
    })

    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[ext]',
    })

    .copyFiles({
        from: './assets/sounds',
        to: 'sounds/[path][name].[ext]',
    })

    .addEntry('homepage', './assets/js/homepage.js')
    .addEntry('main', './assets/js/main.js')

    .addEntry('adapter-flasher', './assets/js/adapter/flasher.js')
    .addEntry('adapter-noty', './assets/js/adapter/noty.js')
    .addEntry('adapter-notyf', './assets/js/adapter/notyf.js')
    .addEntry('adapter-pnotify', './assets/js/adapter/pnotify.js')
    .addEntry('adapter-sweetalert', './assets/js/adapter/sweetalert.js')
    .addEntry('adapter-toastr', './assets/js/adapter/toastr.js')
;

const config = Encore.getWebpackConfig();

config.plugins.forEach((plugin) => {
    if (plugin.constructor.name === 'AssetsWebpackPlugin') {
        plugin.options.filename = '../_data/entrypoints.yml';
    }
});

module.exports = config;
