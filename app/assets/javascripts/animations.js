function fadeOutDownArrow(){
    var arrow = $('.fa-angle-down')

    if ($(window).scrollTop() >= 30) {
        arrow.fadeOut(500)
    }
}

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
