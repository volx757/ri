function setupContactNavUnderline() {

    var nav = $('.contact-nav')

    nav.find('hr').first().show()
    nav.find('.nav-item').on('click', function () {

        nav.find('hr').each(function(){
            $(this).hide()
        })
        $(this).find('hr').show()
    })
}

function activeContactMap() {
    $('.map-cover').on('click', function () {
        $(this).fadeOut(500)
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
