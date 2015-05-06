const HEADER_POSITION_TRIGGER = 30;

var headerFloating = false;

function fixHeaderPosition(floatHeader) {

    if (headerFloating == false) {
        if ($(this).scrollTop() >= floatHeader.position().top) {
            floatHeader.css("position", "fixed")
            floatHeader.css("top", "0")
            headerFloating = true;
        }
    }
    else if (headerFloating == true) {
        if ($(this).scrollTop() <= HEADER_POSITION_TRIGGER) {
            floatHeader.css("position", "absolute")
            floatHeader.css("top", "30px")
            headerFloating = false;
        }
    }

}


function setupContactNavUnderline() {

    var nav = $('.contact-nav')

    nav.find('hr').first().show()
    nav.find('.nav-item').on('click', function () {

        //var clickedNum = $(this).data()['num']
        nav.find('hr').each(function(){
            $(this).hide()
        })
        $(this).find('hr').show()
    })

}
