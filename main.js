const carousel = document.querySelector('.carousel_wrapper');
const slides = Array.from(carousel.children);
const nextButton = document.querySelector('.right_button');
const prevButton = document.querySelector('.left_button');

const slideWidth = slides[0].getBoundingClientRect().width;

// arange the slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
const setSlidePosition = (slide, index) => {
    slide.style.left =  slideWidth * index + 'px'
}
slides.forEach(setSlidePosition);

const moveToSlide = (carousel, currentSlide, targetSlide) => {
    carousel.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('active_slide');
    targetSlide.classList.add('active_slide');
}

//when I click left, move slides to the left
prevButton.addEventListener('click', event => {
    const currentSlide = carousel.querySelector('.active_slide');
    const prevSlide = currentSlide.previousElementSibling;
    
    moveToSlide(carousel,currentSlide, prevSlide);

})
//when I click right, move slides to the right
nextButton.addEventListener('click', event => {
    const currentSlide = carousel.querySelector('.active_slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(carousel, currentSlide, nextSlide);
})
//when i click the indicator, move to that slide