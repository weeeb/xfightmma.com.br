$( document ).ready(function() {
  $('.fight').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: '10px',
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('#tickets').on('click', function(){
    window.open('http://goo.gl/cwYKNW')
  });
});
