const myCarouselElement = document.querySelector('#myCarousel')
// console.log("in js")
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
