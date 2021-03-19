"use strict";
const slider = document.querySelector(".js-slider");
const btn = document.querySelector(".js-btn");
const toggle = document.querySelector(".js-toggle");

// Making slider work
slider.oninput = function () {
  const pageViews = document.querySelector(".js-pageViews");
  const price = document.querySelector(".js-price");

  function printingPrice(amount) {
    if (toggle.checked) {
      price.textContent = `$${amount - amount * 0.25}`;
    } else {
      price.textContent = `$${amount}`;
    }
  }

  if (Number(this.value) === 20) {
    pageViews.textContent = "10k";
    printingPrice(8);
  } else if (Number(this.value) === 40) {
    pageViews.textContent = "50k";
    printingPrice(12);
  } else if (Number(this.value) === 60) {
    pageViews.textContent = "100k";
    printingPrice(16);
  } else if (Number(this.value) === 80) {
    pageViews.textContent = "500k";
    printingPrice(24);
  } else if (Number(this.value) === 100) {
    pageViews.textContent = "1M";
    printingPrice(36);
  }
};

// Refreshing page on button click
function refreshPage() {
  window.location.reload();
}

// Event handler
btn.addEventListener("click", refreshPage);
toggle.addEventListener("click", function () {
  slider.oninput();
});
