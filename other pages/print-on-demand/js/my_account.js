
//***SCRIPT FOR DESHBOARD MENU TOGGLE */

const menu_toggle_btn = document.querySelector(".toggle_deshboard")
const deshboard_main = document.querySelector(".deshboard_area")
const toggle_menu = document.querySelector(".user_deshboard_wrapper aside");
const menu_hide_item = document.querySelectorAll("aside>ul li>a>span:last-child")

let isclicked = true;
menu_toggle_btn.addEventListener("click", () => {

    if (isclicked) {
        menu_hide_item.forEach(item => {
            item.classList.add("deshboard_toggle_item")
        })
        toggle_menu.classList.add("toggle_width");
        menu_toggle_btn.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`
        deshboard_main.style.width = "calc(100% - 90px)"
    } else {
        menu_hide_item.forEach(item => {
            item.classList.remove("deshboard_toggle_item")
        })
        toggle_menu.classList.remove("toggle_width");
        menu_toggle_btn.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`
        deshboard_main.style.width = "calc(100% - 280px)"
    }
    isclicked = !isclicked;
})

//**SCRIPT FOR DELETE PRODUCT FROM WISHLIST */

const wishlist_product = document.querySelectorAll(".single_realted_product")

wishlist_product.forEach(product => {

    let wishlist_product_delete = product.querySelector(".delete_product");
    wishlist_product_delete.addEventListener("click", () => {
        product.style.display = "none"
    })
})

//***SCRIPT FOR ADD PAYMENT BUTTON HANDLING */
const payment_add_button = document.querySelector(".add_new_card");
const payment_add_area = document.querySelector(".add_payment_div")

payment_add_button.addEventListener("click", () => {
    payment_add_area.classList.toggle("show")
})
//***SCRIPT FOR DESHBOARD MENU ITEM HANDLER */

const deshboard_items = document.querySelectorAll("#myTab2 li")

const deshboard_items_array = Array.from(deshboard_items);

deshboard_items_array.forEach(item => {
    item.addEventListener("click", () => {
        deshboard_items_array.forEach(othersItem => {
            othersItem.classList.remove("active")
        })
        item.classList.add("active")
    })

})

window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 991px)").matches) {
        menu_hide_item.forEach(item => {
            item.classList.add("deshboard_toggle_item")
        })
        toggle_menu.classList.add("toggle_width");
        menu_toggle_btn.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`
        deshboard_main.style.width = "calc(100% - 90px)"
    } else {
        menu_hide_item.forEach(item => {
            item.classList.remove("deshboard_toggle_item")
        })
        toggle_menu.classList.remove("toggle_width");
        menu_toggle_btn.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`
        deshboard_main.style.width = "calc(100% - 280px)"
    }
})

const gender_options = document.querySelectorAll(".gander_group label");

const gender_options_array = Array.from(gender_options);

gender_options_array.forEach(opt => {
    opt.addEventListener("click", () => {
        gender_options_array.forEach(others_opt => {
            others_opt.classList.remove("active");
        })
        opt.classList.add("active")
    })
})

//***SCRIPT FOR PROFILE IMAGE UPDATE */
const profile_area = document.querySelector(".profile_img img")
const profile_update_btn = document.querySelector("#profile_upload")

let imageURL;

profile_update_btn.addEventListener("input", () => {


    if (profile_update_btn.files.length) {
        let selectedImage = profile_update_btn.files[0];

        imageURL = URL.createObjectURL(selectedImage);
        profile_area.src = imageURL;
    } else {
        console.warn("No file selected");
    }

});

//***SCRIPT FOR HANLDLING ADDRESS EDIT POPUP */
const address_popup = document.querySelector(".address_edit_popup")
const address_popup_wrapper = document.querySelector(".address_edit_wrapper")
const address_popup_close = document.querySelector(".address_edit_close")
const address_poup_open = document.querySelectorAll(".edit_address")


address_poup_open.forEach(item => {
    item.addEventListener("click", () => {
        address_popup_wrapper.style.animation = "slide_right 1s ease-in forwards"
        address_popup.style.animation = "slide_right2 1s ease-in forwards"
    })
})

address_popup_close.addEventListener("click", () => {
    address_popup_wrapper.style.animation = "slide_right3 1s ease-in  forwards"
    address_popup.style.animation = "slide_out 1s ease-in  forwards"

})



const address_add_popup = document.querySelector(".address_add_popup")
const address_add_popup_wrapper = document.querySelector(".address_add_wrapper")
const address_add_popup_close = document.querySelector(".address_add_close")
const address_add_popup_open = document.querySelector(".address_tab_header button")


address_add_popup_open.addEventListener("click", () => {

    address_add_popup_wrapper.style.animation = "slide_right 1s ease-in forwards"
    address_add_popup.style.animation = "slide_right2 1s ease-in forwards"
})

address_add_popup_close.addEventListener("click", () => {
    address_add_popup_wrapper.style.animation = "slide_right3 1s ease-in  forwards"
    address_add_popup.style.animation = "slide_out 1s ease-in  forwards"

})
const delete_alert = document.querySelector(".address_delete_popup");
const delete_alert_close = document.querySelector(".delete_popup_close");
const negg_btn = document.querySelector(".neg_btn");
const delete_btns = document.querySelectorAll(".delete_btn");


delete_btns.forEach(btn => {
    btn.addEventListener("click", () => {
        delete_alert.style.visibility = "visible";
        delete_alert.style.opacity = "1";
        document.querySelector(".success_popup_wrapper h3").textContent = "Successfully Deleted!"
        document.querySelector(".success_popup_wrapper p").textContent = "This item successfully deleted by you"
    });
});

delete_alert_close.addEventListener("click", () => {
    delete_alert.style.visibility = "hidden";
    delete_alert.style.opacity = "0";
});

negg_btn.addEventListener("click", () => {
    delete_alert.style.visibility = "hidden";
    delete_alert.style.opacity = "0";
});


$(".aff_btn").on("click", function () {
    $(".success_msg").css({ visibility: "visible", opacity: 1 });
    $(".address_delete_popup").css({ visibility: "hidden", opacity: 0 });
});

$(".dis_btn").on("click", function () {
    $(".success_msg").css({ visibility: "hidden", opacity: 0 });
});


$(".default_address_btn").on("click", function () {
    $(".default_msg").css({ visibility: "visible", opacity: 1 });
    $(".default_msg_wrapper p").text("Are you sure to set this address as your default address?")
});
$(".agree_btn").on("click", function () {
    $(".success_msg").css({ visibility: "visible", opacity: 1 });
    $(".default_msg").css({ visibility: "hidden", opacity: 0 });
    $(".success_popup_wrapper > h3").text("Successfully Added!")
    $(".success_popup_wrapper > p").text("This address added as your default address.")


});

$(".disag_btn").on("click", function () {
    $(".default_msg").css({ visibility: "hidden", opacity: 0 });
});


$(".card_edit").each(function () {
    $(this).on("click", () => {
        $(".cradit_card_popup").css({ visibility: "visible", opacity: 1 });
    });
});

$(".cc_popup_close").on("click", () => {
    $(".cradit_card_popup").css({ visibility: "hidden", opacity: 0 });
});

$(".card_remove").each(function () {
    $(this).on("click", () => {
        $(".address_delete_popup").css({ visibility: "visible", opacity: 1 });

        $(".success_popup_wrapper h3").text("Successfully Deleted!")
        $(".success_popup_wrapper  p").text("This item successfully deleted by you")
    })
})

$(".card_default").each(function () {
    $(this).on("click", () => {
        $(".default_msg").css({ visibility: "visible", opacity: 1 });
        $(".default_msg_wrapper p").text("Are you sure to set this card as your default card?");
        $(".agree_btn").addClass("card_d");

        $(".card_d").on("click", () => {
            $(".success_popup_wrapper h3").text("Successfully Added!");
            $(".success_popup_wrapper p").text("This card successfully added as a default card");
        })

    }
    )
});


$(".manage_option").on("click", () => {
    $(".ep_popup").css({ visibility: "visible", opacity: 1 });
})
$(".ep_popup_close").on("click", () => {
    $(".ep_popup").css({ visibility: "hidden", opacity: 0 });
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