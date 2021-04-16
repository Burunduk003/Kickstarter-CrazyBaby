'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const openButton = document.getElementById('menu-toggler');
  const advantagesNext = document.querySelector('.carousel__right');
  const advantagesPrevious = document.querySelector('.carousel__left');
  const advantagesSlidesField = document.querySelector('#advantages');
  const advantagesCurrent = document.querySelector('#current');
  const techNext = document.querySelector('#right');
  const techPrevious = document.querySelector('#left');
  const techCurrent = document.querySelector('#current-tech');
  const techSlidesField = document.querySelector('#technology');
  const featuresNext = document.querySelector('#next');
  const featuresPrevious = document.querySelector('#prev');
  const featuresCurrent = document.querySelector('#current-featuresh');
  const featuresSlidesField = document.querySelector('#features');

  openButton.addEventListener('click', () => {
    menu.classList.toggle('menu--move');
    openButton.classList.toggle('header__mobile-menu-link--close');
  }
  );

  function nextSlide(right, left, slide, slidesField, slidesCount) {
    let move = 0;
    let slideIndex = 1;

    right.addEventListener('click', () => {
      const width = slidesField.clientWidth;

      if (slideIndex < slidesCount) {
        move += width;
        slideIndex++;
      } else if (slideIndex === slidesCount) {
        move = 0;
        slideIndex = 1;
      }

      if (slideIndex === slidesCount) {
        right.style.borderBottomColor = '#BDBDBD';
        right.style.borderRightColor = '#BDBDBD';
        left.style.borderTopColor = '#333';
        left.style.borderLeftColor = '#333';
      } else if (slideIndex === 1) {
        left.style.borderTopColor = '#BDBDBD';
        left.style.borderLeftColor = '#BDBDBD';
        right.style.borderBottomColor = '#333';
        right.style.borderRightColor = '#333';
      } else {
        left.style.borderTopColor = '#333';
        left.style.borderLeftColor = '#333';
        right.style.borderBottomColor = '#333';
        right.style.borderRightColor = '#333';
      }

      slide.textContent = `0${slideIndex}`;
      slidesField.style.transform = `translateX(-${move}px)`;
    });
  }

  nextSlide(advantagesNext, advantagesPrevious,
    advantagesCurrent, advantagesSlidesField, 4);
  nextSlide(techNext, techPrevious, techCurrent, techSlidesField, 2);

  nextSlide(featuresNext, featuresPrevious,

    featuresCurrent, featuresSlidesField, 3);

  function previousSlide(left, right, slide, slidesField, slidesCount) {
    let move = 0;
    let slideIndex = 1;

    left.addEventListener('click', () => {
      const width = slidesField.clientWidth;

      if (slideIndex === 1) {
        move = width * (slidesCount - 1);
        slideIndex = slidesCount;
      } else if (slideIndex <= slidesCount) {
        move -= width;
        slideIndex--;
      }

      if (slideIndex === slidesCount) {
        right.style.borderBottomColor = '#BDBDBD';
        right.style.borderRightColor = '#BDBDBD';
        left.style.borderTopColor = '#333';
        left.style.borderLeftColor = '#333';
      } else if (slideIndex === 1) {
        left.style.borderTopColor = '#BDBDBD';
        left.style.borderLeftColor = '#BDBDBD';
        right.style.borderBottomColor = '#333';
        right.style.borderRightColor = '#333';
      } else {
        left.style.borderTopColor = '#333';
        left.style.borderLeftColor = '#333';
        right.style.borderBottomColor = '#333';
        right.style.borderRightColor = '#333';
      }

      slide.textContent = `0${slideIndex}`;
      slidesField.style.transform = `translateX(-${move}px)`;
    });
  }

  previousSlide(advantagesPrevious, advantagesNext,
    advantagesCurrent, advantagesSlidesField, 4);

  previousSlide(techPrevious, techNext,

    techCurrent, techSlidesField, 2);

  previousSlide(featuresPrevious, featuresNext,
    featuresCurrent, featuresSlidesField, 3);
});
