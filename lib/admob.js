/**
 * exports
 */
ADMOB = {};
(function(){
    var self = this;
    self.setOptions = function (options) {
        var deferred = RSVP.defer();

        AdMob.setOptions(options, function () {
            deferred.resolve();
        }, function () {
            deferred.reject();
        });
        return deferred.promise;
    };
    self.createBanner = function (options) {
        var deferred = RSVP.defer();

        AdMob.createBanner(options, function () {
            deferred.resolve();
        }, function () {
            deferred.reject();
        });
        return deferred.promise;
    };
    self.removeBanner = function () {
        var deferred = RSVP.defer();

        AdMob.removeBanner(function () {
            deferred.resolve();
        }, function () {
            deferred.reject();
        });
        return deferred.promise;
    };
    self.showBanner = function (position) {
        var deferred = RSVP.defer();

        AdMob.showBanner(position, function () {
            deferred.resolve();
        }, function () {
            deferred.reject();
        });
        return deferred.promise;
    };
    self.showBannerAtXY = function (x, y) {
        var deferred = RSVP.defer();

        AdMob.showBannerAtXY(x, y, function () {
            deferred.resolve();
        }, function () {
            deferred.reject();
        });
        return deferred.promise;
    };
    self.hideBanner = function () {
        var deferred = RSVP.defer();

        AdMob.hideBanner(function () {
            deferred.resolve();
        }, function () {
            deferred.reject();
        });
        return deferred.promise;
    };
    self.prepareInterstitial = function (options) {
        var deferred = RSVP.defer();

        options.success = function () {
            deferred.resolve();
        };
        options.error = function (err) {
            deferred.reject(err);
        };
        AdMob.prepareInterstitial(options);
        return deferred.promise;
    };
    self.showInterstitial = function () {
        var deferred = RSVP.defer();

        AdMob.showInterstitial(function () {
            deferred.resolve();
        }, function () {
            deferred.reject();
        });
        return deferred.promise;
    };
}).apply(ADMOB);