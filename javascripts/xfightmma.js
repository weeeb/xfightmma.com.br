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

/* Facebook plugin */
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1&appId=158315454324166";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/* Google Analytics */
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-39084153-1']);
  _gaq.push(['_setDomainName', 'xfightmma.com.br']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
