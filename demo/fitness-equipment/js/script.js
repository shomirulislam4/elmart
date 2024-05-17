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

//Cart Slider
$(function(){
    $('.fes__header__cart').on('click', function(){
        $('.fes__cart__slider').addClass('show')
    })
    $('.fes__cart__closebtn').on('click', function(){
        $('.fes__cart__slider').removeClass('show')
    })
})

//Right Side Slider Menu
$(function(){
    $('.fes__rsm__btn').on('click', function(){
        $('.fes__right__slider__menu').addClass('show')
    })
    $('.fes__rsm__closebtn').on('click', function(){
        $('.fes__right__slider__menu').removeClass('show')
    })
})