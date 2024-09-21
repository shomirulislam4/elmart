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
            console.warn(err)
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




$(document).ready(function () {
    $('.accordion-list > li > .answer').hide();

    $('.accordion-list > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });

});

//review toggle button handling
const review_button = document.querySelector(".review_toggle");
const review_form_area = document.querySelector(".review_form");

review_button.addEventListener("click", () => {
    review_form_area.classList.toggle("form_area_show")
    if (review_form_area.className.includes("form_area_show")) {
        review_button.textContent = "Cancle Review"
    } else {
        review_button.textContent = "Write a Review"
    }

})

//timer handling script
//cout down for offer
let dayValue = document.querySelectorAll(".day b");
let hrsValue = document.querySelectorAll(".hrs b");
let minValue = document.querySelectorAll(".min b");
let secValue = document.querySelectorAll(".sec b");

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

//for product viewer hanlder
const viewer = document.querySelector(".viewer");
setInterval(() => {
    viewer.textContent = Math.floor(Math.random() * (15 - 8 + 1) + 8);
}, 5000);



// rating fillup 
$(".my-rating").starRating({
    starSize: 25,
    minRating: 0,
    activeColor: '#EEBE13',
    ratedColor: 'crimso',
    disableAfterRate: false,
});


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





//swiper code

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    }
});


var swiper4 = new Swiper(".mySwiper2", {
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

//script for adding gallary
var swiperThmb = new Swiper(".mySwiperThmb", {
    spaceBetween: 1,
    slidesPerView: 4,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination14",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        380: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        // when window width is >= 480px
        668: {
            slidesPerView: 5,
            spaceBetween: 10
        },

    }
})
var swiperBig = new Swiper(".mySwiperBig", {
    spaceBetween: 30,

    navigation: {
        nextEl: ".swiper-button-nextBig",
        prevEl: ".swiper-button-prevBig",
    },
    thumbs: {
        swiper: swiperThmb,
    }
}
); 

var swiperRp = new Swiper(".mySwiperRp", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-nextRp",
        prevEl: ".swiper-button-prevRp",
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1140: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});
//***IMAGE UPODING HANDLER */
const upload_file = document.querySelector("#user_upload_img");
const file_object = document.querySelector(".mySwiperBig .swiper-slide-active .img_area");

const uploaded_object = document.createElement("div");
const uploaded_image = document.createElement("img");

file_object.appendChild(uploaded_object);
uploaded_object.appendChild(uploaded_image);

uploaded_object.className = "user_object";
uploaded_object.classList.add("ui-widget-content");
uploaded_object.classList.add("draggable_img");

let imageURL;

upload_file.addEventListener("input", () => {

    uploaded_object.style.visibility = "visible";
    uploaded_object.style.opacity = "1";

    if (upload_file.files.length) {
        let selectedImage = upload_file.files[0];

        imageURL = URL.createObjectURL(selectedImage);
        uploaded_image.src = imageURL;
    } else {
        console.warn("No file selected");
    }
    
    $(function() {
        $(".draggable_img").draggable();
    });
});


//**OBJECT TEXT HANDLER */
const object_text = document.querySelector("#user_text");
const text_area = document.createElement("div");
file_object.appendChild(text_area);
text_area.className = "user_upload_text";

object_text.addEventListener("keyup", () => {
    text_area.style.visibility = "visible";
    text_area.style.opacity = "1";
text_area.textContent = object_text.value;
})


//***PRODUCT CHECK BY USER HANDLER* */
const fonts = document.querySelectorAll(".single_font");
const userText = document.querySelector(".user_upload_text");

fonts.forEach((font, index) => {
    font.addEventListener("click", () => {
        
        fonts.forEach(other_font => {
            other_font.classList.remove("active");
        });
        
        font.classList.add("active");
        
        
        if (index === 1) {
            userText.style.fontFamily = '"Lilita One", sans-serif';

        } else if (index === 2) {

            userText.style.fontFamily = '"Jersey 15 Charted", sans-serif';

        } else {
            
            userText.style.fontFamily = '"Dancing Script", cursiv';
        }
    });
});



const color = document.querySelectorAll(".color_div ul li");

const color_array = Array.from(color);

color_array.forEach((color,  index )=> {
    color.addEventListener("click", () => {
    
        color_array.forEach(other_color => {
            other_color.classList.remove("active");
        });
       
        color.classList.add("active");

        if (index === 1) {
            userText.style.color ="black";

        } else if (index === 2) {

            userText.style.color ="crimson";

        }else if (index === 3) {

            userText.style.color ="darkmagenta";

        } else {
            
            userText.style.color ="#177AFE";
        }
    });
});

