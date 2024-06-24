(function ($) {
    'use strict';

    //All Nice Select
    if ($('.dreamspace').length) {
        $('#dsSearchPopupCat').niceSelect();
    }

    //Custom Cursor
    $(function(){
        $("body").prepend('<div class="cursor"></div>');
        $(document).mousemove(function(e) {
            $('.cursor').css({
                "left": e.pageX,
                "top": e.pageY - $(window).scrollTop()
            });
        });
        $("a, button, div, span, input[type=submit]").mouseenter(function(){
            var cursorStyle = $(this).css('cursor');
            if (cursorStyle === 'pointer') {
                $('.cursor').addClass('hover');
            }
        }).mouseleave(function(){
            $('.cursor').removeClass('hover');
        });
    });

    //Mobile Menu
    $(function(){
        //Mobile Menu Main Show/Hide
        $('.ds__mobilemenu__btn').on('click', function(){
            $('.ds__mobile__menu').addClass('show')
        })
        $('.ds__mblmenu__closebtn').on('click', function(){
            $('.ds__mobile__menu').removeClass('show')
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

    //Cart Menu
    $(function(){
        $('.dshs__cart__btn').on('click', function(){
            $('.ds__cart__slider').addClass('show')
        })
        $('.ds__cart__closebtn').on('click', function(){
            $('.ds__cart__slider').removeClass('show')
        })
    });

    //Search Popup
    $(function(){
        //Mobile Menu Main Show/Hide
        $('.dshs__search__btn').on('click', function(){
            $('.ds__search__popup').addClass('show')
        })
        $('.ds__search__closebtn').on('click', function(){
            $('.ds__search__popup').removeClass('show')
        })
    });
}) (jQuery);