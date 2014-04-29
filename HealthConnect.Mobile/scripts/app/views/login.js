define(
['jQuery', 'kendo', 'text!../../../views/login.html'],
function ($, kendo, loginHtml) {
    var viewModel = kendo.observable({
        isLoggedIn: false,
        username: "",
        password: "",
		onLogin: function onLogin() {
                username = this.get("username").trim(),
                password = this.get("password").trim();

            if (username === "" || password === "") {
                navigator.notification.alert("Both fields are required!",
                    function () { }, "Login failed", 'OK');

                return;
            }

            $.post('http://localhost:5286/Account/Login',
              { userName: username, password: password, api: true })
                .done(function(e)
                {
                  this.set("isLoggedIn", true);
                })
                .error(function(e) {
                navigator.notification.alert("Invalid username or password",
                    function () { }, "Login failed", 'OK');
                });
        },
		onLogout: function () {
            this.clearForm();
            this.set("isLoggedIn", false);
        },
		clearForm: function () {
            this.set("username", "");
            this.set("password", "");
        },
		checkEnter: function(e) {
            if (e.keyCode == 13) {
                $(e.target).blur();
                this.onLogin();
            }
        }
	});
    return {
        html: loginHtml,
        
        init: function(e) {
            viewModel.clearForm();
        },
        
        beforeShow: function (e) {
            
        },
        
        show: function (e) {
            
        },
        
        viewModel: viewModel
    };
})