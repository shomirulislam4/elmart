(function ($) {
    'use strict';

    //Custom Cursor
    $(function(){
        $('body').prepend('<div class="cursor"></div>');
        $(document).mousemove(function(e) {
            $('.cursor').css({
                "left": e.pageX,
                "top": e.pageY - $(window).scrollTop()
            });
        });
        $('a, button, span, input[type=submit]').mouseenter(function(){
            var cursorStyle = $(this).css('cursor');
            if (cursorStyle === 'pointer') {
                $('.cursor').addClass('hover');
            }
        }).mouseleave(function(){
            $('.cursor').removeClass('hover');
        });
    });

    /*============================ Home Page ============================*/
    //All Nice Select
    if ($('.elbp__homepage').length) {
        $('#elbphtLanguage').niceSelect();
        $('#elbphtCurrency').niceSelect();
    }

    //Cart Slider
    $(function(){
        $('.cnhsb__cart__btn').on('click', function(){
            $('.cn__cart__slider').addClass('show')
        })
        $('.cn__cart__closebtn').on('click', function(){
            $('.cn__cart__slider').removeClass('show')
        })
    });

    //Mobile Menu
    $(function(){
        //Mobile Menu Main Show/Hide
        $('.cn__mobilemenu__btn').on('click', function(){
            $('.cn__mobile__menu').addClass('show')
        })
        $('.cn__mblmenu__closebtn').on('click', function(){
            $('.cn__mobile__menu').removeClass('show')
        })

        //Mobile Menu Submenu Show/hide
        $('.mobile__submenu').on('click', function() {
            var fessubmenu = $(this).find('.l2__submenu');
            fessubmenu.toggleClass('show');
        });
    });

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

    //Search Popup
    $(function() {
        $('.cnhsb__search__btn').on('click',function() {
            $('.cn__search__popup').addClass('show');
        })
        $('.cnsearch__close__btn').on('click',function() {
            $('.cn__search__popup').removeClass('show');
        })
    });


}) (jQuery);