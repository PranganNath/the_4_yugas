let slides = document.querySelectorAll(".slide");
let caption = document.getElementById("slideCaption");
let currentSlide = 0;

// Initial caption
caption.textContent = slides[0].dataset.caption;
caption.classList.add("show");

function showNextSlide() {
    // Hide current
    slides[currentSlide].classList.remove("active");
    caption.classList.remove("show");

    // Move to next
    currentSlide = (currentSlide + 1) % slides.length;

    // Show next
    slides[currentSlide].classList.add("active");

    // Update caption after slight delay
    setTimeout(() => {
        caption.textContent = slides[currentSlide].dataset.caption;
        caption.classList.add("show");
    }, 400);
}

setInterval(showNextSlide, 3500);

// About page slideshow
document.addEventListener("DOMContentLoaded", function () {

    const aboutSlides = document.querySelectorAll(".about-slide");
    let aboutIndex = 0;

    if (aboutSlides.length > 1) {
        setInterval(() => {
            aboutSlides[aboutIndex].classList.remove("active");

            aboutIndex = (aboutIndex + 1) % aboutSlides.length;

            aboutSlides[aboutIndex].classList.add("active");
        }, 4000);
    }

});

