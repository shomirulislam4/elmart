(function ($) {
    'use strict';

    //All Nice Select
    if ($('.dreamspace').length) {
        $('#dsSearchPopupCat').niceSelect();
        $('#dsshopProductSort').niceSelect();
        $('#dsspReviewStarRating').niceSelect();
        $('#dsspsCCFMonth').niceSelect();
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

    //Quantity Widget 2
    $(function(){
        $('.quantity__controls2').each(function() {
        var quantityDisplay = $(this).find('.quantity__display2');
    
        $(this).find('.quantity__increase2').on('click', function() {
            var currentQuantity = parseInt(quantityDisplay.text(), 10);
            quantityDisplay.text(currentQuantity + 1);
        });
    
        $(this).find('.quantity__decrease2').on('click', function() {
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

    //Hero Popups
    $(function () {
        function createAndSetupPopper(button, popover) {
        var popperInstance = Popper.createPopper(button, popover, {
            placement: "auto",
        });
    
        button.addEventListener("mouseenter", function () {
            popover.style.display = "block";
            popperInstance.update();
        });
    
        button.addEventListener("mouseleave", function () {
            popover.style.display = "none";
        });
        }
    
        //Item 1
        var button1 = $(".dshero__info__dots.dot1")[0];
        var popover1 = $(".dshero__info__text.cont1")[0];
        createAndSetupPopper(button1, popover1);
    
        //Item 2
        var button2 = $(".dshero__info__dots.dot2")[0];
        var popover2 = $(".dshero__info__text.cont2")[0];
        createAndSetupPopper(button2, popover2);
    
        //Item 3
        var button3 = $(".dshero__info__dots.dot3")[0];
        var popover3 = $(".dshero__info__text.cont3")[0];
        createAndSetupPopper(button3, popover3);

        //Item 4
        var button4 = $(".dshero__ic__dottype")[0];
        var popover4 = $(".dshero__ic__text")[0];
        createAndSetupPopper(button4, popover4);
    });

    //Item Active Class
    $(function(){
        //hero product color active
        $('.dshero__color__choose').on('click','.dshero__coloritem',function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

    //Category Slider
    $(function(){
        var swiper = new Swiper('.dscs__wrapper__slider', {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 27,
            navigation: {
                nextEl: '.dscs__wsbtn__next',
                prevEl: '.dscs__wsbtn__prev',
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: true,
            },
            breakpoints: {
                1400: {
                    spaceBetween: 27,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                0: {
                    slidesPerView: 1,
                }
            }
        });
    });

    //New Arrivals Slider
    $(function(){
        var swiper = new Swiper('.dsnas__wrapper__slider', {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                nextEl: '.dsnas__sldrbtn__next',
                prevEl: '.dsnas__sldrbtn__prev',
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            },
            breakpoints: {
                1400: {
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                0: {
                    slidesPerView: 1,
                }
            }
        });
    });

    //On Sale Timer
    function makeTimer() {
        var endTime = new Date("30 March 2025 0:00:00 UTC+0");    
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);
    
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    
        function addLeadingZero(num) {
            return (num < 10 ? '0' : '') + num;
        }
    
        $(".ds__countdown__timer .days").html(addLeadingZero(days));
        $(".ds__countdown__timer .hours").html(addLeadingZero(hours));
        $(".ds__countdown__timer .minutes").html(addLeadingZero(minutes));
        $(".ds__countdown__timer .seconds").html(addLeadingZero(seconds));        
    }
    setInterval(function() { makeTimer(); }, 1000);

    //Testimonials Slider
    $(function(){
        var swiper = new Swiper(".ds__testimonials__slider", {
            loop: true,
            navigation: {
              nextEl: ".ds__testimonials__slider__next",
              prevEl: ".ds__testimonials__slider__prev",
            },
        });
    });

    //Galley Image Lightbox (Photoswipe)
    $(function() {
        var $pswp = $('.pswp')[0];
        var imageElements = $('.dsgallery__wrapper a');
        var items = [];

        imageElements.each(function() {
            var $link = $(this);
            var item = {
                src: $link.attr('href'),
                w: 0, // Width will be dynamically set
                h: 0, // Height will be dynamically set
                title: $link.find('img').attr('title')
            };
            items.push(item);
        });

        imageElements.click(function(event) {
            event.preventDefault();
            var index = imageElements.index(this);
            var options = {
                index: index,
                bgOpacity: 0.8,
                showHideOpacity: true
            };

            // Preload images and set the correct dimensions
            var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            gallery.listen('gettingData', function(index, item) {
                if (item.w < 1 || item.h < 1) { // If dimensions are unknown
                    var img = new Image();
                    img.onload = function() {
                        item.w = this.width;
                        item.h = this.height;
                        gallery.invalidateCurrItems(); // Recalculate dimensions
                        gallery.updateSize(true); // Reapply sizing
                    };
                    img.src = item.src; // Trigger the loading of the image
                }
            });
            gallery.init();
        });
    });

    //Blog Slider
    $(function(){
        var swiper = new Swiper('.dsblog__slider', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 0,
            navigation: {
                nextEl: '.dsblog__slider__btn__next',
                prevEl: '.dsblog__slider__btn__prev',
            },
            breakpoints: {
                992: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                }
            }
        });
    });

    //Newsletter Popup (Variant 3)
    $(function(){
        var currentIndex = 0;
        var scrollThreshold = 3200;
        var isScrollTriggered = false;
    
        function fesnwsltrPopupScroll() {
        if (!isScrollTriggered && $(window).scrollTop() > scrollThreshold) {
            isScrollTriggered = true;
            $('.ds__newsletter__popup').addClass('show');
        }
        }
    
        fesnwsltrPopupScroll();
        $(window).scroll(function() {
        fesnwsltrPopupScroll();
        });
    
        $('.ds__newsltrpop__close').on('click', function() {
        $('.ds__newsletter__popup').removeClass('show');
        });
    });
    
/*============================ Shop Page ============================*/
    //Info Bar Grid Buttons
    $(function() {
        var productStyleDiv = $('.ds__product__style');

        $('.3grid__view').on('click', function() {
            productStyleDiv.removeClass('large__item list__style');
            setActiveButton($(this));
        });

        $('.2grid__view').on('click', function() {
            if ($(window).width() >= 1200) {
                productStyleDiv.addClass('large__item').removeClass('list__style');
                setActiveButton($(this));
            }
        });

        $('.list__view').on('click', function() {
            if ($(window).width() >= 768) {
                productStyleDiv.addClass('list__style').removeClass('large__item');
                setActiveButton($(this));
            }
        });

        $(window).on('resize', function() {
            if ($(window).width() < 1200) {
                productStyleDiv.removeClass('large__item');
                setActiveButton($('.3grid__view'));
            }
            if ($(window).width() < 768) {
                productStyleDiv.removeClass('list__style');
                setActiveButton($('.3grid__view'));
            }
        });

        function setActiveButton(activeButton) {
            $('.grid__btns').removeClass('active');
            activeButton.addClass('active');
        }
    });

    //Product Price Filter
    $(function() {
        let minPriceInput = $('#min__price');
        let maxPriceInput = $('#max__price');
        let minPriceOutput = $('#min__price__output');
        let maxPriceOutput = $('#max__price__output');
        let progress = $('.progress');
    
        function updatePrices() {
            let minPrice = parseInt(minPriceInput.val());
            let maxPrice = parseInt(maxPriceInput.val());
            let maxRange = parseInt(minPriceInput.attr('max'));
    
            if (minPrice > maxPrice) {
                [minPrice, maxPrice] = [maxPrice, minPrice];
            }
    
            minPriceOutput.text('$' + minPrice);
            maxPriceOutput.text('$' + maxPrice);
    
            let minPercent = (minPrice / maxRange) * 100;
            let maxPercent = (maxPrice / maxRange) * 100;
    
            progress.css({
                left: minPercent + '%',
                right: (100 - maxPercent) + '%'
            });
        }
    
        minPriceInput.on('input', updatePrices);
        maxPriceInput.on('input', updatePrices);
    
        // Initial update
        updatePrices();
    });

    //Sideabr Filter Popup
    $(function(){
        //Mobile Menu Main Show/Hide
        $('.sidebar__toggle').on('click', function(){
            $('.dsshop__sidebar').addClass('show')
        })
        $('.dsshop__sidebar__closebtn').on('click', function(){
            $('.dsshop__sidebar').removeClass('show')
        })
    });

/*============================ Single product Page ============================*/
    //Product Image Slider
    $(function(){
        var dsspSwiper = new Swiper(".dssp__product__image__thumb", {
            spaceBetween: 30,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                1200: {
                    spaceBetween: 30,
                },
                992: {
                    spaceBetween: 10,
                },
                768: {
                    spaceBetween: 10,
                    slidesPerView: 3,
                },
                576: {
                    spaceBetween: 20,
                },
                415: {
                    spaceBetween: 13,
                    slidesPerView: 3,
                },
                200: {
                    spaceBetween: 10,
                    slidesPerView: 3,
                },
            }
        });
        var dsspSwiper2 = new Swiper(".dssp__product__image", {
            loop: true,
            spaceBetween: 0,
            navigation: {
                nextEl: ".dssp__prod__img__next",
                prevEl: ".dssp__prod__img__prev",
            },
            thumbs: {
                swiper: dsspSwiper,
            },
        });
    });

    //Active Class
    $(function(){
        //Size
        $('.dssp__size').on('click','.size__items button',function(){
            $(this).addClass('active').siblings().removeClass('active');
        });

        //Color
        $('.dssp__color').on('click','.color__items button',function(){
            $(this).addClass('active').siblings().removeClass('active');
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

/*============================ Cart, Info, Shipping, Checkout ============================*/
    //Item Active Class
    $(function(){
        $('.dspic__color__select').on('click','.dspic__color__item',function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

    //Shipping Active Class
    $(function() {
        $('input[name="dsspsShippingNameFee"]').change(function() {
            $('.dssps__shipping__service__item').removeClass('active');
            $(this).closest('.dssps__shipping__service__item').addClass('active');
        });
    });

    //Payment Option Active Class
    $(function() {
        $('input[name="dsspsPaymentOption"]').change(function() {
            $('.dssps__payment__option__item').removeClass('active');
            $(this).closest('.dssps__payment__option__item').addClass('active');
        });
    });

    //Edit Forms Popup
    $(function(){
        //Shipping
        $('.dsssi__edit__btn').on('click', function(){
            $('.ds__shipping__info__change').addClass('show')
        })
        $('.ds__shipping__change__close').on('click', function(){
            $('.ds__shipping__info__change').removeClass('show')
        })

        //Credit Card
        $('.dsscci__edit__btn').on('click', function(){
            $('.ds__cc__info__change').addClass('show')
        })
        $('.ds__creditcard__change__close').on('click', function(){
            $('.ds__cc__info__change').removeClass('show')
        })
    });

/*============================ Blog ============================*/
    //Column Reverse on Screen Size
    $(function() {
        function adjustClass() {
        var screenWidth = $(window).width();
        var $myDiv = $('.ds__column__reverse__trigger');
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
            $('.ds__product__quickview__popup').addClass('show')
        })
        $('.ds__prod__quickview__btn').on('click', function(){
            $('.ds__product__quickview__popup').removeClass('show')
        })
    });



}) (jQuery);