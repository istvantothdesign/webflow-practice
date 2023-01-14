// import Splide from "@splidejs/splide";

new Splide(".splide", {
  //   type: "loop",
  //   type: "fade",
  type: "slide",
  perPage: 1,
  flickPower: 100,
  arrows: false,
  pagination: false,
  wheel: true,
  wheelMinThreshold: 12,
  releaseWheel: true,
  //   wheelSleep: 500,
}).mount();
