const preloader_area = document.querySelector(".preloader")
window.addEventListener("load", () => {
  setTimeout(() => {
    preloader_area.style.display = "none"
  }, 2000)
})




// newsletter popup
const newsletter_poup_close = document.querySelector(".newsletter_close");
const newsletter_popup = document.querySelector(".newsletter_popup")

setTimeout(() => {
  newsletter_popup.style.transform = "scale(1)";
  document.body.style.overflow = "hidden"
}, 5000)
newsletter_poup_close.addEventListener("click", () => {
  newsletter_popup.style.transform = "scale(0)";
  document.body.style.overflow = "auto"
})
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
//for select item
const select_option = document.querySelectorAll(".category_option ul li")
const select_field = document.querySelectorAll(".field_value");
select_option.forEach(option => {
  option.addEventListener("click", () => {
    // Remove style from previously selected option
    select_option.forEach(otherOption => {
      otherOption.style.background = "";
      otherOption.style.color = "";
    });
    option.style.background = "var(--color-two)";
    option.style.color = "var(--color-three)";

    select_field.forEach(field => {
      field.textContent = option.textContent;
    });
  });
});
 

//sticky header script
$(document).ready(() => {
  const heroSectionBottom = $(".hero_section").offset().top + $(".hero_section").outerHeight();
  $(window).on("scroll", () => {
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition >= (heroSectionBottom-300)) {
      $("header").addClass("sticky_animation");
      $(".top-haeder").addClass("hide_top_header")
    } else {
      $("header").removeClass("sticky_animation");
      $(".top-haeder").removeClass("hide_top_header");
    }
  });
});
//aos on scroll animation intialize
AOS.init();

//add to cart count
const increase_button = document.querySelectorAll(".increase");
const decrease_button = document.querySelectorAll(".decrease");
const cart_value_input = document.querySelectorAll(".cart_value");

increase_button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let inputValue = parseInt(cart_value_input[index].value);
    cart_value_input[index].value = inputValue + 1;

  })
})
decrease_button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let input_value = parseInt(cart_value_input[index].value);
    if (input_value > 1)
      cart_value_input[index].value = input_value - 1;
  })
})

// accordian script
$(".accordion-content").css("display", "none");

$(".accordion-title").click(function () {
  $(".accordion-title").not(this).removeClass("open");
  $(".accordion-title").not(this).next().slideUp(300);
  $(this).toggleClass("open");
  $(this).next().slideToggle(300);
});

// offer countdown script
let dayValue = document.querySelector(".days");
let hrsValue = document.querySelector(".hrs");
let minValue = document.querySelector(".min");
let secValue = document.querySelector(".sec");

// Set the date you're counting down to (replace with your desired date)
const countdownDate = new Date("March 28, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const timeRemaining = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated values
  dayValue.textContent = formatTime(days);
  hrsValue.textContent = formatTime(hours);
  minValue.textContent = formatTime(minutes);
  secValue.textContent = formatTime(seconds);

  // If the countdown is over, display a message or perform any action
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    // You can add a message or perform an action when the countdown is over
  }
}, 1000);

// Function to format time values with leading zeros
function formatTime(value) {
  return value < 10 ? "0" + value : value;
}


// appoinment popup
const appo_popup = document.querySelector(".appoinment_popup");
const appo_popup_close = document.querySelector(".appo_close");
const appo_popup_open = document.querySelectorAll(".slider_button button")

appo_popup_open.forEach(btn => {
  btn.addEventListener("click", () => {
    appo_popup.style.display = "flex"
    document.body.style.overflow = "hidden"
  })
})

appo_popup_close.addEventListener("click", () => {
  appo_popup.style.display = "none"
  document.body.style.overflow = "auto"
})

const hover_product = document.querySelectorAll(".ts_single_product")
hover_product.forEach(p => {
  const product_option1 = p.querySelectorAll(".single_option:first-child");
  const product_option2 = p.querySelectorAll(".single_option:nth-child(2)");
  const product_option3 = p.querySelectorAll(".single_option:last-child");
  p.addEventListener("mouseover", () => {
    product_option1.forEach(option => {
      option.style.animation = "fade_left1 .6s linear forwards alternate"
    })
    product_option2.forEach(option => {
      option.style.animation = "fade_left2 .6s linear .1s forwards alternate"
    })
    product_option3.forEach(option => {
      option.style.animation = "fade_left3 .6s linear .2s forwards alternate"
    })
  })
  p.addEventListener("mouseleave", () => {
    product_option1.forEach(option => {
      option.style.animation = "fade_out1 .6s linear forwards alternate"
    })
    product_option2.forEach(option => {
      option.style.animation = "fade_out2 .6s linear .1s forwards alternate"
    })
    product_option3.forEach(option => {
      option.style.animation = "fade_out3 .6s linear .2s forwards alternate"
    })
  })
})

const quick_view_area = document.querySelector(".quick_view_popup")
const quick_view_btn = document.querySelector(".close_quick_view")
const quick_view_open = document.querySelectorAll(".quick_view_btn");
quick_view_open.forEach(btn => {
  btn.addEventListener("click", () => {
    quick_view_area.style.display = "flex"
    document.body.style.overflow = "hidden";
  })
})
// const quick_view_btn = document.querySelector(".close_quick_view")
quick_view_btn.addEventListener("click" , () => {
  quick_view_area.style.display = "none"
  document.body.style.overflow = "auto";
})

  // scroll to top button
  var $button = $.backToTop({

    // background color
    backgroundColor: '#ED6436',

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


//script for adding gallary
var swiper = new Swiper(".mySwiper6", {
  spaceBetween: 1,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination6",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    380: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 480px
    668: {
      slidesPerView: 3,
      spaceBetween: 10
    },

  }
})
var swiper3 = new Swiper(".mySwiper5", {
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next5",
    prevEl: ".swiper-button-prev5",
  },
  thumbs: {
    swiper: swiper,
  }
}
);

var swiper = new Swiper(".mySwiper4", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
  },
  breakpoints: {
    500: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1035: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".mySwiper3", {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1035: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});


var swiper = new Swiper(".mySwiper2", {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1035: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});


var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  breakpoints: {
    500: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1035: {
      slidesPerView: 7,
      spaceBetween: 40,
    },
  },
});
const swiper2 = new Swiper('.mySwiper1', {
  effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
    },
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 0,
    }
  }
});
