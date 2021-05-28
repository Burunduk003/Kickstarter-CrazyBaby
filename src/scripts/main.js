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
  const playButton = document.querySelector('#play');
  const youtube = document.querySelector('#youtube');
  const video = document.querySelector('#video');

  playButton.addEventListener('click', () => {
    youtube.classList.toggle('video__youtube--hide');
    video.classList.toggle('video--hide');
    youtube.src += '&autoplay=1';
  }
  );

  openButton.addEventListener('click', () => {
    menu.classList.toggle('menu--move');
    openButton.classList.toggle('header__mobile-menu-link--close');
  }
  );

  function moveSlides(right, left, slide, slidesField, slidesCount) {
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

  moveSlides(advantagesNext, advantagesPrevious,
    advantagesCurrent, advantagesSlidesField, 4);
  moveSlides(techNext, techPrevious, techCurrent, techSlidesField, 2);

  moveSlides(featuresNext, featuresPrevious,

    featuresCurrent, featuresSlidesField, 3);
});
