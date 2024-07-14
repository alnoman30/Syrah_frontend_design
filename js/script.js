$(function () {
  //ACTIVE NAVIGATION (MENU)
  $(".nav_menu_opt").click(function () {
    $(".nav_menu_opt").removeClass("nav_menu_active");
    $(this).addClass("nav_menu_active");
  });

  //FOOTER MENU
  $(".foot_menu_opt").click(function () {
    $(".foot_menu_opt").removeClass("foot_menu_active");
    $(this).addClass("foot_menu_active");
  });

  //STICKY NAVIGATION (MENU)
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".navbar").removeClass("sticky");
    } else {
      $(".navbar").addClass("sticky");
    }
  });

  // UPDATE SLIDER
  $(".update_right").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: ".update_left_arrow",
    nextArrow: ".update_right_arrow",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /////////////////////////////////////////////////////////////////////////////////////////////

  // TIMER FOR THE DEAL
  const countdown = () => {
    const countDate = new Date("January 01, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //EXPLAIN HOW TIME WORKS
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //CALCULATE THE TIME
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    //TEST IN CONSOLE [console.log(textDay, textHour, textMinute, textSecond);]

    //EXECUTE THE TIME
    document.querySelector(".days").innerText = textDay;
    document.querySelector(".hours").innerText = textHour;
    document.querySelector(".minutes").innerText = textMinute;
    document.querySelector(".seconds").innerText = textSecond;
  };
  setInterval(countdown, 1000);

  /////////////////////////////////////////////////////////////////////////////////////////////

  // //ACTIVE FOOTER MENU
  // $(".foot_menu_opt").click(function () {
  //   $(".foot_menu_opt").removeClass("foot_menu_active");
  //   $(this).addClass("foot_menu_active");
  // });

  // //SCROLL TO TOP BUTTON
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".taptotop").fadeIn(200);
    } else {
      $(".taptotop").fadeOut(200);
    }
  });

  $(".taptotop").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
  });
});
