var hasScrolled = false,
    didStartSignup = false;

$(document).ready(function () {

    setupContactNavUnderline()
    contactForm();
    handleMobileNav();
    limitTextInput();
    activeContactMap();

    initLoginForm()
    initSignupForm()



    landingAnimation()

});


var _nav = (function () {

    var execute = {
        init: function () {

        }
    };

    return execute;

})();

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


function landingAnimation() {
    $(window).scroll(function () {
        if (!hasScrolled) {
            $('.welcome h3').css('animation', '1.4s ease-in 0s normal forwards 1 running fadeIn')
            hasScrolled = true
        }
    })
}
