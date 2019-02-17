'use strict';
(function(){ 
	// Zapiszemy sobei w zmiennej odwołanie do elementu z id="infos", w którym będziemy wyświetlać komunikaty po kliknięciu markera. 
	
	var infos = document.getElementById('infos');
	
	// Definiujemy funkcję initMap tak samo jak wcześniej. 
	
  	window.initMap = function() {
		// Zdefiniujemy parę dodatkowych współrzędnych dla dodatkowych markerów. 
		var uluru = {lat: -25.363, lng: 131.044};
		var coords2 = {lat: -25.363, lng: 134.044};
		var coords3 = {lat: -25.363, lng: 137.044};
		
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 4,
			center: uluru
		});
		
		var markerOne = new google.maps.Marker({
			position: uluru,
			map: map
		});
		
		// Po dodaniu markera możemy użyć jego metody addListener:
		
		markerOne.addListener('click', function(){
			// Wewnątrz funcji wpisujemy kod, który ma się wykonać po kliknięciu markera. W tym przykładzie wyświetlimy tekst na stronie. 
			infos.innerHTML = 'You clicked markerOne';
		});		
		
		// Dodajemy jeszcze dwa markery, aby sprawdzić czy na pewno kliknięcie każdego z nich wyświetli inny tekst. 
		
		var markerTwo = new google.maps.Marker({
			position: coords2,
			map: map
		});

		markerTwo.addListener('click', function(){
			infos.innerHTML = 'You clicked markerTwo';
		});		
		
		var markerThree = new google.maps.Marker({
			position: coords3,
			map: map
		});
		
		markerThree.addListener('click', function(){
			infos.innerHTML = 'You clicked markerThree';
		});	
		
		// Oczywiście, w takim przypadku dużo lepiej by było zastosować pętlę do zdefiniowania wielu markerów, niż powtarzać prawie identyczny kod. To jednak będzie już za chwilę częścią Twojego zadania!
		
	}; 
	
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