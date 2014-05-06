require.config({
    paths: {
        jQuery: "lib/jquery.min",
        kendo: "lib/kendo.all.min",
        dateHelper: "lib/dateHelper",
        text: 'lib/text'
    },
    shim: {
        jQuery: {
            exports: "jQuery"
        },
        kendo: {
            deps: ["jQuery"],
            exports: "kendo"
        },
        dateHelper: {
            deps: ["jQuery"],
            exports: "dateHelper"
            }
    }
});

// Expose the app module to the global scope so Kendo can access it.
var app;

require(
    ['jQuery','app/app'],
    function ($, application) {
        app = application;
        
        $(document).ready(function() {
        	function onDeviceReady() {
        		app.init();

                //navigator.splashscreen.hide();
                //$(document.body).height(window.innerHeight);
        	}

        	if (!window.device) {
        		onDeviceReady();
        	} else {
        		document.addEventListener('deviceready', onDeviceReady);
        	}
        });
    }
);

