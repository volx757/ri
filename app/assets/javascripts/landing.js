var clicked = false,
    longEmail = 0,
    formShowing = false;

$(document).ready(function () {

    bindSlideButton()
    setupContactRequest()
   // mobileScrollLevy()

    function setupContactRequest() {
        $('#new_user').on('submit', function (e) {
            var email = $('#email'),
                error = $('#error-box')

            email.focus(function () {
                $(this).css('color', 'black')
            })

            if (email.val().length < 1) {
                error.html('ENTER YOUR EMAIL').hide().css('color', 'red').fadeIn(200)
                return false;
            }
            if (email.val().length > 250) {
                var msg = 'THAT EMAIL IS LONG...'
                if (longEmail == 0) {
                    msg = 'THAT EMAIL IS LONG...'
                    longEmail++
                } else if (longEmail == 1) {
                    msg = 'TOO LONG...'
                    longEmail++
                } else if (longEmail == 2) {
                    msg = 'YOU EMAIL US.'
                    longEmail++
                } else if (longEmail > 2) {
                    return false;
                }
                error.html(msg).hide().css('color', 'red').fadeIn(200)
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
                    //console.log(response.responseText);
                    error.html(response.responseText).hide().css('color', 'red').fadeIn(200)
                },
                success: function (data) {
                    // console.log(data)
                    var formBox = $('#signupform')

                    error.css('display', 'none')
                    $('input').css('display', 'none')

                    formBox.find('h3').html('WELCOME TO THE FAM').hide().css({
                        color: 'black',
                        fontWeight: '800',
                        fontSize: '2.2em',
                        padding: '0',
                        height: '99px',
                        margin: '25px 0 0 0'
                    }).fadeIn(1200).addClass('text-shadow')

                    formBox.addClass('op-out')
                    $('.welcome img').addClass('gold-shadow')

                    $('#landing-container').find('h2, #signupform').on('click', function () {
                        formBox.removeClass('op-out').removeClass('push-signup-down')
                        $('#landing-container').find('h2').removeClass("invert-button").off();
                        $('.slide-container .button').css('cursor', 'default')
                        formShowing = false
                        $('.slide-container h2').html('Welcome to the Fam')
                    });

                    setTimeout(function () {
                        formBox.removeClass('op-out').removeClass('push-signup-down')
                        $('#landing-container').find('h2').removeClass("invert-button").off();
                        $('.slide-container .button').css('cursor', 'default')
                        formShowing = false
                        $('.slide-container h2').html('Welcome to the Fam')
                    }, 4000)
                }
            });
            return false;
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
                $('#social-container').css('z-index', '200')
                clicked = false
                formShowing = false
            } else {
                $('#signupform').addClass('push-signup-down')
                $(this).addClass("invert-button");
                $('#social-container').css('z-index', '1')
                clicked = true
                formShowing = true
            }
        })
    }

    function mobileScrollLevy(){
        if (isMobile()){
            $(window).scroll(function(){
               console.log($('#social-container').position().top)
            })
        }

        function isMobile() {
            return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }
    }

});
