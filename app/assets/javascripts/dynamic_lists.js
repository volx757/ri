var faqHeaders = ["Juices", "Cleanses", "Ordering & Delivery", "Other"]

var faqQuestions_juice = [ "What kind of juicer do you use?", "What makes your juice different?", "What is the shelf life of your juice?",
        "Where should I store my juice?", "How many calories are in your juices and juice cleanses?", "What if I am pregnant or breastfeeding?",
        "What if I have a medical condition or take prescription medication?", "What if I have a gluten allergy?", "Is the juice vegan and/or Kosher?",
        "Can I give the juice to my child?", "How much juice should I drink?"],
    faqQuestions_cleanse = ["Where do I get my protein while cleansing?", "How many juices come in each cleanse?",
        "I signed up for a 3-day cleanse. Do you deliver the cleanse each morning or all at once?", "I have never cleansed before. How do I know if I can handle a cleanse?",
        "How many days should I cleanse?", "Can I have any other beverages besides the juice while cleansing?", "What are detox symptoms? Does everyone get them?",
        "Can I do a cleanse even though I have a busy schedule?", "Can I exercise while cleansing?", "How much weight am I going to lose?",
        "I haven’t gone to the bathroom at all. Is that normal?", "Can I do a cleanse and eat food too?", "How often should I do a cleanse?"],
    faqQuestions_logistics = ["How do I order my juice?", "When is the cutoff time to place an order for delivery or pickup?",
        "What juices should I order? What do you recommend?", "Is there a minimum I have to order to be eligible for delivery or pick-up?",
        "Can I pre-order juices for pickup?", "Can I order my juice to a different address than my house?",
        "What if I am not there when my juice is delivered?", "Why use glass bottles instead of plastic?"]

var faqAnswers_juice = ["Our juice is extracted using a hydraulic cold-press machine.  This form of extraction is the optimal method of juicing.  With our hydraulic press we are able to exert thousands of pounds of pressure on produce very slowly and without generating any heat. This is ideal in that it helps to maintain the cellular structure of the plants and fruits being juiced.  The result is raw living juice in its purest form - all the enzymes and nutrients still intact - providing the highest density of nutrition to any consumer.",
        "Most juice in grocery stores are pasteurized to reduce pathogens, either through flash-pasteurization, a process that heats the juice to extremely high temperatures, or a more recently introduced method called high-pressure processing (HPP), which uses high pressure to achieve the same end.  Many of the big corporate companies use these methods as they allow for a longer shelf-life, which makes them the most cost efficient and creates larger profits.  Our juices are not pasteurized in any way.  We believe raw juice is supposed to be a local movement.  Farm to bottle as quickly as possible.  We can do that here in Lancaster, Pennsylvania.",
        "The shelf life of our juice is 72-96 hours from the day you receive your delivery or in store pickup.  Juices located within our retail refrigerator are good up until the expiration date located on our bottle.  We recommend that you consume your juice as soon as you possibly can as the juice is alive and the sooner you drink the more raw enzymes and nutrients you will get into your body.",
        "Always store your juice in the refrigerator and do so as immediately as you can.  Juice is precious matter full of life.  If you receive a delivery or pick-up take your juices directly to a refrigerator.",
        "Our juices and cleanses consist of raw, enzyme-rich, easily assimilated nutrients designed to maintain the highest degree of health. Our aim is to help people become more aware of their day-to-day food choices and become less concerned with counting calories.  Why stress yourself out?  Just eat well.   With that said we do understand that some customers are concerned about caloric intake and most of our juices range from 80 to 175 calories (per 16 oz) and cleanses can range from 1000 to 1200 calories per day (6 juices total).",
        "Juices are a great way of complimenting your current diet with a variety of healthy nutrients - so definitely a good thing to incorporate during that time. However, your body needs more calories when pregnant or breastfeeding to help your child grow and develop and during all out cleansing, your body releases toxins that should not be absorbed by your baby. Because of this, it is definitely recommended that you consult with your healthcare professional about incorporating our juices into your diet while pregnant or breastfeeding.",
        "Please consult your healthcare professional if you have a medical condition or take prescription medicine before drinking our products. Our juices nourish your body and enhance your overall health and well-being by fighting disease.  Raw juicing is 100% an excellent addition to alternative and homeopathic forms of healing.  However, by no means are our products to be used to treat, prevent diagnose, or cure ailments exclusively.",
        "All of our juices are 100% gluten-free.",
        "Our products are 100% vegan. No animal products are used in any of our products. However, our juices are not certified Kosher.",
        "All of our green juices and shakes contain absorbable proteins [our Carrot.Kale juice has roughly 16 grams of protein]. The food that captures the most sunlight contains the highest levels of readily available protein - therefore dark leafy greens are best. Amino acids are the building blocks of protein and dark leafy green vegetables [full of chlorophyll] are the most natural source of these muscle-building compounds.",
        "Yes! Our juice is definitely healthy to add to children's diets. However, it is warned that children under the age of 2 should not be given juice due to potentially harmful bacteria in unpasteurized juice.  Also, children should not participate in juice cleanses or fasts.",
        "This always depends on your personal preference and health goals. In order to experience the full benefits of our products, we recommend incorporating juice into your daily diet and doing a juice cleanse at least twice a year."],
    faqAnswers_cleanse = ["Our standard 1-day juice cleanse includes 6 (16 oz) juices [2-day cleanse: 12 juices; 3-day cleanse: 18 juices]. See each cleanse’s individual product page to find out which juices are included.",
        "Our juices have a shelf-life of 72-96 hours  so a 3 day juice cleanse will be delivered all at once.  Just be sure to refrigerate everything immediately.",
        "We think you will be pleasantly surprised by how much the juice fills you up and provides you with real energy.  The juices provide your body with ample supply of nutrients to get you through your day. We would recommend that you definitely take things a little slower than usual and listen to your body.  It also helps the juicing process if you cut alcohol and nicotine prior-to and during the cleanse to maximize the health benefits you are seeking.  Just start with a 1-day cleanse and see how it goes.  Many people have set out just intending to just try a 1-day cleanse only to find themselves venturing out on a 10-day journey, if not longer.  Everyone is different.",
        "This is a very subjective question.  As mentioned above we recommend you just test the waters out with a 1-Day cleanse.  Our cleanse packages stop at the 3-day package and if you would like to continue you'll have to place a new order.",
        "Be selective.  Water is always best and is the original cleanse.  We recommend having at least eight glasses of still filtered water a day in addition to your juices. [We love tea too].",
        "The release of built-up toxins occurs on a cellular level when one does a juice fast. But how one experiences detoxing, again, is something that is very subjective.  Some people may not  experience any detox symptoms while others may experience symptoms that may include headaches, nausea, dizziness, fatigue, constipation, and/or skin eruptions.  To help keep detox symptoms to a minimum, again, we recommend just our 1-day cleanse so you can test the waters.",
        "Yes.  No one can tell you what to do, but as we mentioned above, it is definitely important that you find time to let your body rest.  Subscribe to the slower rhythms.",
        "You can do as you like, but energy levels could be low during a cleanse so we recommend taking it easy so you don't burn yourself out. However, some people are pleasantly surprised by an increase in energy and if this is the case, feel free to exercise.  Challenge yourself.  The energy you usually use to digest your food is now available to be used for other things, like working out. Always stay hydrated with as much water as you can and be sure to breath some fresh air throughout the day.  If you feel amazing - excellent - but don't go overboard with the level of activity.",
        "Our cleanses are not designed to be used as a weight-loss program however it is common that people on a juice cleanse will attain some weight-loss.  Giving your body raw nutrients, removing toxins, and giving your digestive system a break are the major functions of our juice cleanses.  They are also designed to catalyze a more conscious lifestyle when it comes to food - developing better eating habits.",
        "Yes. The opposite could happen as well. These are normal side effects of a cleanse and are also subjective.",
        "You can do whatever you like and we often feel it is better to test the waters by keeping fiber from whole food still in the diet if you are just testing the waters. The benefits of a cleanse will be greatly diminished if mixed with solid food. However, we 100% advocate adding juices to your daily lifestyle as they will without question offer great positive value to your daily eating habits or lifestyle.",
        "This is a personal decision that only you can make. Many people will do a cleanse when they experience detox symptoms like fatigue, lack of energy, digestive problems, sleep problems, weak immune system, anxiety, or depression. Often these symptoms are associated with holidays or changes in season. Others will commit to one cleanse per month, or one every three to six months, while others do a ritual 1-day cleanse once a week. Cleansing and fasting has been around since ancient times and has always been considered a healthy and uplifting practice by humans. In addition to cleansing, we also recommend incorporating our juices into your daily routine, as this will benefit your health and heighten your well-being throughout the year by strengthening your body and immune system - ensuring that you are getting the nutrients you need."],
    faqAnswers_logistics = ["You can order online at rijuice.com, call us at 717.305.0742",
        "Your order must be received before 11am 48 hours in advance of pick-up date i.e. an order to be picked up on Wednesday would need to be placed the Monday before and at latest 11 am.  Deliveries are made between 3pm-6-pm the evening before your order date (i.e. if you ordered on Saturday your order date would be for Monday.  Your juices would be delivered between 3pm-6-pm on Sunday). Limited space is available as these orders are reserved and our met at a first come-first serve basis.  If your order is placed after all reservations have been filled we will contact you immediately and push your order to the next pick-up date.",
        "Our website includes each juice and its ingredients as well as many of the health benefits associated with particular juices.  Feel free to e-mail us at info@rijuice.com or call 717.305.0742 to get further information or recommendations.",
        "Yes. Our minimum order for delivery is 6 juices (or shakes or combination) in addition to the delivery charge.  We also require that a reservation for pick-up have a minimum of 3 juices (or shakes or combination).",
        "Yes. You can pre-order online or in the store.  Orders are to be placed 48 hours in advance of pick-up date.",
        "Yes. We gladly deliver to your home, work, friend's home or gym. Just be sure to give us the correct delivery address.",
        "We ask/require that someone be present to receive deliveries always unless otherwise instructed - in which case we hold no responsibility for purchase/quality after completed drop-off.",
        "Our glass bottles are just another way of ensuring the quality of our products as well as advocating a more conscious business practice.  So many juice companies still use plastic for the sake of cost. We are selling juices and cleanses - raw living food - that nourish and detoxify your body. Plastic bottles are notorious for leaching chemicals into beverages and on the planet plastic is a leading cause of pollution. We advocate more conscious styles of living and we never jeopardize quality or the planet for profit.  In order to minimize the pollution of our environment, we try to produce as little waste as possible so please feel free to return our glass bottles or keep them to be repurposed or reused for whatever you like.  Take a picture of how you repurpose them and post to our instagram or Facebook.  We'd love to see what you come up with."]

var faqIsExpanded = false

function bindFaqCategories() {

    $('#faq-categories li').on('click', function () {

        var category = $(this).data('category')
        var categoryNum;

        switch (category) {
            case 'juices' :
                categoryNum = 0
                break;
            case 'cleanses' :
                categoryNum = 1
                break;
            case 'orders' :
                categoryNum = 2
                break;
            case 'other' :
                categoryNum = 3
                break;
        }

        $('.index-faq .category').html(faqHeaders[categoryNum])

        writeFaqQuestions(categoryNum)
        bindFaqCategories();
        initializeFaq();
        bindFaqToggles()
    })

}

function writeFaqQuestions(categoryNum) {

    var questions,
        answers

    switch (categoryNum) {
        case 0 :
            questions = faqQuestions_juice
            answers = faqAnswers_juice
            break;
        case 1 :
            questions = faqQuestions_cleanse
            answers = faqAnswers_cleanse
            break;
        case 2 :
            questions = faqQuestions_logistics
            answers = faqAnswers_logistics
            break;
        case 3 :
            questions = faqQuestions_logistics
            answers = faqAnswers_logistics
            break;
    }

    var qaList = $("#faq-right").find("ul")
    qaList.empty()
    var num = 1;

    for (var i in questions) {

        var li = "<li class='question' data-num=" + num + ">",
            li2 = "<li class='answer' data-num=" + num + ">",
            ex_or_col = "<span class='ex_or_col'>+</span>"

        qaList.append(li.concat(num + ". " + questions[i] + ex_or_col), li2.concat(answers[i]))
        num++
    }

}

function initializeFaq() {

    var currentCategory = $('#faq-right').find('h2').html(),
        numListItems

    switch (currentCategory) {
        case 'Juices' :
            numListItems = faqQuestions_juice.length
            break;
        case 'Ordering & Delivery' :
            numListItems = faqQuestions_logistics.length
            break;
        case "Ordering &amp; Delivery" :
            numListItems = faqQuestions_logistics.length
            break;
        case 'Cleanses' :
            numListItems = faqQuestions_cleanse.length
            break;
        case 'Other' :
            numListItems = faqQuestions_logistics.length
            break;
    }

    for (var i = 1; i < numListItems + 1; i++) {
        var currentQuestion = $('#faq-right *[data-num=' + i + '].question '),
            currentIcon = $('#faq-right *[data-num=' + i + '] span '),
            currentAnswer = $('#faq-right *[data-num=' + i + '].answer ')

        if (i == 1)
            openListItem(currentQuestion, currentIcon, currentAnswer)
        if (i > 4) {
            hideListItem(currentQuestion, currentIcon, currentAnswer)
        }

        //TODO:fix this shit
        for (var j = 2; j <= i; j++) {
            closeListItem(currentQuestion, currentIcon, currentAnswer)
        }
    }

    faqIsExpanded = false
    $('#faq-right .show-more').empty().append("+ Show More")

}

function initializeIngredients() {


    var numListItems = $('#ingredients-right').find('ul').children().length

    for (var i = 1; i < numListItems + 1; i++) {
        var currentIcon = $('#ingredients-right *[data-num=' + i + '] span '),
            currentDesc = $('#ingredients-right *[data-num=' + i + '].description ')

        if (i == 1)
            openListItem(null, currentIcon, currentDesc)

        //TODO:fix this shit
        for (var j = 2; j <= i; j++) {
            closeListItem(null, currentIcon, currentDesc)
        }
    }

    bindIngredientsToggles()
}

function openListItem(question, icon, answer) {
    answer.show()
    icon.empty().append('-')
}

function closeOtherListItemsFaq(question, icon, answer) {

    var keepOpen = answer.data('num'),
        length = $('#faq-right li').length / 2

    for (var i = 0; i < length; i++) {
        var currentAnswer = $('#faq-right *[data-num=' + i + '].answer ')

        if (i != keepOpen)
            closeListItem(null, icon, currentAnswer)
    }
}

function closeOtherListItemsIngredients(question, icon, answer) {

    var keepOpen = answer.data('num'),
        length = $('#ingredients-right li').length / 2

    for (var i = 0; i < length; i++) {
        var currentAnswer = $('#ingredients-right *[data-num=' + i + '].description ')

        if (i != keepOpen)
            closeListItem(null, icon, currentAnswer)
    }
}

function closeListItem(question, icon, answer) {
    answer.hide()
    icon.empty().append('+')
}

function showListItem(question, icon, answer) {
    question.show()
    answer.show()
}

function hideListItem(question, icon, answer) {
    question.hide()
    answer.hide()
}

function bindFaqToggles() {
    $('#faq-right').find('li span').on('click', function () {

        var num = $(this).parent().data('num') - 1,
            answer = $('#faq-right').find('.answer:eq( ' + num + ')')

        if (answer.css('display') == 'none') {
            openListItem(null, $(this), answer)
            closeOtherListItemsFaq(null, $(this), answer)
        }
        else
            closeListItem(null, $(this), answer)
    })
}

function bindIngredientsToggles() {
    $('#ingredients-right').find('li span').on('click', function () {

        var num = $(this).parent().data('num') - 1,
            desc = $('#ingredients-right').find('.description:eq( ' + num + ')')

        if (desc.css('display') == 'none') {
            openListItem(null, $(this), desc)
            closeOtherListItemsIngredients(null, $(this), desc)
        }
        else
            closeListItem(null, $(this), desc)
    })
}


function bindShowAllQuestions() {
    $('#faq-right .show-more').on('click', function () {
        if (faqIsExpanded) {
            $('#faq-right li').each(function () {
                if ($(this).data('num') > 4)
                    hideListItem($(this), null, $(this))
            })

            faqIsExpanded = false
            $(this).empty().append("+ Show More")
        } else {
            $('#faq-right li').each(function () {
                showListItem($(this), null, $(this))
            })

            faqIsExpanded = true
            $(this).empty().append("- Show Less")
        }

    })
}
