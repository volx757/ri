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

function landingAnimation() {
    $(window).scroll(function () {
        if (!hasScrolled) {
            $('.welcome h3').css('animation', '1.4s ease-in 0s normal forwards 1 running fadeIn')
            hasScrolled = true
        }
    })
}

function fadeOutDownArrow() {
    var arrow = $('.fa-angle-down')

    if ($(window).scrollTop() >= 30) {
        arrow.fadeOut(500)
    }
}
