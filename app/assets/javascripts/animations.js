const HEADER_POSITION_TRIGGER = 30;

var headerFloating = false;



$(document).ready(function () {

    var floatHeader = $('#header-float')

    $(document).scroll(function () {
        fixHeaderPosition(floatHeader);
    })

});

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
