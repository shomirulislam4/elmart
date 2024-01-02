//Create Function
$(function () {
    let toggleIcons = document.querySelectorAll(".fa-chevron-down");
    let submenus = document.querySelectorAll(".dropdownlink");
    
    let submenu
    let isMenuClicked = false;
    for(let i = 0; i < 14; i++){
       submenu = submenus[i];
       
    }
    submenu.addEventListener("click", () => {
      if (isMenuClicked) {
        toggleIcons.forEach(icon => icon.classList.add("active_menu_icon"));
        console.log("clicked");
      } else {
        toggleIcons.forEach(icon => icon.classList.remove("active_menu_icon"));
        console.log("removed");
      }
    
      isMenuClicked = !isMenuClicked;
    });

    
    })
    var Accordion = function (el, multiple) {
        this.el = el || {};
        //More Than One Menu Open
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click', {
            el: this.el,
            multiple: this.multiple
        },
            this.dropdown
        );
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            //ul submenuItems
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        // if (!e.data.multiple) {
        //Show Only one Menu at the same time
        // $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        // }

    };


    //Set Object
    var accordion = new Accordion($('.accordion-menu'), false);


