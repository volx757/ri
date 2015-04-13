const HEADER_POSITION_TRIGGER = 30

var headerFloating = false;



$(document).ready(function () {

    var fixedHeader = $('#header-fixed');
    var floatHeader = $('#header-float')

    $(document).scroll(function () {
        fixHeaderPosition(floatHeader,fixedHeader);
    })

});

function fixHeaderPosition(floatHeader, fixedHeader) {

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
