var indexProduct = [
    {
        'title': 'Build A Pack',
        'price': '$96',
        'desc1': '12-pack or 24-pack',
        'desc2': '10oz/16oz'
    }
];

var hasScrolled = false,
    loginShowing = false;

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

    writeIndexProducts()
    activateNightPage();

    inquiryForm();
    contactForm();

    handleMobileNav();
    limitTextInput();
    activeContactMap();
    initLoginForm()
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

function writeIndexProducts() {

        var title = $('.index-product').find('h4'),
            price = $('.index-product').find('.price'),
            desc1 = $('.index-product').find('.desc1'),
            desc2 = $('.index-product').find('.desc2')

        title.append(indexProduct[0]['title'])
        price.append(indexProduct[0]['price'])
        desc1.append(indexProduct[0]['desc1'])
        desc2.append(indexProduct[0]['desc2'])
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

    bindLogoutButton()

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

function bindLoginButton() {
    $('#login-button').on('click', function () {
        if (loginShowing) {
            $('#login-container').fadeOut(200)
            $('.login-notice').remove()
            loginShowing = false
        } else if (!loginShowing) {
            $('#login-container').fadeIn(300)
            loginShowing = true
        }
    })
}

function bindLogoutButton() {
    $('#logout-button').on('click', function () {
        $.post("log_out", function (data) {
            $('#logout-button').fadeOut(200).remove()

            $('#header-float .content').append(' <div class="button" id="login-button">Login</div>')
            bindLoginButton()
        });
    })
}


function landingAnimation() {
    $(window).scroll(function () {
        //  if(hasScrolled){
        $('.welcome h3').css('animation', '1.4s ease-in 0s normal forwards 1 running fadeIn')
        hasScrolled = true
        //  }
    })
}
