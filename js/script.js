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
});
