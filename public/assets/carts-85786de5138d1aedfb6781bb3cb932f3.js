var items;

var totalJuices = 12,
    currentJuices = 0,
    currentId = 0;

var _cart = (function () {

    var execute = {
        init: function () {
            items = []

            $('#add-to-cart').on('click', function () {
                if (currentJuices == totalJuices) {
                    gatherItems()
                    currentJuices = 0
                    $('.juice-detail .value').each(function () {
                        $(this).html(0)
                    })
                }
                else
                    alert('you must fill your pack')
            })
            $('#12pack').on('click', function () {
                totalJuices = 12
                clearSelection()
            })
            $('#24pack').on('click', function () {
                totalJuices = 24
                clearSelection()
            })
            $('.fa.minus').on('click', function () {
                if (currentJuices > 0) {
                    removeJuice($(this).parent().find('.value'))
                    currentJuices--
                }

            })
            $('.fa.plus').on('click', function () {
                if (currentJuices < totalJuices) {
                    addJuice($(this).parent().find('.value'))
                    currentJuices++
                }

            })


        },
        addItem: function (name, value, quantity) {
            var id = currentId

            console.log(id, name, value, quantity)
            items.push({
                'id': id,
                'name': name,
                'value': value,
                'quantity': quantity
            })

        },
        writeItemToCart: function () {

            var string = ''

            string += ('<div class="pack-box"><hr><div class="pack-size">' + totalJuices + ' PACK</div><div class="remove-item" data-val="' + currentId + '"><i class="fa fa-times"></i></div>')

            for (var i = 0; i < items.length; i++) {
                string += ('<div class="quantity">--' + items[i]['name'] + '</div><div class="name">----' + items[i]['value'] + '</div>')
            }

            string += ('</div>')

            $('#items').append(string)



            $('.remove-item').off('click').on('click', function () {
                var id = $(this).data('val')
                console.log(id)
                $(this).parent().remove()
                items.splice(id, 1)
            })
        }
    };

    function gatherItems() {
        $('.juice-detail').each(function () {
            if ($(this).find('.quantity .value').html() != '0') {
                console.log(($(this).find('.quantity .value').html()));
                _cart.addItem($(this).data('name'), $(this).find('.quantity .value').html(), $(this).data('id'));
            }
        })

        _cart.writeItemToCart()

        currentId++
    }

    return execute;

})();


$(document).ready(function () {

    _cart.init()

    //Stripe.setPublishableKey('pk_test_BcvYOHT22B1zZQfF1VONpaHE');

    $("#card-details").submit(function (e) {
        e.preventDefault()
        $('.submit').attr("disabled", true);

        Stripe.createToken({
            number: $('#card_number').val(),
            cvc: $('#card_cvc').val(),
            exp_month: $('#card_exp_month').val(),
            exp_year: $('#card_exp_year').val()
        }, stripeResponseHandler);

    });

    $('form.edit_guest').submit(function () {
        if (!validateFormOne())
            return false
        var valuesToSubmit = $(this).serialize();

        $.ajax({
            type: "PATCH",
            url: $(this).attr('action'),
            data: valuesToSubmit,
            dataType: "text"
        }).success(function (json) {

            // alert(json)
        }).error(function (error, string) {

            alert(string)


        })
        advanceToFormTwo()
        return false;
    });

    $('#guest-checkout').on('click', advanceToFormThree)

})

function clearSelection() {
    if (currentJuices > totalJuices) {
        currentJuices = 0
        $('.juice-detail .value').each(function () {
            $(this).html(0)
        })
    }
}

function addJuice(juicePos) {
    var val = parseInt(juicePos.html())
    val++
    juicePos.html(val)
}

function removeJuice(juicePos) {
    var val = parseInt(juicePos.html())
    val--
    juicePos.html(val)
}


function advanceToFormTwo() {
    $('#form-step-1').fadeOut(200)
    $('#form-step-2').fadeIn(200)
}

function advanceToFormThree() {
    $('#form-step-2').fadeOut(200)
    $('#form-step-3').fadeIn(200)
}

function validateFormOne() {

    //if invalid return false

    return true
}

function validateFormTwo() {
    //if invalid return false

    return true
}

function validateFormThree() {
    //if invalid return false

    return true
}


function processPackOrder() {

    var juice_ids = []

    $('select').each(function () {
        juice_ids.push($(this).find(":selected").data('id'))
    })
    console.log(juice_ids)

    $.ajax({
        type: "POST",
        url: '/products',
        data: 'p=' + juice_ids,
        error: function () {
            alert('errsdsor')
        },
        success: function (data) {
            alert(data);
        }
    });


}

function stripeResponseHandler(status, response) {

    if (response.error) {
        $(".payment-errors").text(response.error.message);
        alert(response.error.message)
    }
    else {
        var form = $("#card-details");
        var token = response['id'];
        form.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");
        $('.submit').attr("disabled", false);
        form.get(0).submit();
    }
}
;
