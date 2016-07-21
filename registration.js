$(document).ready(function () {
    $(".button").on('click', function () {
        $("#registerForm").validate();

        var email = $('#email').val();
        var username = $('#username').val();
        var password = $('#password').val();
        
        $("p").text("Your data: " email + " " username + " " password);

    });
    $(".success").show();
});
