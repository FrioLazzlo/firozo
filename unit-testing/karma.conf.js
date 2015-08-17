/**
 * Created by Frio on 15. 8. 2015.
 */
// karma.conf.js
module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'requirejs'],
        basePath: 'tests/',
        files: ['events.js']
    });
};