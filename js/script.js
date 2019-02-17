'use strict';
(function(){ 
	
	// Definujemy funkcję initMap w zakresie globalnym (czyli jako właściwość obiektu window).
  	window.initMap = function() {
		
		// Zapisujemy w zmiennej obiekt zawierający współrzędne geograficzne.
		var uluru = {lat: -25.363, lng: 131.044};
		
		// W zmiennej map zapisujemy nową instancję obiektu Map. 
		var map = new google.maps.Map(document.getElementById('map'), {
			// Podajemy opcje mapy, np. zoom i punkt wycentrowania mapy.
			zoom: 4,
			center: uluru
		});
		
		// Definiujemy marker jako nową instancję obiektu Marker.
		var marker = new google.maps.Marker({
			// I podajemy opcje tego markera, np. na której mapie ma być dodany oraz jakie są jego współrzędne. 
			position: uluru,
			map: map
		}); 
	}	
	 
})();  

/*
UWAGA: Normalnie nie ma potrzeby wywołania funkcji initMap, tak jak robimy to poniżej. Musieliśmy jednak zmodyfikować sposób wczytywania skryptu Google Maps API ze względu na działanie CodePena. W Twoim kodzie nie powinno być tego wywołania. 
*/

initMap();


var templateSlide = document.getElementById('templateCarousel').innerHTML;
var carousel = document.querySelector('.main-carousel');

Mustache.parse(templateSlide);
var renderedTemplates = '';

for (var i = 0; i < data.length; i++) {
  renderedTemplates += Mustache.render(templateSlide, data[i]);
}
carousel.innerHTML = renderedTemplates;

// flickity
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  cellAlign: 'center',
  contain: true,
  hash: true,
  pageDots: false
});

// button reset
var btnRestart = document.querySelector('.btn-restart');
btnRestart.addEventListener('click', function () {
  flkty.select(0);
});

// scroll
var progressBar = document.querySelector('.progress-bar');

flkty.on('scroll', function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});