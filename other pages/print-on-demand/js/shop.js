
const selected_item = document.querySelectorAll(".selected_option");


selected_item.forEach(btn => {
    btn.addEventListener("click", () => {
        let dropdown_box = btn.nextElementSibling;
        dropdown_box.classList.toggle("show")
    })
})

//category handler 

const category_items = document.querySelectorAll(".hidden_dropdown li");

category_items.forEach(item => {
    item.addEventListener("click", () => {
        // Remove active class from all items
        category_items.forEach(otherItem => {
            otherItem.classList.remove("active");
        });
        // Add active class to the clicked item
        item.classList.add("active");
    });
});

// Get all anchor tags within the ul
var anchorTags = document.querySelectorAll('.hidden_dropdown a');

// Loop through each anchor tag
anchorTags.forEach(function (anchor) {
    // Add a click event listener
    anchor.addEventListener('click', function (event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();
        // Optionally, you can add your own custom behavior here
        // For example, you can toggle a class or show additional content
    });
});



const size_items = document.querySelectorAll(".size_option a");

size_items.forEach(item => {
    item.addEventListener("click", () => {
        size_items.forEach(otherItem => {
            otherItem.classList.remove("active");
        })
        item.classList.add("active");
    })
})

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


//banner close
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".dismissible_banner")) {
        const aside_banner_close = document.querySelector("span.banner_close");
        const aside_banner_area = document.querySelector(".dismissible_banner");

        aside_banner_close.addEventListener("click", () => {
            aside_banner_area.style.display = "none"
        })
    }
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


//for side bar handling
if (document.querySelector(".aside_close") && document.querySelector("aside") && document.querySelector(".sidebar_show")) {

    const sideBar_close = document.querySelector(".aside_close");
    const side_bar = document.querySelector("aside");
    const product_container = document.querySelector(".product_section");
    const sideBar_show = document.querySelector(".sidebar_show");

    sideBar_close.addEventListener("click", () => {
        side_bar.style.display = "none";
        product_container.style.width = "100%";
        sideBar_show.style.display = "flex";

    })

    window.addEventListener("resize", () => {
        if (window.matchMedia("(max-width: 991px)").matches) {
            side_bar.style.display = "none";
            product_container.style.width = "100%";
            sideBar_show.style.display = "flex";
        }
    }
    )

    sideBar_show.addEventListener("click", () => {
        side_bar.style.display = "block";
        product_container.style.width = "calc(100% - 300px)";
        sideBar_show.style.display = "none"
    })



}

//product view handler
const grid_per3 = document.querySelector(".grid3_view")
const grid_per2 = document.querySelector(".grid2_view")
const grid_per4 = document.querySelector(".grid4_view")
const list_view = document.querySelector(".list_view")
const products = document.querySelectorAll(".single_shop_product")
const product_imgs = document.querySelectorAll(".sp_image")
const product_container_box = document.querySelector(".product_container")
const product_infos = document.querySelectorAll(".sp_info")

grid_per4.addEventListener('click', () => {
    function adjustGrid4Layout() {

        if (window.matchMedia("(max-width: 1200px)").matches) {
            product_container_box.style.gridTemplateColumns = "1fr 1fr 1fr";
        }
        else {
            product_container_box.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
        }
    }

    // Initial adjustment when the page loads
    adjustGrid4Layout();

    // Event listener for window resize
    window.addEventListener("resize", adjustGrid4Layout);
    product_imgs.forEach(img => {
        img.style.height = "250px"
    })
    products.forEach(p => {
        p.style.display = "block";
    })
    product_imgs.forEach(img => {
        img.style.width = "100%"
    })
    product_infos.forEach(info => {
        info.style.width = "100%";
        info.style.border = "none"
        info.style.borderTop = "1px solid var(--sub-color)";
    })
})
grid_per3.addEventListener('click', () => {

    function adjustGrid3Layout() {

        if (window.matchMedia("(max-width: 1024px)").matches) {
            product_container_box.style.gridTemplateColumns = "1fr 1fr";
        }
        else {
            product_container_box.style.gridTemplateColumns = "1fr 1fr 1fr";
        }
    }

    // Initial adjustment when the page loads
    adjustGrid3Layout();

    // Event listener for window resize
    window.addEventListener("resize", adjustGrid3Layout);
    product_imgs.forEach(img => {
        img.style.height = "250px"
    })
    products.forEach(p => {
        p.style.display = "block";
    })
    product_imgs.forEach(img => {
        img.style.width = "100%"
    })
    product_infos.forEach(info => {
        info.style.width = "100%";
        info.style.border = "none"
        info.style.borderTop = "1px solid var(--sub-color)";
    })
})
grid_per2.addEventListener('click', () => {


    function adjustGrid2Layout() {

        if (window.matchMedia("(max-width: 767px)").matches) {
            product_container_box.style.gridTemplateColumns = "1fr";
        }
        else {
            product_container_box.style.gridTemplateColumns = "1fr 1fr";
        }
    }

    // Initial adjustment when the page loads
    adjustGrid2Layout();

    // Event listener for window resize
    window.addEventListener("resize", adjustGrid2Layout);
    product_imgs.forEach(img => {
        img.style.height = "250px"
    })
    products.forEach(p => {
        p.style.display = "block";
    })
    product_imgs.forEach(img => {
        img.style.width = "100%"
    })
    product_infos.forEach(info => {
        info.style.width = "100%";
        info.style.border = "none"
        info.style.borderTop = "1px solid var(--sub-color)";
    })
})
list_view.addEventListener('click', () => {

    product_imgs.forEach(img => {
        img.style.height = "190px"
    })
    function adjustGrid2Layout() {

        if (window.matchMedia("(max-width: 767px)").matches) {
            product_container_box.style.gridTemplateColumns = "1fr";
        }
        else {
            product_container_box.style.gridTemplateColumns = "1fr 1fr";
        }
    }

    // Initial adjustment when the page loads
    adjustGrid2Layout();

    // Event listener for window resize
    window.addEventListener("resize", adjustGrid2Layout);
    products.forEach(p => {
        p.style.display = "flex";
    })
    product_imgs.forEach(img => {
        img.style.width = "40%"
    })
    product_infos.forEach(info => {
        info.style.width = "60%"
        info.style.border = "none"
        info.style.borderLeft = "1px solid var(--sub-color)";
    })
})






// for sortby popup and filtaring popup
const dropdown = document.querySelector(".pageShow_item_popup")
const dropdown2 = document.querySelector(".short_list")
const dropdown_btn = document.querySelector(".pageShow_select_btn")
const dropdown_btn2 = document.querySelector(".short_by_btn")

let isclicked = true;
const dropdown_handler = (dropdown_area, dropdown_button) => {
    dropdown_button.addEventListener("click", () => {
        if (isclicked) {
            dropdown_area.style.animation = "list_anim 1s linear forwards alternate";
            dropdown_area.style.display = "block"
        } else {
            dropdown_area.style.animation = "list_anim_close 1s linear forwards alternate";
            dropdown_area.style.display = "none"
        }
        isclicked = !isclicked;
    })

}
dropdown_handler(dropdown, dropdown_btn)
dropdown_handler(dropdown2, dropdown_btn2)



// for sort and filter value assign
const item_value_field = document.querySelector(".show_p_item");
const item_value = document.querySelectorAll(".pageShow_item_popup ul li")
const sort_value = document.querySelectorAll(".short_list ul li")
const sort_value_field = document.querySelector(".sort_item")
const value_handler = (select_items, selcet_value) => {
    select_items.forEach(item => {
        item.addEventListener("click", () => {


            // item_value_field.textContent = item.textContent;
            // item.innerHTML = `<i class="fa-solid fa-check"></i> ${item.textContent}`
            select_items.forEach(otherItem => {
                otherItem.innerHTML = otherItem.textContent;
            });
            // Add icon to the clicked item
            item.innerHTML = `<i class="fa-solid fa-check"></i> ${item.textContent}`;

            // Update the item_value_field content
            selcet_value.textContent = item.textContent;
        })

    })
}
value_handler(item_value, item_value_field)
value_handler(sort_value, sort_value_field)


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


//pagination script

const current_page_no = document.querySelector(".page_no");
$('.pagination').pajinatify({
    dir: 'rtl',
    onChange: function (currentPage) {
        current_page_no.textContent = currentPage;
    },
});

//aside accrodian handleing

const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {

    accordion.onclick = function (e) {
        if (!e.target.className.includes("swiper-button-next") && !e.target.className.includes("swiper-button-prev")) {
            this.classList.toggle("is-open");

            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                //this is if the accordion is open
                content.style.maxHeight = null;
            } else {
                //if the accordion is currently closed
                content.style.maxHeight = content.scrollHeight + "px";
            }

        }
    }
    let content = accordion.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px";
    accordion.classList.add("is-open");

});


//script for price range making
const price_ranges = document.querySelectorAll(".range_div input");
const progress_bar = document.querySelector(".price_progress");
const price_inputs = document.querySelectorAll(".field input");
let price_gap = 100;

price_inputs.forEach(input => {
    input.addEventListener("input", (e) => {
        let minValue = parseInt(price_inputs[0].value);
        let maxValue = parseInt(price_inputs[1].value)
        if (maxValue - minValue >= price_gap && maxValue <= 1000) {
            if (e.target.className === "minNumber") {
                price_ranges[0].value = minValue;
                progress_bar.style.left = (minValue / price_ranges[0].max) * 100 + "%";
            } else {
                price_ranges[1].value = maxValue;
                progress_bar.style.right = 100 - (maxValue / price_ranges[1].max) * 100
            }
        }
    })
})

price_ranges.forEach(input => {
    input.addEventListener("input", (e) => {
        let minValue = parseInt(price_ranges[0].value);
        let maxValue = parseInt(price_ranges[1].value)
        if (maxValue - minValue < price_gap) {
            if (e.target.className === "min_price_range") {
                price_ranges[0].value = maxValue - price_gap
            } else {
                price_ranges[1].value = minValue + price_gap
            }
        } else {
            price_inputs[0].value = minValue;
            price_inputs[1].value = maxValue;
            progress_bar.style.left = (minValue / price_ranges[0].max) * 100 + "%";
            progress_bar.style.right = 100 - (maxValue / price_ranges[1].max) * 100 + "%"
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

var swiper6 = new Swiper(".mySwiperTC", {
    // autoplay: true,
    // loop: true,
    spaceBetween: 5,
    slidesPerView: 2,
    navigation: {
        nextEl: ".swiper-button-nextTC",
        prevEl: ".swiper-button-prevTC",
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

    }
});


var swiperAside = new Swiper(".mySwiperAside", {
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-nextAside",
        prevEl: ".swiper-button-prevAside",
    },
});


var swiper7 = new Swiper(".mySwiper7", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination7",
        clickable: true,
    },
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
var swiper8 = new Swiper(".mySwiper8", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next8",
        prevEl: ".swiper-button-prev8",
    },
    thumbs: {
        swiper: swiper7,
    },
});
