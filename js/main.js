"use strict";
const slider = document.querySelector(".js-slider");

slider.oninput = function () {
  const pageViews = document.querySelector(".js-pageViews");
  const price = document.querySelector(".js-price");

  if (Number(this.value) === 20) {
    pageViews.textContent = "10k";
    price.textContent = "$8";
  } else if (Number(this.value) === 40) {
    pageViews.textContent = "50k";
    price.textContent = "$12";
  } else if (Number(this.value) === 60) {
    pageViews.textContent = "100k";
    price.textContent = "$16";
  } else if (Number(this.value) === 80) {
    pageViews.textContent = "500k";
    price.textContent = "$24";
  } else if (Number(this.value) === 100) {
    pageViews.textContent = "1M";
    price.textContent = "$36";
  }
};
