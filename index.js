$(document).ready(function () {
    $(".menu_list").click(function (e) {
        $(".menu_list").removeClass("active");
        $(this).addClass("active");
    });

    // active navbar changing when scroll
    var $navbar = $(".menu");
    var $navbarItems = $navbar.find("a");

    // Function to get the current section in view
    function getCurrentSection() {
        var scrollPosition = $(document).scrollTop();

        var currentSection = "";
        $("section").each(function () {
            var top = $(this).offset().top - $navbar.height();
            var id = $(this).attr("id");
            if (scrollPosition >= top) {
                currentSection = id; // Setting the current section to the id of the section in view
            }
        });

        return currentSection;
    }

    $(window).on("scroll", function () {
        var currentSection = getCurrentSection();
        if (currentSection) {
            $navbarItems.parent().removeClass("active");
            $navbar
                .find('a[href="#' + currentSection + '"]')
                .parent()
                .addClass("active");
        }
    });

    // scroll reveal js library
    const slide = ScrollReveal({
        distance: "100px",
        delay: 500,
        easing: "cubic-bezier(.35,.72,.34,.74)",
        viewFactor: 0.5,
    });

    slide.reveal(".home__title, .home__subtitle, .home__desc, .action__container", {
        duration: 1000,
        origin: "bottom",
        interval: 100,
        afterReveal: function (el) {
            el.classList.add("fade-out");
        },
    });

    slide.reveal(".menu_list", { origin: "top", interval: 100, duration: 500 });

    slide.reveal(".home__image", {
        origin: "top",
        duration: 1000,
        afterReveal: function (el) {
            el.classList.add("scroll-driven-scale");
        },
    });

    slide.reveal(".specs__head__title, .case__title", {
        origin: "bottom",
        duration: 1500,
        afterReveal: function (el) {
            el.classList.add("fade-out");
        },
    });

    // specs reveal
    slide.reveal(".specs__data_sub, .specs__subtitle", {
        origin: "left",
        interval: 100,
        duration: 1000,
        afterReveal: function (el) {
            el.classList.add("fade-out");
        },
    });
    slide.reveal(".case__image", {
        origin: "left",
        duration: 1500,
    });
    slide.reveal(".case__content p", {
        origin: "right",
        duration: 1500,
        afterReveal: function (el) {
            el.classList.add("fade-out");
        },
    });
    slide.reveal(".case__button", {
        origin: "bottom",
        duration: 1500,
        afterReveal: function (el) {
            el.classList.add("fade-out");
        },
    });
    slide.reveal(".shop__now__title, .shop__now__description, .fancy", { origin: "bottom", duration: 1500 });
    slide.reveal(".shop__now__image", { origin: "top", duration: 1500 });
});

//expanding header for responsive devices
// $(".menu-icon").click(function () {
//     $("nav ul").toggleClass("active-menu");
// });
