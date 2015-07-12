var indexProduct = [
    {
        'title': 'Custom Pack',
        'price': '$36',
        'desc1': '6-pack or 12-pack',
        'desc2': '10oz/16oz',
        'desc3': 'mix & match flavors'
    },
    {'title': 'Cleanses', 'price': '$24', 'desc1': '3-30 juices', 'desc2': '16oz', 'desc3': '1/2 day to 5 day cleanse'},
    {
        'title': 'Low-Glycemic Cleanses',
        'price': '$54',
        'desc1': '3-30 juices',
        'desc2': '16oz',
        'desc3': '1/2 day to 5 day cleanse'
    }
];

$(document).ready(function () {

    if (window.pageYOffset >= 30) {
        $('.fa-angle-double-down').css('display', 'none')
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

    var crawler = $('.index-product')

    crawler.eq(0).addClass('0')
    crawler.eq(1).addClass('1')
    crawler.eq(2).addClass('2')

    for (var i = 0; i < 3; i++) {
        crawler = $('.index-product.' + i)

        var title = crawler.find('h4'),
            price = crawler.find('.price'),
            desc1 = crawler.find('.desc1'),
            desc2 = crawler.find('.desc2'),
            desc3 = crawler.find('.desc3');

        title.append(indexProduct[i]['title'])
        price.append(indexProduct[i]['price'])
        desc1.append(indexProduct[i]['desc1'])
        desc2.append(indexProduct[i]['desc2'])
        desc3.append(indexProduct[i]['desc3'])
    }
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
        $('#login-container').animate({
            top: "-=270"
        }, 200, function () {
            $('#home-container').animate({
                top: "-=250"
            }, 100);
        });
        bindLoginButton()
    })

    $('#logout-button').on('click', function(){
        $.post( "log_out", function( data ) {

        });
        alert( gon.logged_in)
    })

}

function bindLoginButton(){
    $('#login-button').on('click', function () {
        $('#home-container').animate({
            top: "+=250"
        }, 200, function () {
            $('#login-container').animate({
                top: "+=270"
            }, 100);
        });
        $('#login-button').off('click')
    })
}