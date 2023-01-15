$(document).ready(function () {
  // $(".slider").slick({
  //   arrows: false,
  //   dots: true,
  //   slidesToShow:3,
  //   appendDots: ".slider1Dots",
  // });
  $(".slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    appendDots: ".slider2Dots",
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.nav-trigger').click(function(){
    $('.site-content-wrapper').toggleClass('scaled');
 })
});


// $('.nav-trigger').click(function()
// {
//   $(".site-content-wrapper").toggleClass('.scaled');
// });