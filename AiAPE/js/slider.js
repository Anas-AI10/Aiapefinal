const images = document.querySelectorAll('.slider-stock-img');
const imgWrapper = document.querySelector('.img-wrapper');
const imageCount = images.length;
const imageWidth = 400 / imageCount;

let currentIndex = 0;

function slideImages() {
    currentIndex = (currentIndex + 1) % imageCount;
    const offset = -currentIndex * imageWidth;
    imgWrapper.style.transform = `translateX(${offset}%)`;
}

setInterval(slideImages, 3500);