function limitTextInput() {
    var max = 800;
    $('#content').keypress(function (e) {
        if (e.which < 0x20)
            return;

        if ($(this).value.length === max) {
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

function lockScroll() {
    $('body').css('overflow', 'hidden')
}

function unlockScroll() {
    $('body').css('overflow', 'inherit')
}

function isMobile() {
    return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
