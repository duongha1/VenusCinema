$(document).ready(function () {
  $(window).resize(function (e) {
    let width = $(document).width();
    console.log(width);
    if (width < 1200) {
      $(".logo").css("display", "none");
      $(".mobile-logo").css("display", "block");
    } else {
      $(".logo").css("display", "block");
      $(".mobile-logo").css("display", "none");
    }
    if (width < 768) {
      $(".navBtn").css("display", "none");
    } else {
      $(".navBtn").css("display", "block");
    }
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
