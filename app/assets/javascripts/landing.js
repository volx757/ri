var clicked = false
$(document).ready(function(){

    $('#landing-container h2').on('click', function () {
        if (clicked) {
            $('#signupform').removeClass('push-signup-down')
            $(this).removeClass("invert-button");
            clicked = false
        } else {
            $('#signupform').addClass('push-signup-down')
            $(this).addClass("invert-button");
            clicked = true
        }
    })
    contactRequest()

    function contactRequest() {
        $('#new_user').on('submit', function () {
            var email = $('#user_email')

            if (email.val().length < 1) {
                email.attr('placeholder', 'ENTER YOUR EMAIL')
                email.css('color', 'red')
                return false;
            }

            if (!validateEmail(email.val())){
                email.val('')
                email.attr('placeholder', 'INVALID EMAIL')
                email.css('color', 'red')
                return false;
            }


            $(this).fadeOut(500, function () {
                $('.success').fadeIn();
                $('#landing-container h2').on('click', function () {
                    $('#signupform').removeClass('push-signup-down')
                    $(this).removeClass("invert-button");
                    $(this).off()

                })

                setTimeout(function () {
                    $('#signupform').removeClass('push-signup-down')
                    $(this).removeClass("invert-button");
                    $('#landing-container h2').off()
                }, 2000)
            });
        })

        function validateEmail(email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        }
    }
})

