var _animator = (function () {

    return {
        init: function () {
            _animator.productCart()
        },
        productCart: function () {
            $('#product-cart').css({
                'transform': 'translate(0,0)',
                'webkit-transform': 'translate(0,0)'
            })
        }
    };

})();
