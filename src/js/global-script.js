// Если на проекте jQuery
$(document).ready(function () {
  // code
  // star-rating
  $(".product-rating").starRating({
    readOnly: true,
    starSize: 22,
    useGradient: false,
    starShape: 	'rounded',
    activeColor: '#FFB800',
    emptyColor: '#E9E3E1',
  });
  // $(".product-rating").starRating({
  //   starSize: 25,
  //   setReadOnly: true,
  //   callback: function (currentRating, $el) {
  //     // make a server call here
  //   }
  // });
  // range-slider
  $(function () {

    var $range = $(".js-range-slider"),
      $inputFrom = $(".js-input-from"),
      $inputTo = $(".js-input-to"),
      instance,
      min = 0,
      max = 10000,
      from = 0,
      to = 0;

    $range.ionRangeSlider({
      type: "double",
      skin: "round",
      min: min,
      max: max,
      from: 0,
      to: 10000,
      hide_min_max: true,
      hide_from_to: true,

      onStart: updateInputs,
      onChange: updateInputs,
      step: 100,
      prettify_enabled: true,
      prettify_separator: ".",
      values_separator: " - ",
      force_edges: true
    });

    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
      from = data.from;
      to = data.to;

      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
      var val = $(this).prop("value");

      // validate
      if (val < min) {
        val = min;
      } else if (val > to) {
        val = to;
      }

      instance.update({
        from: val
      });
    });

    $inputTo.on("input", function () {
      var val = $(this).prop("value");

      // validate
      if (val < from) {
        val = from;
      } else if (val > max) {
        val = max;
      }

      instance.update({
        to: val
      });
    });

  });
  // end range-slider
  // $(function() {
  //   $('.sort-item').styler();
  // });

  $('.product-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    draggable: false,
    asNavFor: '.product-carousel-nav'
  });
  $('.product-carousel-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.product-carousel',
    dots: false,
    arrows: false,
    centerMode: true,
    draggable: false,
    focusOnSelect: true
  });

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
