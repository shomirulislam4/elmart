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

//Quantity Widget
$(function() {
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

//Testimonials
$(function() {
    var swiper = new Swiper('.fsnfts__slider', {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,
        autoplay: {
            delay: 2500,
        },
        breakpoints: {
            1200: {
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 2,
            },
            200: {
                slidesPerView: 1,
            }
        }
    });
});

//Nice Select
if ($('.fashion__four').length) {
    $('#fsnfssProductSorting').niceSelect();
}

/*============================ Shop page ============================*/
//Shop Page Filter Sidebar
$(function(){
    $('.fsnfss__filter__button').on('click', function(){
      $('.fsnfshop__filter__sidebar').addClass('show')
    });
    $('.fsnfshop__sidebar__closebtn').on('click', function(){
      $('.fsnfshop__filter__sidebar').removeClass('show')
    })
});

/*============================ Single Product page ============================*/
//Single Product Image Slider
$(function(){
    var fsnfsliderthumb = new Swiper(".fsnfsp__product__image__slider1", {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var fsnfslidermain = new Swiper(".fsnfsp__product__image__slider2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".fsnfsp__imgsldr__btn__next",
        prevEl: ".fsnfsp__imgsldr__btn__prev",
      },
      thumbs: {
        swiper: fsnfsliderthumb,
      },
    });
});

//Item Active Class
$(function() {
    //Size Select
    $('.size__select').on('click','.size__item',function(){
      $(this).addClass('active').siblings().removeClass('active');
    });

    //Color Select
    $('.color__wrap').on('click', '.color__item', function() {
      $(this).addClass('active').siblings().removeClass('active');
    });
});