// Если на проекте jQuery
$(document).ready(function () {
  // code
  $('.main-carousel').slick({
    dots: false,
    arrows: false,
  });
  $('.reviews__carousel').slick({
    dots: true,
    arrows: true,
  });
  $('.gallery__carousel').slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
