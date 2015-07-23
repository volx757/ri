var loginShowing = false

function initLoginForm() {
    bindLoginButton()
    bindLogoutButton()
    setupForm()
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
            $('#notification-box').append("<div class='login-notice'>You must enter an email.</div>");
            notification('notify')
            return false
        }

        if ($('#password').val() < 1) {
            $('#notification-box').append("<div class='login-notice'>You must enter your password.</div>");
            notification('notify')
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

function resetLogin(){
    $('#login-container').fadeOut(200)
    $('#login-button').html('Login')
    loginShowing = false
}

function initSignupForm(){
    buildProfileStepOne()
    $('#signup-box').on('click', function(){
        hideSignupForm()
    })
}

function showSignupForm(){
    lockScroll()
    if (didStartSignup){
        $('#site-wrapper').addClass('half-opaque')
        resetLogin()
        $('#signup-box').fadeIn(1000)
    } else{
        didStartSignup = true
        $.ajax({
            type: "GET",
            url: '/register'
        });
    }

    $('.signup').click(function(event){
        event.stopPropagation();
    });
}

function hideSignupForm(){
    $('#signup-box').fadeOut(200)
    unlockScroll()
    $('#site-wrapper').removeClass('half-opaque')
}

function clearSignupForm(){
    var signupBox =  $('#signup-box')
    signupBox.fadeOut(200)
    signupBox.empty()
    hideSignupForm()
}

function buildProfileStepOne() {
    $('.island-form.one form').submit(function(e){
        e.preventDefault()

        var email = $('#user_email').val(),
            pass = $('#user_password').val(),
            pass_conf = $('#user_password_confirmation').val()

        if (email == '') {
            $('#notification-box').append("<div class='login-notice'>You must enter an email.</div>");
            notification('notify')
            return false;
        } else if (pass == '' || pass_conf == '') {
            $('#notification-box').append("<div class='login-notice'>you must put a password and confirmaton</div>");
            notification('notify')
            return false;
        } else if (pass != pass_conf) {
            $('#notification-box').append("<div class='login-notice'>password and confirmation must match</div>");
            notification('notify')
            return false;
        }

        var user  = {
            email: email,
            password: pass,
            password_confirmation: pass_conf
        }

        $.ajax({
            type: "POST",
            url: '/sign_up',
            data: user,
            error: function(data) {
                var obj = jQuery.parseJSON( data );
                alert(obj.error_message)
            },
            success: function(data) {

            }
        });

        return false;
    })
}
