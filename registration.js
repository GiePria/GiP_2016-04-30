$(document).ready(function () {
    //validate registration form on submit
    /*  $("#registerForm").validate({
          rules: {
              username: {
                  required: true,
                  minlength: 3
              },
              password: {
                  required: true,
                  minlength: 6
              },
              email: {
                  required: true,
                  email: true
              },
          },
          messages: {
              username: {
                  required: "Please enter a username",
                  minlength: "Your username must consist of at least 3 characters"
              },
              password: {
                  required: "Please provide a password",
                  minlength: "Your password must be at least 6 characters long"
              },
              email: "Please enter a valid email address",
          }
      });*/
    //...
    $(".button").on('click', function () {
        var email = $('#email').val();
        var username = $('#username').val();
        var password = $('#password').val();

        if (email && username && password) {
            $(".success").show();
            event.preventDefault();
        } else {
            $("#ErrorEmail").text("Please enter a valid email address"),
            $("#ErrorUsername").text("Please enter a username"),
            $("#ErrorPassword").text("Please provide a password"),
            $("#error").show();
            event.preventDefault();
        }
    });
});