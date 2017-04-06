(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        isDecafOverTwenty: function(order, strength) {
            if (/decaf/.test(order) && strength > 20)
                return false;
            else
                return true;
        },

        isExistingEmail: function(db) {
            var cb = function(serverResponse) {
                var email = $('#emailInput');
                if (serverResponse == null) {
                    console.log('no response');
                    email.get(0).setCustomValidity('');
                } else {
                    email.get(0).setCustomValidity(email.val() + ' has an order Pending');
                }
            };

            $('#emailInput').on('input', function(event) {
                var email = event.target.value;
                db.get(email, cb);
            });
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
