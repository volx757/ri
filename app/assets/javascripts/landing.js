var clicked = false

$(document).ready(function () {

    bindSlideButton()
    setupContactRequest()

    function setupContactRequest() {
        $('#new_user').on('submit', function (e) {
            e.preventDefault()

            var email = $('#email'),
                error = $('#error-box')

            email.focus(function () {
                $(this).css('color', 'black')
            })

            if (email.val().length < 1) {
                error.html('ENTER YOUR EMAIL').hide().css('color', 'red').fadeIn(200)
                return false;
            }

            if (!validateEmail(email.val())) {
                error.html('EMAIL IS INVALID').hide().css('color', 'red').fadeIn(200)
                return false;
            }

            $.ajax({
                type: "POST",
                url: '/landing',
                data: 'email=' + email.val(),
                error: function (response) {
                    console.log(response.responseText);
                    var responseLength = response.responseText.length
                    error.html(response.responseText.slice(2, responseLength - 2)).hide().css('color', 'red').fadeIn(200)
                },
                success: function (data) {
                    console.log(data)
                    error.html('SUCCESS!').hide().css('color', 'green').fadeIn(200)

                    $('#landing-container').find('h2').on('click', function () {
                        $('#signupform').removeClass('push-signup-down')
                        $(this).removeClass("invert-button");
                        $(this).off()


                        setTimeout(function () {
                            $('#signupform').removeClass('push-signup-down')
                            $(this).removeClass("invert-button");
                            $('#landing-container').find('h2').off()
                        }, 5000)
                    });
                }
            });
        });

        function validateEmail(email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        }
    }

    function bindSlideButton() {
        $('#landing-container').find('h2').on('click', function () {
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
    }

});
