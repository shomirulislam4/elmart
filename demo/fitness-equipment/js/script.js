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

//Right Menu Currency & Language Changer
$(function(){
    //Language
    $('.feslc__language p').on('click', function(){
        $('.fes__language').addClass('show');
        $('.feslc__language p').addClass('hide');
        $('.feslc__language__clsbtn').removeClass('hide');
    })
    $('.feslc__language__clsbtn').on('click', function(){
        $('.fes__language').removeClass('show');
        $('.feslc__language p').removeClass('hide');
        $('.feslc__language__clsbtn').addClass('hide');
    })

    //Currency
    $('.feslc__currency p').on('click', function(){
        $('.fes__currency').addClass('show');
        $('.feslc__currency p').addClass('hide');
        $('.feslc__currency__clsbtn').removeClass('hide');
    })
    $('.feslc__currency__clsbtn').on('click', function(){
        $('.fes__currency').removeClass('show');
        $('.feslc__currency p').removeClass('hide');
        $('.feslc__currency__clsbtn').addClass('hide');
    })
})