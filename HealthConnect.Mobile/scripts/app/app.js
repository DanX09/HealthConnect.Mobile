/*(function (global) {
    var app = global.app = global.app || {};
    app.application = new kendo.mobile.Application(document.body, { layout: "drawer-layout", initial: "views/login.html"});
})(window);*/

define(
    function(require){
        var kendoApp,
    	    $ = require('jQuery'),
    	    kendo = require('kendo'),
    	    kendoLayouts = {
    		    main: require('app/views/layout')
    	    },
    	    kendoViews = {
                home: require('app/views/home'),
                history: require('app/views/history'),
                login: require('app/views/login'),
                appointments: require('app/views/referralAppointments'),
                incoming: require('app/views/incoming'),
    	    };
        
        // Loop through all kendo layouts and views and spit their HTML into the BODY
    	function onBeforeInit() {
    		var i,
                item,
                objects = [kendoLayouts, kendoViews],
                htmlBuffer = [];

    		for (i=0; i<objects.length; i++) {
    			for (item in objects[i]) {
    				if (objects[i].hasOwnProperty(item) && objects[i][item].hasOwnProperty('html')) {
    					htmlBuffer.push(objects[i][item].html);
    				}
    			}
    		}

    		$(document.body).prepend(htmlBuffer.join(''));
    	}
        
        function initKendo() {
            function onInit() {
                kendoApp = new kendo.mobile.Application(document.body, {
                    initial: login,
                    layout: 'drawer-layout'
                });
            }
            
            /**
             * We have to load up kendo once we know if the user is
             * signed in or not in order to determine which view to start with
             */

        }
        
        return {
            init: function () {
                onBeforeInit();
                initKendo();
            },
            kendoApp: function() { return kendoApp; },
            layouts: kendoLayouts,
            views: kendoViews
        }
    }
);
