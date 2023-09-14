"use strict";
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}% + 30px)`;
});

const nextSlides = document.querySelectorAll(".btn-next");

let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlides.forEach((nextSlide) => {
  nextSlide.addEventListener("click", function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });
});

const prevSlides = document.querySelectorAll(".btn-prev");

prevSlides.forEach((prevSlide) => {
  prevSlide.addEventListener("click", function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });
});
