var indexProduct = [
    {'title': 'Custom Pack', 'price': '$36', 'desc1': '6-pack or 12-pack', 'desc2': '10oz/16oz', 'desc3': 'mix & match flavors'},
    {'title': 'Cleanses', 'price': '$24', 'desc1': '3-30 juices', 'desc2': '16oz', 'desc3': '1/2 day to 5 day cleanse'},
    {'title': 'Low-Glycemic Cleanses', 'price': '$54', 'desc1': '3-30 juices', 'desc2': '16oz', 'desc3': '1/2 day to 5 day cleanse'}
];

$(document).ready(function () {

    var floatHeader = $('#header-float')
    $(document).scroll(function () {
       // fixHeaderPosition(floatHeader);
    });

    $('.nav-item').localScroll({duration: 300});

    bindFaqCategories();
    writeFaqQuestions(0);
    initializeFaq();
    initializeIngredients()
    setupContactNavUnderline()
    bindShowAllQuestions()

    writeIndexProducts()
    activateNightPage();

    inquiryForm();
    contactForm();

    handleMobileNav();


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

function handleMobileNav(){
    if (isMobile()){
        $('.nav-item.home .nav-category').removeAttr('href')

        $('.nav-item.home .nav-category').click(function(e) {
            $(".nav-item.home ul").toggle()
        });

        $(".nav-item.home li").click(function(e) {
            $(".nav-item.home ul").hide()
        });
    }
}

function isMobile(){
    return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function inquiryForm(){
    $('#inquiry_form').on('submit', function (){

        var email = $('#email'),
            content = $('#content')

        if (email.val().length < 1) {
            email.attr('placeholder', 'ENTER YOUR EMAIL ADDRESS')
            email.css('color','green')
            return false;
        }
        if (content.val().length < 1) {
            content.attr('placeholder', 'DO YOU HAVE A QUESTION?')
            content.css('color','green')
            return false;
        }

        $(this).fadeOut(500, function(){
            $('.inquiry-successful').fadeIn();
        });

    })
}

function contactForm(){
    $('#contact-form').on('submit', function (){

        var email = $('#email'),
            content = $('#content')

        if (email.val().length < 1) {
            email.attr('placeholder', 'ENTER YOUR EMAIL ADDRESS')
            email.css('color','green')
            return false;
        }
        if (content.val().length < 1) {
            content.attr('placeholder', 'GO AHEAD AND WRITE US A MESSAGE..')
            content.css('color','green')
            return false;
        }

        $(this).fadeOut(500, function(){
            $('.inquiry-successful').fadeIn();
        });

    })
}

function writeIndexProducts() {

    var crawler = $('.index-product')

    crawler.eq(0).addClass('0')
    crawler.eq(1).addClass('1')
    crawler.eq(2).addClass('2')


    for (var i = 0; i < 3; i++) {
        crawler = $('.index-product.' + i)

        var title = crawler.find('h4'),
            price = crawler.find('.price'),
            desc1 = crawler.find('.desc1'),
            desc2 = crawler.find('.desc2'),
            desc3 = crawler.find('.desc3');

        title.append(indexProduct[i]['title'])
        price.append(indexProduct[i]['price'])
        desc1.append(indexProduct[i]['desc1'])
        desc2.append(indexProduct[i]['desc2'])
        desc3.append(indexProduct[i]['desc3'])
    }

}

function activateNightPage() {

    $('#night').on('click',function(){
        return false;

        $('#night-overlay').animate({
            opacity: 1,
            height: "100%"
        }, 5000)
    })

}
