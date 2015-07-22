var notificationSelfDestruct

function notification(event) {

    var self = $('#notification-box')

    if (event == 'notify') {
        init()
    } else if (event == 'clear'){
        clear()
    }

    function init(){
        setSelfDestruct()
        self.fadeIn(200)
        bindClick()
    }

    function clear() {
        self.fadeOut(200)
        self.html('')
    }

    function bindClick() {
        self.on('click', function () {
            clear(self)
            clearTimeout(notificationSelfDestruct)
        })
    }

    function setSelfDestruct() {
        notificationSelfDestruct = setTimeout(function () {
            clear()
        }, 2200)
    }

}
