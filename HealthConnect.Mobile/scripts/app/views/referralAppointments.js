define(
['jQuery', 'kendo', 'dateHelper', 'text!../../../views/referralAppointments.html'],
function ($, kendo, dateHelper, referralAppointmentsHtml) {
      var viewModel = kendo.observable({});
   
    return {
        html: referralAppointmentsHtml,
                    		
        init: function(e) {
            
        },
            
        beforeShow: function(e) {
            
        },
        
        show: function(e) {
            
        },
        
        viewModel: viewModel
    }
})