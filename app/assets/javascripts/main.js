var hasScrolled = false,
    didStartSignup = false;

$(document).ready(function () {

    if (window.pageYOffset >= 30) {
        $('.fa-angle-down').hide()
    }
    $(document).scroll(function () {
        fadeOutDownArrow()
    });

    $('.nav-item').localScroll({duration: 300});

    bindFaqCategories();
    writeFaqQuestions(0);
    initializeFaq();
    initializeIngredients()
    setupContactNavUnderline()
    bindShowAllQuestions()

    inquiryForm();
    contactForm();

    handleMobileNav();
    limitTextInput();
    activeContactMap();
    initLoginForm()
    initSignupForm()
    landingAnimation()
});

function activeContactMap() {
    $('.map-cover').on('click', function () {
        $(this).fadeOut(500)
    })
}

function handleMobileNav() {
    if (isMobile()) {
        $('.nav-item.home .nav-category').removeAttr('href')

        $('.nav-item.home .nav-category').click(function (e) {
            $(".nav-item.home ul").toggle()
        });

        $(".nav-item.home li").click(function (e) {
            $(".nav-item.home ul").hide()
        });
    }
}

function isMobile() {
    return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function inquiryForm() {
    $('#inquiry_form').on('submit', function () {

        var email = $('#email'),
            content = $('#content')

        if (email.val().length < 1) {
            email.attr('placeholder', 'ENTER YOUR EMAIL ADDRESS')
            email.css('color', 'green')
            return false;
        }
        if (content.val().length < 1) {
            content.attr('placeholder', 'DO YOU HAVE A QUESTION?')
            content.css('color', 'green')
            return false;
        }

        $(this).fadeOut(500, function () {
            $('.inquiry-successful').fadeIn();
        });

    })
}

function contactForm() {
    $('#contact-form').on('submit', function () {

        var email = $('#email'),
            content = $('#content')

        if (email.val().length < 1) {
            email.attr('placeholder', 'ENTER YOUR EMAIL ADDRESS')
            email.css('color', 'green')
            return false;
        }
        if (content.val().length < 1) {
            content.attr('placeholder', 'GO AHEAD AND WRITE US A MESSAGE..')
            content.css('color', 'green')
            return false;
        }

        $(this).fadeOut(500, function () {
            var contactSuccessful = $('.contact-successful')

            contactSuccessful.fadeIn();
            contactSuccessful.css('display', 'inline-block')
            $('.general-contact').css('top', '0')
        });

    })
}

function limitTextInput() {
    var max = 800;
    $('#content').keypress(function (e) {
        if (e.which < 0x20) {
            // e.which < 0x20, then it's not a printable character
            // e.which === 0 - Not a character
            return;
        }
        if ($(this).value.length == max) {
            e.preventDefault();
        } else if ($(this).value.length > max) {
            $(this).value = $(this).value.substring(0, max);

            $('#content').css({
                'box-shadow': '0px 0px 0px #444',
                '-moz-box-shadow': '0px 0px 0px #444',
                '-web-kit-boxshadow': '0px 0px 0px #444'
            })
        }
    });
}

function activateNightPage() {

    $('#night').on('click', function () {
        //  return false;

        $('#night-overlay').animate({
            opacity: 1,
            height: "100%"
        }, 5000)
    })
}

function initLoginForm() {

    bindLoginButton()

    $('#hide-login').on('click', function () {
        $('#login-container').fadeOut(200)
        bindLoginButton()
    })

    $('#logout-button').on('click', function(){
        $.post( "log_out", function( data ) {

        });
    })

}
function lockScroll() {
    $('body').css('overflow', 'hidden')
}

    function unlockScroll(){
        $('body').css('overflow', 'inherit')
    }

function bindLoginButton() {
    $('#login-button').on('click', function () {
        $('#login-container').fadeIn(300)
        $('#login-button').off('click')
    })
}

function landingAnimation() {
    $(window).scroll(function () {
        if (!hasScrolled) {
            $('.welcome h3').css('animation', '1.4s ease-in 0s normal forwards 1 running fadeIn')
            hasScrolled = true
        }
    })
}

