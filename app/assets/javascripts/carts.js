$(document).ready(function () {
    $("#card-details").submit(function (event) {
        $('.submit').attr("disabled", "disabled");

        Stripe.createToken({
            number: $('.credit-number').val(),
            cvc: $('.credit-cvc').val(),
            exp_month: $('.card-exp-month').val(),
            exp_year: $('.card-exp-year').val()
        }, stripeResponseHandler);

        // prevent the form from submitting with the default action
        return false;
    });
});

function stripeResponseHandler(status, response) {

    if (response.error) {
        $(".payment-errors").text(response.error.message);
    }
    else {
        var form$ = $("#card-details");
        var token = response['id'];
        form$.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");
        form$.get(0).submit();
    }
}