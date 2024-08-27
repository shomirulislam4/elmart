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
        $('.elbp__cart__button').on('click', function(){
            $('.elbp__cart__slider').addClass('show')
        })
        $('.elbp__cart__closebtn').on('click', function(){
            $('.elbp__cart__slider').removeClass('show')
        })
    });

    //Search Popup
    $(function() {
        $('.elbp__search__button').on('click',function() {
            $('.elbp__search__popup').addClass('show');
        })
        $('.elbpsearch__close__btn').on('click',function() {
            $('.elbp__search__popup').removeClass('show');
        })
    });

    //Mobile Menu
    $(function(){
        //Mobile Menu Main Show/Hide
        $('.elbp__mmenu__btn').on('click', function(){
            $('.elbp__mobile__menu').addClass('show')
        })
        $('.elbp__mblmenu__closebtn').on('click', function(){
            $('.elbp__mobile__menu').removeClass('show')
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



}) (jQuery);