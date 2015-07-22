var loginShowing = false

function initLoginForm() {

    bindLoginButton()
    bindLogoutButton()
    setupForm()
    buildProfileStepOne()
}

function bindLoginButton() {

    $('#login-button').on('click', function () {
        if (loginShowing) {
            fadeContainerOut()
        } else if (!loginShowing) {
            fadeContainerIn()
        }
    })

    function fadeContainerIn() {
        $('#login-container').fadeIn(300)
        $('#login-button').html('Hide')
        $('#email').focus()
        loginShowing = true
    }

    function fadeContainerOut() {
        $('#login-container').fadeOut(200)
        $('#login-button').html('Login')
        loginShowing = false
    }
}

function bindLogoutButton() {
    $('#logout-button').on('click', function () {
        $.post("log_out", function (data) {
            $('#logout-button').fadeOut(200).remove()

            $('#header-float .content').append(' <div class="button" id="login-button">Login</div>')
            bindLoginButton()
            loginShowing = false
        });
    })
}

function setupForm() {

    $('#logthefuckin').on('click', function () {
        if ($('#email').val() < 1) {
            alert('You must enter your email')
            return false
        }

        if ($('#password').val() < 1) {
            alert('You must enter your password')
            return false
        }

    })
}

function loginComplete(){
    $('#login-container').fadeOut(200)
    $('#login-button').fadeOut(200).remove()

    $('#header-float .content').append('<div class="button session" id="logout-button">Logout</div>')
    bindLogoutButton()

    $('#password').val('')
    $('#email').val('')
}

function buildProfileStepOne() {
    $('.island-form.one form').submit(function(e){
        e.preventDefault()

        var email = $('#user_email').val(),
            pass = $('#user_password').val(),
            pass_conf = $('#user_password_confirmation').val()

        if (email == '') {
            alert('you must put an email')
            return false;
        } else if (pass == '' || pass_conf == '') {
            alert('you must put a password and confirmaton')
            return false;
        } else if (pass != pass_conf) {
            alert('password and confirmation must match')
            return false;
        }

        $.ajax({
            type: "POST",
            url: '/sign_up',
            data: {
                user:{
                    email: email,
                    password: pass,
                    password_confirmation: pass_conf
                }
            },
            dataType: "json",
            error: function(data) {

                var obj = jQuery.parseJSON( data );

                alert(obj.error_message)
            },
            success: function(data) {
                alert(data);
            }
        });

        return false;
    })
}
