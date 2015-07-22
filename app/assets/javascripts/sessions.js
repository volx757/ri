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

    function fadeContainerIn(){
        $('#login-container').fadeIn(300)
        $('#login-button').html('Hide')
        $('#email').focus()
        loginShowing = true
    }

    function fadeContainerOut(){
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

function setupForm(){

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
