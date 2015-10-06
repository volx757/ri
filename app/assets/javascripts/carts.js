$(document).ready(function () {

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

})

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
