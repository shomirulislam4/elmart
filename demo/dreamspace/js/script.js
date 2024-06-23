(function ($) {
    'use strict';

    //Quantity Widget
    $(function(){
        $('.quantity__controls').each(function() {
        var quantityDisplay = $(this).find('.quantity__display');
    
        $(this).find('.quantity__increase').on('click', function() {
            var currentQuantity = parseInt(quantityDisplay.text(), 10);
            quantityDisplay.text(currentQuantity + 1);
        });
    
        $(this).find('.quantity__decrease').on('click', function() {
            var currentQuantity = parseInt(quantityDisplay.text(), 10);
            if (currentQuantity > 1) {
            quantityDisplay.text(currentQuantity - 1);
            }
        });
        });
    });

    //Cart Menu
    $(function(){
        $('.dshs__cart__btn').on('click', function(){
            $('.ds__cart__slider').addClass('show')
        })
        $('.ds__cart__closebtn').on('click', function(){
            $('.ds__cart__slider').removeClass('show')
        })
    });
}) (jQuery);