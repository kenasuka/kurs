$(function() {
  var marqueeClass = ".marquee__content";
  var $tickerText = $(marqueeClass).children();
  $tickerText.clone().appendTo(marqueeClass);
  $tickerText.clone().appendTo(marqueeClass);
});