$(".destination-slider").slick({
  prevArrow: "button[data-prev-destinations]",
  nextArrow: "button[data-next-destinations]",
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  responsive: [
    {
      breakpoint: 1152,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 4,
      },
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".offers-slider").slick({
  prevArrow: "button[data-prev-destinations]",
  nextArrow: "button[data-next-destinations]",
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  responsive: [
    {
      breakpoint: 1152,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 4,
      },
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
