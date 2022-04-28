const textBox = document.querySelector(".service-info__text");
const textOpacity = document.querySelector(".opacity-text");
const linkRead = document.querySelector(".continue-container__title");

// containers
const containerLogo = document.querySelector(".swiper-logo-container");
const containerInfo = document.querySelector(".swiper-info-container");

// container buttons
const buttonActiveLogo = document.querySelector(".container-read-logo");
const buttonActiveInfo = document.querySelector(".container-read-info");

buttonActiveLogo.addEventListener("click", function () {
  containerLogo.classList.toggle("swiper-logo-container_active");
});
buttonActiveInfo.addEventListener("click", function () {
  containerInfo.classList.toggle("swiper-info-container_active");
});

const activeLink = linkRead.addEventListener("click", function () {
  textOpacity.classList.toggle("opacity-text__active");
  textBox.classList.toggle("service-info__text_active");
});

