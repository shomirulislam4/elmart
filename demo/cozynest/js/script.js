(function ($) {
    'use strict';

    //All Nice Select
    if ($('.cozynest').length) {
        $('#cnhstLanguage').niceSelect();
        $('#cnhstCountry').niceSelect();
    }

    //Custom Cursor
    /*$(function(){
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
    });*/

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

    //Hero Section Slider
    $(function(){
        var swiper = new Swiper(".cn__hero__slider", {
            loop: true,
            spaceBetween: 20,
            pagination: {
                el: ".cnhero__pagination",
                clickable: true,
            },
        });
    });

    //Brands Slider
    $(function(){
        var swiper = new Swiper('.cnbrands__slider', {
            loop: true,
            spaceBetween: 0,
          /*  autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },*/
            breakpoints: {
                1400: {
                    slidesPerView: 6,
                },
                1200: {
                    slidesPerView: 5,
                },
                992: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 3,
                },
                415: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                }
            }
        });
    });

    //Testimonials Slider
    $(function(){
        var swiper = new Swiper(".cntestimonials__slider", {
            loop: true,
            pagination: {
                el: ".cstestimonials__pagination",
                clickable: true,
            },
        });
    });

    //Newsletter Popup (Variant 3)
    $(function(){
        var currentIndex = 0;
        var scrollThreshold = 2400;
        var isScrollTriggered = false;
    
        function fesnwsltrPopupScroll() {
        if (!isScrollTriggered && $(window).scrollTop() > scrollThreshold) {
            isScrollTriggered = true;
            $('.cn__newsletter__popup').addClass('show');
        }
        }
    
        fesnwsltrPopupScroll();
        $(window).scroll(function() {
        fesnwsltrPopupScroll();
        });
    
        $('.cn__newsltrpop__close').on('click', function() {
        $('.cn__newsletter__popup').removeClass('show');
        });
    });

/*============================ Shop Page ============================*/
    //Shop Nice Select
    if ($('.cn__shoppage').length) {
        $('#cnShopSorting').niceSelect();
    }

    //Grid View Button
    $(function() {
        var productStyleDiv = $('.cnshop__wrapper');

        $('.cnshop__grid__2').on('click', function() {
            productStyleDiv.removeClass('grid3__item grid4__item');
            setActiveButton($(this));
        });

        $('.cnshop__grid__3').on('click', function() {
            if ($(window).width() >= 992) {
                productStyleDiv.addClass('grid3__item').removeClass('grid4__item');
                setActiveButton($(this));
            }
        });

        $('.cnshop__grid__4').on('click', function() {
            if ($(window).width() >= 1200) {
                productStyleDiv.addClass('grid4__item').removeClass('grid3__item');
                setActiveButton($(this));
            }
        });

        $(window).on('resize', function() {
            if ($(window).width() < 1200) {
                productStyleDiv.removeClass('grid3__item');
                setActiveButton($('.cnshop__grid__2'));
            }
            if ($(window).width() < 1200) {
                productStyleDiv.removeClass('grid4__item');
                setActiveButton($('.cnshop__grid__2'));
            }
        });

        function setActiveButton(activeButton) {
            $('.grid__btns').removeClass('active');
            activeButton.addClass('active');
        }
    });

    //Sideabr Filter
    $(function(){
        //Mobile Menu Main Show/Hide
        $('.sidebar__toggle').on('click', function(){
            $('.cnshop__sidebar').addClass('show')
        })
        $('.cnshop__sidebar__closebtn').on('click', function(){
            $('.cnshop__sidebar').removeClass('show')
        })
    });

/*============================ Single product Page ============================*/
    //Product Image Slider
    $(function(){
        var cnSnglProdSwiper = new Swiper(".cnsnglprod__image__thumb", {
            direction: 'vertical',
            loop: true,
            slidesPerView: 4,
            breakpoints: {
                1200: {
                    spaceBetween: 20,
                },
                992: {
                    spaceBetween: 10,
                },
                768: {
                    spaceBetween: 10,
                },
                576: {
                    spaceBetween: 15,
                },
                200: {
                    spaceBetween: 6,
                },
            }
        });

        var cnSnglProdSwiper2 = new Swiper(".cnsnglprod__image", {
            loop: true,
            spaceBetween: 0,
            thumbs: {
                swiper: cnSnglProdSwiper,
            },
        });

        // Zoom functionality
        $('.cnsnglprod__magnifying__btn').on('click', function () {
            $('.swiper-slide-active .zoom__overlay').toggleClass('active');
        });

        $(document).on('mousemove', '.zoom__overlay.active', function (e) {
            var $zoomable = $(this).siblings('img.zoomable');
            var zoomerOffset = $(this).offset();
            var zoomerWidth = $(this).width();
            var zoomerHeight = $(this).height();

            var x = e.pageX - zoomerOffset.left;
            var y = e.pageY - zoomerOffset.top;

            var xPercent = x / zoomerWidth * 100;
            var yPercent = y / zoomerHeight * 100;

            $zoomable.css('transform-origin', `${xPercent}% ${yPercent}%`);
            $zoomable.css('transform', 'scale(2)');
        });

        $(document).on('mouseleave', '.zoom__overlay.active', function () {
            $(this).siblings('img.zoomable').css('transform', 'scale(1)');
        });
    });

    //Review Read More Function
    $(function() {
        $('.dssp__user__review__text').each(function() {
            var $textContainer = $(this);
            var fullText = $textContainer.text().trim();
            var words = fullText.split(/\s+/);
            var shortText = words.slice(0, 20).join(' ') + '...';

            if (words.length > 20) {
                $textContainer.html(shortText + ' <span class="dssp__urt__toggle">read more</span>');
            }

            $textContainer.on('click', '.dssp__urt__toggle', function() {
                if ($(this).text() === "read more") {
                    $textContainer.html(fullText + ' <span class="dssp__urt__toggle">show less</span>');
                } else {
                    $textContainer.html(shortText + ' <span class="dssp__urt__toggle">read more</span>');
                }
            });
        });
    });

    //Colors Select Active Class
    $(function(){
        $('.cnsnglprod__color__lists').on('click','span',function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

/*============================ Blog ============================*/
    //Column Reverse on Screen Size
    $(function() {
        function adjustClass() {
        var screenWidth = $(window).width();
        var $myDiv = $('.cn__column__reverse__trigger');
        if (screenWidth < 992) {
            $myDiv.addClass('flex-column-reverse');
            } else {
                $myDiv.removeClass('flex-column-reverse');
            }
        }
        adjustClass();
        $(window).resize(adjustClass);
    });

    //Product Quick View Popup
    $(function(){
        //Mobile Menu Main Show/Hide
        $('.dsps__ctabtns__quickview').on('click', function(){
            $('.cn__product__quickview__popup').addClass('show')
        })
        $('.cn__prod__quickview__btn').on('click', function(){
            $('.cn__product__quickview__popup').removeClass('show')
        })
    });

}) (jQuery);