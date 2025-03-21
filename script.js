$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //  toggle menu script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

//slide up script
$(".scroll-up-btn").click(function () {
  $("html").animate({ scrollTop: 0 });
});

//  typing animation script
var typed = new Typed(".typing", {
  strings: ["Software Engineer", "Full Stack Developer", "Photographer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing-2", {
  strings: ["SE Undergraduate", "Full Stack Dev", "Photographer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
