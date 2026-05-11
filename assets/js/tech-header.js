// =============================
// TECHDIVE HEADER & INTERACTIONS
// =============================

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".tech-header");
    const navLinks = document.querySelectorAll(".tech-header .nav-link");
    const navbarCollapse = document.querySelector("#navbarNav");
    const backToTop = document.querySelector(".back-to-top");

    // =============================
    // Shrink on Scroll & Back to Top
    // =============================
    function handleScroll() {
        if (header) {
            if (window.scrollY > 1) {
                header.classList.add("shrink");
            } else {
                header.classList.remove("shrink");
            }
        }

        highlightActiveSection();

        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        }
    }

    window.addEventListener("scroll", handleScroll);

    // =============================
    // Smooth Scrolling
    // =============================
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (!target) return;

            e.preventDefault();

            const headerHeight = header ? header.offsetHeight : 0;

            window.scrollTo({
                top: target.offsetTop - headerHeight,
                behavior: "smooth"
            });

            // Auto close mobile menu
            if (
                window.innerWidth < 992 &&
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });

    // =============================
    // Active Link Highlight on Scroll
    // =============================
    function highlightActiveSection() {
        if (!header) return;

        const scrollPosition = window.scrollY + header.offsetHeight + 50;

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (!section) return;

            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                navLinks.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    }

    // =============================
    // Adjust Body Padding for Fixed Header
    // =============================
    function adjustBodyPadding() {
        if (header) {
            document.body.style.paddingTop = header.offsetHeight + "px";
        }
    }

    window.addEventListener("load", adjustBodyPadding);
    window.addEventListener("resize", adjustBodyPadding);

});


// =============================
// TECHDIVE TESTIMONIAL (Owl)
// =============================

$(document).ready(function () {
    const testimonialCarousel = $(".testimonial-carousel");

    if (testimonialCarousel.length) {
        testimonialCarousel.owlCarousel({
            autoplay: true,
            smartSpeed: 1200,
            margin: 30,
            dots: true,
            loop: true,
            nav: false,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });
    }
});


// ==========================================
// TECHDIVE PARTNERS LOGO SLIDER
// ==========================================
$('.vendor-carousel').owlCarousel({

    loop: true,
    margin: 40,
    dots: false,
    nav: false,

    autoplay: true,
    autoplayTimeout: 1800,      // time between slides
    autoplayHoverPause: true,   // pause on hover

    smartSpeed: 900,            // smooth transition speed
    slideTransition: 'linear',  // smooth continuous feel

    responsive: {

        0: {
            items: 2
        },

        576: {
            items: 3
        },

        768: {
            items: 4
        },

        992: {
            items: 5
        },

        1200: {
            items: 6
        }

    }

});

