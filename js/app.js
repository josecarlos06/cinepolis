$(document).ready(function(){
    $('#section__slider').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        loop: true,
        autoplay:true,
        autoplayTimeout:8000,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
    })
})