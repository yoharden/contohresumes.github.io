var currentSlide = 0;

function showSlide(index) {
    var slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.style.transform = i === currentSlide ? 'translateX(0)' : 'translateX(100%)';
    });
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// 初始化轮播
showSlide(currentSlide);

