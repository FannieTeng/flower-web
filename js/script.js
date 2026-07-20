document.addEventListener("DOMContentLoaded", () => {
  const carouselElement = document.querySelector("#heroCarousel");

  if (carouselElement && window.bootstrap) {
    new bootstrap.Carousel(carouselElement, {
      interval: 4000,
      ride: "carousel",
      pause: "hover",
      touch: true
    });
  }

  const cartButtons = document.querySelectorAll(".btn-cart");

  cartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      trackAddToCart();
      alert("您已將商品加入購物車");
    });
  });
});
