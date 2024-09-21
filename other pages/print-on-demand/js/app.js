//intro preloader handler

let single_elements = document.querySelectorAll(".intro_element");
let intro_preloader = document.querySelector(".intro_preloader");
let preloader_close = document.querySelector(".intro_close");

// Function to show single elements one by one 
function showElementsWithDelay() {
    let index = 0;
    const interval = setInterval(() => {

        single_elements[index].style.display = "flex";

        if (index > 0) {
            single_elements[index - 1].style.display = "none";
        }
        index++;

        if (index >= single_elements.length) {
            clearInterval(interval);
        }
    }, 1000);


    setTimeout(() => {
        single_elements[single_elements.length - 1].style.display = "flex";
    }, single_elements.length * 1000);
}


setTimeout(showElementsWithDelay, 0);
const intro_preloader_handler = () => {

    intro_preloader.classList.add("show");
    showElementsWithDelay();
    setTimeout(() => {
        intro_preloader.classList.remove("show");
        intro_preloader.classList.add("hide")

    }, 15000);
}
window.addEventListener("load", intro_preloader_handler)
preloader_close.addEventListener("click", () => {
    intro_preloader.classList.add("hide")
})


//quick view popup
const quick_view_area = document.querySelector(".quick_view_popup")
const quick_view_btn = document.querySelector(".close_quick_view")

const quick_view_wrapper = document.querySelector(".quick_view_wrapper")
const quick_view_open = document.querySelectorAll(".quick_view");
quick_view_open.forEach(btn => {
    btn.addEventListener("click", () => {
        quick_view_wrapper.style.animation = "slide_right 1s ease-in forwards"
        quick_view_area.style.animation = "slide_right2 1s ease-in forwards"
    })
})
quick_view_btn.addEventListener("click", () => {
    quick_view_wrapper.style.animation = "slide_right3 1s ease-in forwards"
    quick_view_area.style.animation = "slide_out 1s ease-in forwards"

})




//bottom product mini popup hanlder
const bp_close_btn = document.querySelector(".bp_close");
const bp_popup = document.querySelector(".bottom_mini_popup");
bp_close_btn.addEventListener("click", () => {
    bp_popup.classList.remove("show");
  
})
setTimeout(() => {
    bp_popup.classList.add("show")

}, 20000);

const notification_msg = document.querySelector(".notification");
const notification_msg_close = document.querySelector(".notification_close");

setTimeout(() => {
    notification_msg.classList.add("show");
    setInterval(() => {
        notification_msg.classList.toggle("show");
    }, 5000);
}, 25000);

notification_msg_close.addEventListener("click", () => {
    notification_msg.classList.remove("show");
});
// offer circle text handler 
const cirlce_text = document.querySelector(".offer_text");
    cirlce_text.innerHTML = cirlce_text.textContent.split("").map((char, i) => 
        `<span style="rotate: ${i *15}deg">${char}</span>`
    ).join("")

//bottom header toggle
$(".bottom_header_btn").on("click", () => {
    $(".bottom_header").slideToggle();
    $(".bottom_header_btn svg").toggleClass("hidden_area");
})

// accordian script
$(".accordion-content").css("display", "none");

$(".accordion-title").click(function () {
    $(".accordion-title").not(this).removeClass("open");
    $(".accordion-title").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
});


//side menu script
$(".mobile_menu_close").on("click", () => {
    $(".mobile_side_menu").addClass("hide_menu")
    $(".mobile_side_menu").removeClass("show_menu")
    $(".moblie_menu_wrapper").addClass("hide_wrapper")
    $(".moblie_menu_wrapper").removeClass("show_wrapper")

})
$(".mobile_menu_btn").on("click", () => {
    $(".mobile_side_menu").addClass("show_menu")
    $(".mobile_side_menu").removeClass("hide_menu")
    $(".moblie_menu_wrapper").addClass("show_wrapper")
    $(".moblie_menu_wrapper").removeClass("hide_wrapper")
})

//newsleter script
const newsletter_popup = document.querySelector(".newsletter_popup");
const newsletter_close_btn = document.querySelector(".newsletter_popup_close");
const newsletter_wrapper = document.querySelector(".newsletter_wrapper");

setTimeout(() => {
    newsletter_wrapper.style.animation = "slide_right 1s ease-in forwards"
    newsletter_popup.style.animation = "slide_right2 1s ease-in forwards"

}, 30000);

newsletter_close_btn.addEventListener("click", () => {
    newsletter_wrapper.style.animation = "slide_right3 1s ease-in  forwards"
    newsletter_popup.style.animation = "slide_out 1s ease-in  forwards"
  
})

const product_popup = document.querySelector(".top_pick_popup");
const product_popup_wrapper = document.querySelector(".top_pick_wrapper");
const product_popup_close = document.querySelector(".popup_close");



setTimeout(() => {
    product_popup_wrapper.style.animation = "slide_right 1s ease-in forwards"
    product_popup.style.animation = "slide_right2 1s ease-in forwards"

}, 35000);

product_popup_close.addEventListener("click", () => {
    newsletter_wrapper.style.animation = "slide_right3 1s ease-in  forwards"
    product_popup.style.animation = "slide_out 1s ease-in  forwards"
  
})



//video popup hanlder

const video_popup_close = document.querySelector(".video_popup_close");
const video_popup_open = document.querySelector(".video_play_btn");
const video_popup_area = document.querySelector(".hero_video_popup ");
const video_popup_main = document.querySelector(".hero_video_wrapper ");

video_popup_open.addEventListener("click", () => {
    video_popup_main.style.animation = "slide_right 1s ease-in forwards"
    video_popup_area.style.animation = "slide_right2 1s ease-in forwards"
})

video_popup_close.addEventListener("click", () => {
    video_popup_main.style.animation = "slide_right3 1s ease-in  forwards"
    video_popup_area.style.animation = "slide_out 1s ease-in  forwards"

})
//user popup function
const user_popup_close = document.querySelector(".user_popu_close");
const user_popup_open = document.querySelector(".user_btn");
const user_popup_area = document.querySelector(".user_popup ");
const user_popup_main = document.querySelector(".user_popup_wrapper ");

const mobile_search_close = document.querySelector(".sm_search_close")
const mobile_search_popup = document.querySelector(".mobile_search_bar")
const mobile_search_wrapper = document.querySelector(".search_bar_wrapper")
const mobile_search_open = document.querySelector(".mobile_search_btn")

mobile_search_open.addEventListener("click", () => {
    mobile_search_wrapper.style.animation = "slide_right 1s ease-in forwards"
    mobile_search_popup.style.animation = "slide_right2 1s ease-in forwards"
})

mobile_search_close.addEventListener("click", () => {
    mobile_search_wrapper.style.animation = "slide_right3 1s ease-in  forwards"
    mobile_search_popup.style.animation = "slide_out 1s ease-in  forwards"

})

user_popup_open.addEventListener("click", () => {
    user_popup_main.style.animation = "slide_right 1s ease-in forwards"
    user_popup_area.style.animation = "slide_right2 1s ease-in forwards"
})

user_popup_close.addEventListener("click", () => {
    user_popup_main.style.animation = "slide_right3 1s ease-in  forwards"
    user_popup_area.style.animation = "slide_out 1s ease-in  forwards"

})



//user signin & signup handler
let login_text = $(".user_welcome")
let para_text = $(".user_gide")
let login_tab = $(".login_tab")
let signup_tab = $(".signup_tab")
let login_form = $(".login_wrapper")
let signup_form = $(".register_wrapper")

login_tab.on("click", () => {
    login_form.css("animation", "slide_right 1s ease-in forwards");
    signup_form.css("animation", "slide_right3 1s ease-in forwards");
    login_tab.css("display", "none")
    login_tab.css("position", "absolute")
    signup_tab.css("position", "relative")
    signup_tab.css("display", "block")
    login_text.text("Join With Us")
    para_text.text("Fill up personal information and start journey with us.")

});
signup_tab.on("click", () => {
    signup_form.css("animation", "slide_right 1s ease-in forwards");
    login_form.css("animation", "slide_right3 1s ease-in forwards");
    signup_tab.css("display", "none")
    signup_tab.css("position", "absolute")
    login_tab.css("position", "relative")
    login_tab.css("display", "block")
    login_text.text("Welcome Back!")
    para_text.text("Login here by filling you're username and password.")
});


//add to cart count
const increase_button = document.querySelectorAll(".increase");
const decrease_button = document.querySelectorAll(".decrease");
const cart_value_input = document.querySelectorAll(".cart_value");

increase_button.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let inputValue = parseInt(cart_value_input[index].value);

        if (inputValue < 9) {
            cart_value_input[index].value = `0${inputValue + 1}`;
        } else {
            cart_value_input[index].value = inputValue + 1;
        }
    });
});

decrease_button.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let inputValue = parseInt(cart_value_input[index].value);

        if (inputValue > 1) {
            if (inputValue <= 10) {
                cart_value_input[index].value = `0${inputValue - 1}`;
            } else {
                cart_value_input[index].value = inputValue - 1;
            }
        }
    });
});

//copy coupon code 
const coupon = document.querySelector(".coupon_code");
const coupon_icon = document.querySelector(".copy_coupon");

// Add a click event listener to the coupon icon
coupon_icon.addEventListener("click", () => {
    // Attempt to copy the text to the clipboard
    navigator.clipboard.writeText(coupon.textContent)
        .then(() => {
            // If successful, update the coupon icon's innerHTML
            coupon_icon.innerHTML = `<i class="fa-solid fa-clipboard-check"></i>  
      <span class="coupon_code">Copied!</span>`;
            setTimeout(() => {
                coupon_icon.innerHTML = `<i class="fa-solid fa-copy"></i>  
                <span class="coupon_code">KH632</span>`;
            }, 2000);

        })
        .catch((err) => {
            // Handle any errors, such as browser support or permission issues
        });
});



//item dropdown hanler
let s_div = $(".selected_div");
s_div.each(function () {
    var dropdown_area = $(this).siblings(".item_dropdown");

    $(this).on("click", function () {
        // Close dropdowns of all other item wrappers
        s_div.not($(this)).siblings(".item_dropdown").fadeOut();

        // Toggle the dropdown of the current item wrapper
        dropdown_area.fadeToggle();
    });

});

$(".category_name").on("click", function () {
    $(".category_dropdown").fadeToggle()

})

$(".category_dropdown li").each((index, item) => {
    $(item).on("click", () => {
        let category_value = $(".selected_category");
        category_value.text($(item).text());
    });
});


const dropdown_item = document.querySelectorAll(".item_dropdown li")

dropdown_item.forEach(item => {


    item.addEventListener("click", () => {

        let dropdown_value = item.parentElement.previousElementSibling.querySelector(".selected_item")
        dropdown_value.textContent = item.textContent;
    })
})

$(".category_btn").on("click", () => {
    $(".category_list").slideToggle();
})


//dragable content
$(function () {
    $(".toggle_menu").draggable();
});


//search suggestion hanlder
// Get the input element
var inputElement = document.querySelector('#desktop_search');
// Get the div_focus element
var divFocusElement = document.querySelector('.search_suggestion');

// Add focus event listener to the input element
inputElement.addEventListener('click', function () {
    // Show div_focus when input is focused
    divFocusElement.classList.toggle("ss_open")
});

document.addEventListener('click', function (event) {
    // Check if the click is outside the input element
    if (!inputElement.contains(event.target) && !divFocusElement.contains(event.target)) {
        // Hide div_focus when clicked outside the input
        divFocusElement.classList.remove("ss_open")
    }
});

//offer banner handler
const banner_close_button = document.querySelector(".banner_close");
const banner_area = document.querySelector(".offer_banner");

banner_close_button.addEventListener("click", () => {
    banner_area.style.transform = "translate(0%, -100%)"
    banner_area.style.visibility = "hidden"
    banner_area.style.opacity = "0"
    banner_area.style.animation = "hide .2s ease-in .2s alternate forwards"
})




//toggle button handler
const toggle_button = document.querySelector(".toggle_icon");
const toggle_area = document.querySelector(".toggle_menu_wrapper");

toggle_button.addEventListener("click", () => {
    toggle_area.classList.toggle("active_menu")
    if (toggle_area.className.includes("active_menu")) {
        toggle_button.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else {
        toggle_button.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`
    }

})




//timer handling script
//cout down for offer
let dayValue = document.querySelectorAll(".day");
let hrsValue = document.querySelectorAll(".hrs");
let minValue = document.querySelectorAll(".min");
let secValue = document.querySelectorAll(".sec");

// Set the date you're counting down to (replace with your desired date)
const countdownDate = new Date("May 10, 2024 04:04:40").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function () {
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
    dayValue.forEach(box => {
        box.textContent = formatTime(days);
    })
    hrsValue.forEach(box => {
        box.textContent = formatTime(hours);
    })
    minValue.forEach(box => {
        box.textContent = formatTime(minutes)
    })
    secValue.forEach(box => {
        box.textContent = formatTime(seconds);
    })


    // If the countdown is over, display a message or perform any action
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        // You can add a message or perform an action when the countdown is over
        console
    }
}, 1000);

// Function to format time values with leading zeros
function formatTime(value) {
    return value < 10 ? "0" + value : value;
}


//sticky header handler
const header = document.querySelector("header");
const toggleClass = "sticky_animation";
const top_header = document.querySelector(".top_header")
const offer_banner = document.querySelector(".offer_banner")
const news_section = document.querySelector(".header_news")


$(document).ready(() => {
    $(window).on("scroll", () => {
        if ($(window).scrollTop()) {
            header.classList.add(toggleClass);
            top_header.style.display = "none"
            offer_banner.style.display = "none"
            news_section.style.display = "none"
        } else {
            header.classList.remove(toggleClass);
            top_header.style.display = "block"
            offer_banner.style.display = "block"
            news_section.style.display = "block"
        }
    })
})




//bottom to top button script
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#177AFE ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;





//side cart hanlder
$(".cart_icon").on("click", (e) => {
    e.preventDefault()
    $(".side_cart_wrapper").slideDown();
    $(".side_cart").fadeToggle();
});

$(".cart_close").on("click", () => {
    $(".side_cart_wrapper").slideUp();
    $(".side_cart").fadeToggle();
});


$(document).on("click", (e) => {
    if (!$(".side_cart_wrapper").has(e.target).length && !$(".cart_close").has(e.target).length && $(".side_cart").has(e.target).length) {
        $(".side_cart_wrapper").slideUp();
        $(".side_cart").fadeToggle();
    }
});

$(".coupon_btn").on("click", () => {
    $(".discount_wrapper").slideDown();
    $(".discount_mini_popup").fadeToggle();
});

$(".cupon_delete").on("click", () => {
    $(".discount_wrapper").slideUp();
    $(".discount_mini_popup").fadeToggle();
});
$(".estimate_btn").on("click", () => {
    $(".rate_wrapper").slideDown();
    $(".rate_mini_popup").fadeToggle();
});

$(".rate_cancle").on("click", () => {
    $(".rate_wrapper").slideUp();
    $(".rate_mini_popup").fadeToggle();
});
$(".gift_btn").on("click", () => {
    $(".gift_wrap").slideDown();
    $(".gift_mini_popup").fadeToggle();
});

$(".delete_gift").on("click", () => {
    $(".gift_wrap").slideUp();
    $(".gift_mini_popup").fadeToggle();
});
$(".note_btn").on("click", () => {
    $(".popup_div").slideDown();
    $(".mini_popup").fadeToggle();
});

$(".delete_card").on("click", () => {
    $(".popup_div").slideUp();
    $(".mini_popup").fadeToggle();
});

// Parallax footer area
const parallax_footer = document.querySelector(".parallax_footer_area");
const upper_area = document.querySelector(".extra_service");

function updateMargin() {
    let footer_height = parallax_footer.offsetHeight;
    upper_area.style.marginBottom = `${footer_height}px`; 
}

// Call updateMargin initially and on window resize
updateMargin();
window.addEventListener("resize", updateMargin);

//before after effect
const container = document.querySelector(".effect_area");
const slider_input = document.querySelector("#slider_range");

slider_input.addEventListener("input", (e) => {
    container.style.setProperty(`--position`, `${e.target.value}%`)
})






//swiper code

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    }
});

var swiper = new Swiper(".mySwiper3", {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    }
});
var swiper4 = new Swiper(".mySwiper4", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});
var swiper5 = new Swiper(".mySwiper5", {
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next5",
        prevEl: ".swiper-button-prev5",
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    }
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});

var swiper6 = new Swiper(".mySwiper6", {
    autoplay: true,
    loop: true,
    spaceBetween: 5,
    slidesPerView: 2,
    navigation: {
        nextEl: ".swiper-button-next6",
        prevEl: ".swiper-button-prev6",
    },
    breakpoints: {
        500: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        600: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 7,
            spaceBetween: 20,
        }
    }
});
var swiper7 = new Swiper(".mySwiper7", {
    autoplay: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next7",
        prevEl: ".swiper-button-prev7",
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});
var swiper8 = new Swiper(".mySwiper8", {
    autoplay: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next8",
        prevEl: ".swiper-button-prev8",
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});
var swiper9 = new Swiper(".mySwiper9", {
    autoplay: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next9",
        prevEl: ".swiper-button-prev9",
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});
var swiper10 = new Swiper(".mySwiper10", {
    autoplay: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next10",
        prevEl: ".swiper-button-prev10",
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});

var swiper11 = new Swiper(".mySwiper11", {
    // autoplay: true,
    // loop: true,
    spaceBetween: 5,
    slidesPerView: 2,
    navigation: {
        nextEl: ".swiper-button-next11",
        prevEl: ".swiper-button-prev11",
    },
    breakpoints: {
        500: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        600: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 20,
        }
    }
});

var swiper12 = new Swiper(".mySwiper12", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 15,
        }
    }
});
var swiper13 = new Swiper(".mySwiper13", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next13",
        prevEl: ".swiper-button-prev13",
    },
    thumbs: {
        swiper: swiper12,
    },
});

