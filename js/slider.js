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
  prevArrow: "button[data-prev-offers]",
  nextArrow: "button[data-next-offers]",
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  responsive: [
    {
      breakpoint: 1152,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".galery-slider").slick({
  prevArrow: "button[data-prev-galery]",
  nextArrow: "button[data-next-galery]",
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: true,

  responsive: [
    {
      breakpoint: 1152,
      settings: {
        vertical: true,
      },
    },
  ],
});

$(".expirience-slider").slick({
  prevArrow: "button[data-prev-exp]",
  nextArrow: "button[data-next-exp]",
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,

  responsive: [
    {
      breakpoint: 1152,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
