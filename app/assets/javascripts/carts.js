
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
