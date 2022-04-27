const textBox = document.querySelector(".service-info__text");
const textOpacity = document.querySelector(".opacity-text");
const linkRead = document.querySelector(".continue-container__title");

const activeLink = linkRead.addEventListener('click', function() {
  textOpacity.classList.toggle("opacity-text__active");
  textBox.classList.toggle("service-info__text_active");
})
