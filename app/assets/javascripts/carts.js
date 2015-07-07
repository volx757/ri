$(document).ready(function () {

    Stripe.setPublishableKey('pk_test_BcvYOHT22B1zZQfF1VONpaHE');

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


    $('form.edit_guest').submit(function() {
        if (!validateFormOne())
            return false
        var valuesToSubmit = $(this).serialize();

        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: valuesToSubmit,
            dataType: "JSON"
        }).success(function(json){

            alert(json)
        }).error(function(){

            alert('s')


        })
        advanceToFormTwo()
        return false;
    });



})

function advanceToFormTwo(){
    $('#form-step-1').fadeOut(200)
    $('#form-step-2').fadeIn(200)
}

function validateFormOne(){

    //if invalid return false

    return true
}

function validateFormTwo(){
    //if invalid return false

    return true
}

function validateFormThree(){
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
        error: function() {
            alert('errsdsor')
        },
        success: function(data) {
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
