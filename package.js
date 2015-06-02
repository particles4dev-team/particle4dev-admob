Package.describe({
    summary: "Powerful Ad Plugin for Google AdMob and DFP",
    version: "1.0.0",
    name: "particle4dev:admob",
    git: "https://github.com/particles4dev-team/particle4dev-admob"
});

// meteor test-packages ./
var both        = ['client', 'server'];
var client      = ['client'];
var server      = ['server'];
var cordova     = ['web.cordova'];
var browser     = ['web.browser'];

Cordova.depends({
    'com.google.cordova.admob': '2.7.7'
});

Package.on_use(function(api) {
    api.versionsFrom('1.0');

    // import packages
    api.use(['underscore'], both);
    api.use(['particle4dev:rsvpjs@3.0.18'], client);

    // add files
    api.addFiles('lib/admob.js', cordova);
    if (typeof api.export !== 'undefined') {
        api.export('ADMOB', cordova);
    }
});

Package.on_test(function (api) {
    api.use(['test-helpers', 'tinytest', 'particle4dev:admob']);

    // api.add_files([
    //     'tests/test.js',
    // ], client);
});
