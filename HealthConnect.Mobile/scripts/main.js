require.config({
    paths: {
        jQuery: "libs/jquery.min",
        kendo: "libs/kendo.mobile.min",
        DateHelper: "libs/DateHelper",
    },
    shim: {
        jQuery: {
            exports: "jQuery"
        },
        kendo: {
            deps: ["jQuery"],
            exports: "kendo"
        }
    }
});

// Expose the app module to the global scope so Kendo can access it.
var app;

require(
    ['jQuery', 'DateHelper'],
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

