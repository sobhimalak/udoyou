// nav bar global view
$.get("navbar.html", function (data) {
    $("#nav-placeholder").replaceWith(data);
});
// Footer global view
$.get("footer.html", function (data) {
  $("#footer-placeholder").replaceWith(data);
});

//scroll down button
$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'fast');
      return false;
    });
  });