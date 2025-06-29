(function ($) {
  "use strict";

  // Smooth scrolling on navbar link click
  $(".navbar-nav a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      // Smooth scroll to section (500ms)
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 30
      }, 100, 'swing');

      // Active class update
      $('.navbar-nav .active').removeClass('active');
      $(this).addClass('active');

      // Collapse navbar on mobile
      $('.navbar-collapse').collapse('hide');
    }
  });

  // Typed text effect (if used)
  if ($('.header h2').length === 1) {
    const typed_strings = $('.header .typed-text').text();
    new Typed('.header h2', {
      strings: typed_strings.split(', '),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true
    });
  }

  // Portfolio filtering with Isotope
  const portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');
    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

  // Review slider (if used)
  $('.review-slider').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 100, 'swing');
    return false;
  });

})(jQuery);

