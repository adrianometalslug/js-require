define(['jquery'], function ($) {
    'use strict';

    var app = function () {
        var $public = {};
        var $private = {};

        $private.projectPaths = {};

        $public.init = function init() {
            console.log('carregou app.js');
            $private.loadPageScripts();
        };

        $public.setPath = function setPath(pathName, pathUrl) {
            $private.projectPaths[ pathName ] = pathUrl;
            return $public;
        };

        $public.getPath = function getPath(pathName) {
            return $private.projectPaths[ pathName ];
        };

        $private.loadPageScripts = function loadPageScripts() {
            $private.initModule('controllers/commonController');
        };

        $private.initModule = function initModule(module) {
            require([module], function (module) {
                module.init();
            });
        };

        return $public;
    };

    return app();
});