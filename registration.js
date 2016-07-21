$(document).ready(function () {
    $(".button").on('click', function () {
        var email = $('#email').val();
        var username = $('#username').val();
        var password = $('#password').val();

        if (typeof email && username && password !== 'undefined') {
            $(".success").show();
        };
    });

});