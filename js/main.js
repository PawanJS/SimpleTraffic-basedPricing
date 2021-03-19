"use strict";
const slider = document.querySelector(".js-slider");
const btn = document.querySelector(".js-btn");
const toggle = document.querySelector(".js-toggle");

// Making slider work
function setBar(value) {
  const fill = document.querySelector(".js-fill");
  fill.style.width = `${value}%`;
}

setBar(50);

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

  function printPageViews(view) {
    pageViews.textContent = `${view}k`;
  }

  if (Number(this.value) === 20) {
    printPageViews(10);
    printingPrice(8);
    setBar(0);
  } else if (Number(this.value) === 40) {
    printPageViews(50);
    printingPrice(12);
    setBar(30);
  } else if (Number(this.value) === 60) {
    printPageViews(100);
    printingPrice(16);
    setBar(50);
  } else if (Number(this.value) === 80) {
    printPageViews(500);
    printingPrice(24);
    setBar(70);
  } else if (Number(this.value) === 100) {
    pageViews.textContent = "1M";
    printingPrice(36);
    setBar(100);
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
