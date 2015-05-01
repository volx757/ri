$(document).ready(function () {

    var floatHeader = $('#header-float')
    $(document).scroll(function () { fixHeaderPosition(floatHeader); });

    bindFaqCategories();
    writeFaqQuestions(0);
    initializeFaq();
    bindToggles()
    bindShowAllQuestions()



    /*
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
     */
});
