'use strict';

const menu = document.querySelector('.menu');
const openButton = document.getElementById('menu-toggler');
const advantagesNext = document.querySelector('.carousel__right');
const advantagesPrevious = document.querySelector('.carousel__left');
const advantagesSlidesField = document.querySelector('#advantages');
const advantagesWidth = window.getComputedStyle(advantagesSlidesField).width;
const advantagesCurrent = document.querySelector('#current');
const techNext = document.querySelector('#right');
const techPrevious = document.querySelector('#left');
const techCurrent = document.querySelector('#current-tech');
const techSlidesField = document.querySelector('#technology');
const techWidth = window.getComputedStyle(techSlidesField).width;
const featuresNext = document.querySelector('#next');
const featuresPrevious = document.querySelector('#prev');
const featuresCurrent = document.querySelector('#current-featuresh');
const featuresSlidesField = document.querySelector('#features');
const featuresWidth = window.getComputedStyle(featuresSlidesField).width;

let move = 0;
let slideIndex = 1;

function current(slide) {
  slide.textContent = `0${slideIndex}`;
}

current(advantagesCurrent);
current(techCurrent);
current(featuresCurrent);

openButton.addEventListener('click', () => {
  menu.classList.toggle('menu--move');
  openButton.classList.toggle('header__mobile-menu-link--close');
}
);

function deleteNotDigits(str) {
  return Math.round(str.replace(/px/g, ''));
}

function nextSlide(right, width, slide, slidesField, slidesCount) {
  right.addEventListener('click', () => {
    if (move === deleteNotDigits(width) * (slidesCount - 1)) {
      move = 0;
      slideIndex = 1;
    } else {
      move += deleteNotDigits(width);
      slideIndex++;
    }
    current(slide);
    slidesField.style.transform = `translateX(-${move}px)`;
  });
}

nextSlide(advantagesNext, advantagesWidth,
  advantagesCurrent, advantagesSlidesField, 4);
nextSlide(techNext, techWidth, techCurrent, techSlidesField, 2);
nextSlide(featuresNext, featuresWidth, featuresCurrent, featuresSlidesField, 3);

function previousSlide(left, width, slide, slidesField, slidesCount) {
  left.addEventListener('click', () => {
    if (move === 0) {
      move = deleteNotDigits(width) * (slidesCount - 1);
      slideIndex = slidesCount;
    } else {
      move -= deleteNotDigits(width);
      slideIndex--;
    }
    current(slide);
    slidesField.style.transform = `translateX(-${move}px)`;
  });
}

previousSlide(advantagesPrevious, advantagesWidth,
  advantagesCurrent, advantagesSlidesField, 4);
previousSlide(techPrevious, techWidth, techCurrent, techSlidesField, 2);

previousSlide(featuresPrevious, featuresWidth,
  featuresCurrent, featuresSlidesField, 3);
