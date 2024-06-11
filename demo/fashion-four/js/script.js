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
    $('.fsnf__mblmenu__btn').on('click', function(){
        $('.fsnf__mobile__menu').addClass('show')
    })
    $('.fsnf__mblmenu__closebtn').on('click', function(){
        $('.fsnf__mobile__menu').removeClass('show')
    })

    //Mobile Menu Submenu Show/hide
    $('.mobile__submenu').on('click', function() {
        var fessubmenu = $(this).find('.l2__submenu');
        fessubmenu.toggleClass('show');
      });
});
