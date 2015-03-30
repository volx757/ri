
$(document).ready(function () {

    Stripe.setPublishableKey('pk_test_BcvYOHT22B1zZQfF1VONpaHE');


    $("#card-details").submit(function (event) {
        $('.submit').attr("disabled", "disabled");

        Stripe.createToken({
            number: $('#card-number').val(),
            cvc: $('#card-cvc').val(),
            exp_month: $('#card-exp-month').val(),
            exp_year: $('#card-exp-year').val()
        }, stripeResponseHandler);


        function getURLParameter(name) {
            return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
        }
        myvar = getURLParameter('myvar');
        alert(myvar)
        // prevent the form from submitting with the default action
        //return false;
    });


});

function stripeResponseHandler(status, response) {

    if (response.error) {
        $(".payment-errors").text(response.error.message);
        alert(response.error.message)
    }
    else {
        var form$ = $("#card-details");
        var token = response['id'];
        form$.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");
        $('.submit').attr("enabled", false);
        form$.get(0).submit();
    }


}