define(
    ['jQuery', 'kendo', 'text!../../../views/layout.html'],
    function($, kendo, layoutHtml) {
        
        var viewModel = kendo.observable({
            currentView: currentView
    	});

        function initAjaxLoader() {          
            $(document).ajaxStart(function() {
                app.kendoApp().pane.showLoading();
            });
            
            $(document).ajaxStop(function() {
               app.kendoApp().pane.hideLoading(); 
            });
        }
        
        // Helper function to get the current view in case we don't have access to app.kendoApp().view() yet...
        function currentView() {
            var path = window.location.pathname.split('/');
            path = path[path.length - 1];
            
            var hasHash = /#/;
            if (!hasHash.test(path)) {
                return '';
            }
            
            var captureView = /#(.$)/;
            return path.match(captureView)[0];
        }
        
    	return {
    		html: layoutHtml,
            
            init: function() {
                initAjaxLoader();
            },
            
    		viewModel: viewModel
    	};
    }
);