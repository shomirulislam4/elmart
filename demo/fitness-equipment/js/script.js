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