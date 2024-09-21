

//search bar
const search_input_area = document.querySelector("#search_input");
const search_suggestion = document.querySelector(".search_suggestion")
const close_btn = document.querySelector(".search_close");
const search_container = document.querySelector(".search_bar");
const show_button =document.querySelector(".search_icon");


search_input_area.addEventListener("focus", () => {
  search_suggestion.style.animation = "fade_top 1s ease-out forwards alternate";
})

//show searh bar 
show_button.addEventListener("click", () => {
  search_container.style.animation = "show_searchbar 1s ease-out forwards alternate";
  document.body.style.overflow = "hidden";
})

//hide search bar
close_btn.addEventListener("click", () => {
  search_container.style.animation = "fade_down 1s ease-out forwards alternate";
  document.body.style.overflow = "auto";
  search_suggestion.style.animation = "none";
})

// cookies accept button function
const cookies_button = document.querySelector(".open_btn");
const cookies_area = document.querySelector(".cookies_alert");
const close_button = document.querySelector(".close_btn")


//preloader
const preloader_area = document.querySelector(".preloader")
window.addEventListener("load", () => {
  setTimeout(() => {
 preloader_area.style.display = "none"
  },2000)
  close_button.addEventListener("click", () => {
    cookies_area.style.animation = "cookies_close 2s ease-in-out  forwards alternate"
    })
    cookies_area.style.animation="cookies_open 2s ease-in 2s forwards alternate";
  cookies_button.addEventListener("click", () => {
    cookies_area.style.animation = "cookies_close 2s ease-in-out  forwards alternate"
    })
})

//sticky header script
$(document).ready(() => {
  const heroSectionBottom = $("#hero_section").offset().top + $("#hero_section").outerHeight();
  $(window).on("scroll", () => {
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition >= (heroSectionBottom-300)) {
      $("#header").addClass("sticky_animation");
    } else {
      $("#header").removeClass("sticky_animation");
    }
  });
});

//get elements
const optionMenu = document.querySelectorAll(".currency_option li");
const option_value = document.querySelector(".value_area");
const language_option = document.querySelectorAll(".ln_option li")
const language_value =document.querySelector(".ln_value");
optionMenu.forEach(item => {
    item.addEventListener("click" , () => {
        option_value.textContent = item.textContent;
    })
})
language_option.forEach(ln_item => {
    ln_item.addEventListener("click" , () => {
        language_value.textContent = ln_item.textContent;
    })
})


//add to cart count
const increase_button = document.querySelectorAll(".increase");
const decrease_button = document.querySelectorAll(".decrease");
const cart_value_input = document.querySelectorAll(".cart_value");

increase_button.forEach((btn , index) => {
  btn.addEventListener("click", () => { 
    let inputValue = parseInt(cart_value_input[index].value);
    cart_value_input[index].value = inputValue+1;
   
  })
})
decrease_button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let input_value = parseInt(cart_value_input[index].value);
    if(input_value > 1)
    cart_value_input[index].value = input_value-1;
  })
})

// food item animation
const items = document.querySelectorAll(".single_food");
items.forEach(item => {
  let item_img =  item.querySelector(".food_img")
  item.addEventListener("mouseleave", () => {
   item_img.style.animation = "food_img_hide 1s ease-in forwards alternate"
  })
  item.addEventListener("mouseover", () => {
    item_img.style.animation = "food_img 1s ease-in forwards alternate"
   })
})

// food popup close
const popup_close_button = document.querySelector(".f_popup_close");
const popup_open_button = document.querySelectorAll(".food_cart_btn");
const popup_area = document.querySelector(".food_popup");
const video_popup_close = document.querySelector(".close_icon");
const video_popup_area = document.querySelector(".video_popup");
const video_popup_open = document.querySelectorAll(".video_icon");
// video popup
video_popup_open.forEach( item => {
  item.addEventListener("click", () => {
    video_popup_area.style.display = "flex"
    video_popup_area.style.transform = "scale(1)"
    document.body.style.overflow = "hidden"
  })
})
video_popup_close.addEventListener("click", () => {
  video_popup_area.style.display = "none";
  video_popup_area.style.transform = "scale(0)"
  document.body.style.overflow = "auto"

})

popup_open_button.forEach( item => {
  item.addEventListener("click", () => {
    popup_area.style.display = "block"
    popup_area.style.transform = "scale(1)"
    document.body.style.overflow = "hidden"
  })
})
popup_close_button.addEventListener("click", () => {
  popup_area.style.display = "none";
  popup_area.style.transform = "scale(0)"
  document.body.style.overflow = "scroll"

})



  var swiper = new Swiper(".mySwiper", {
    // loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
    watchSlidesProgress: true,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1060: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  });
  var swiper2 = new Swiper(".mySwiper2", {
    // loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-paginationH",
      clickable: true,
    },
    thumbs: {
      swiper: swiper,
    },
  
  });

  var swiper = new Swiper(".mySwiper3", {
  //  autoplay: true,
    spaceBetween: 10,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1060: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  });



  var swiper = new Swiper(".mySwiper5", {
    //  autoplay: true,
      spaceBetween: 0,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next5",
        prevEl: ".swiper-button-prev5",
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 0,
        }
      }
    });
  

  var swiper = new Swiper(".mySwiper4", {
    //  autoplay: true,
      spaceBetween: 0,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
      },
      pagination: {
        el: ".swiper-pagination4",
        clickable: true,
      },
      breakpoints: {
       
        576: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1140:{
          slidesPerView: 4,
          spaceBetween: 25,
        }
      }
    });
  

  // accordian script
  $(".accordion-content").css("display", "none");

  $(".accordion-title").click(function () {
     $(".accordion-title").not(this).removeClass("open");
     $(".accordion-title").not(this).next().slideUp(300);
     $(this).toggleClass("open");
     $(this).next().slideToggle(300);
  });

  // scroll to top button
  var $button = $.backToTop({

    // background color
    backgroundColor: '#e7272d',

    // text color
    color: '#FFFFFF',

    // container element
    container: this._body, 

    // 'nonn', 'spin', 'fade', 'zoom', or 'spin-inverse'
    effect: 'spin',

    // enable the back to top button
    enabled: true, 

    // width/height of the back to top button
    height: 70,  
    width: 70,

    // icon
    icon: 'fas fa-chevron-up',

    // margins 
    marginX: 20,
    marginY: 20,  

    // bottom/top left/right
    position: 'bottom right',           

    // trigger position
    pxToTrigger: 600,

    // or 'fawesome'
    theme: 'default',

    // z-index
    zIndex: 999
    
});