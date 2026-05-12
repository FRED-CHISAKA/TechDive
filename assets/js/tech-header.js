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

window.addEventListener("scroll", function() {

    const header = document.querySelector(".tech-header");
    const topbar = document.querySelector(".tech-topbar");

    if (window.scrollY > 50) {
        header.classList.add("shrink");
        topbar.classList.add("hide");
    } else {
        header.classList.remove("shrink");
        topbar.classList.remove("hide");
    }

});

document.addEventListener("DOMContentLoaded", function(){

    // ==========================================
    // INIT ISOTOPE
    // ==========================================

    const portfolioContainer = document.querySelector('.isotope-container');
    const iso = new Isotope(portfolioContainer, {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry'

    });

    // ==========================================
    // FILTER BUTTONS
    // ==========================================

    const filterButtons = document.querySelectorAll('.portfolio-filters li');

    filterButtons.forEach(button => {

        button.addEventListener('click', function(){

            // REMOVE ACTIVE CLASS
            filterButtons.forEach(btn => {

                btn.classList.remove('filter-active');

            });



            // ADD ACTIVE CLASS
            this.classList.add('filter-active');



            // GET FILTER VALUE
            const filterValue = this.getAttribute('data-filter');



            // FILTER ITEMS
            iso.arrange({

                filter: filterValue

            });

        });

    });

    document.querySelectorAll('.init-swiper').forEach(function(swiperElement) {

        let config = JSON.parse(
            swiperElement.querySelector('.swiper-config').innerHTML.trim()
        );

        new Swiper(swiperElement, config);

    });


});




        // =========================================
        // ELEMENTS
        // =========================================

        const openSearch = document.getElementById("openSearch");
        const closeSearch = document.getElementById("closeSearch");

        const searchOverlay = document.getElementById("searchOverlay");

        const searchInput = document.getElementById("searchInput");

        const searchResults = document.getElementById("searchResults");



        // =========================================
        // OPEN SEARCH
        // =========================================

        openSearch.addEventListener("click", function(e){

            e.preventDefault();

            searchOverlay.classList.add("active");

            searchInput.focus();

        });



        // =========================================
        // CLOSE SEARCH
        // =========================================

        closeSearch.addEventListener("click", function(){

            searchOverlay.classList.remove("active");

        });



        // =========================================
        // ESC CLOSE
        // =========================================

        document.addEventListener("keydown", function(e){

            if(e.key === "Escape"){

                searchOverlay.classList.remove("active");

            }

        });



        // =========================================
        // SEARCHABLE SECTIONS
        // =========================================

        const searchableSections = [

            {
                title: "Home",
                url: "index.html",
                content: document.body.innerText
            },

            {
                title: "About",
                url: "about.html",
                content: "team mission vision why choose us techdive company"
            },

            {
                title: "Services",
                url: "services.html",
                content: "web development cybersecurity cloud IoT systems"
            },

            {
                title: "Projects",
                url: "projects.html",
                content: "portfolio systems applications websites"
            },

            {
                title: "Insights Blog",
                url: "blog.html",
                content: "articles tutorials tech news AI cloud security"
            },

            {
                title: "Contact",
                url: "contact.html",
                content: "contact support email phone address"
            }

        ];



        // =========================================
        // SEARCH FUNCTION
        // =========================================

        function performSearch(){

            const query = searchInput.value
                .toLowerCase()
                .trim();

            searchResults.innerHTML = "";



            // EMPTY SEARCH
            if(query === ""){

                searchResults.innerHTML = "";

                return;
            }



            // FILTER
            const results = searchableSections.filter(section =>

                section.title.toLowerCase().includes(query) ||

                section.content.toLowerCase().includes(query)

            );



            // NO RESULTS
            if(results.length === 0){

                searchResults.innerHTML = `
                    <div class="no-results">
                        No matching content found.
                    </div>
                `;

                return;
            }



            // SHOW RESULTS
            results.forEach(result => {

                // CREATE SMALL PREVIEW
                let preview = result.content;

                const index = preview
                    .toLowerCase()
                    .indexOf(query);

                if(index !== -1){

                    preview = preview.substring(index, index + 120);

                }

                searchResults.innerHTML += `

                    <div class="result-item">

                        <a href="${result.url}">

                            <h4>${result.title}</h4>

                            <p>...${preview}...</p>

                        </a>

                    </div>

                `;

            });

        }



        // =========================================
        // LIVE SEARCH
        // =========================================

        searchInput.addEventListener("keyup", performSearch);



        // =========================================
        // BUTTON SEARCH
        // =========================================

        document.getElementById("searchBtn")
            .addEventListener("click", performSearch);


