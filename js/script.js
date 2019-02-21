var btn = document.getElementById("m_menu");
var btnm = document.getElementById("m_memu_text");
	btn.onclick= function() {
		btnm.classList.toggle("manu-active");
					btn.classList.toggle("buttion-active");
			}


			var wow = new WOW(
				{
					boxClass:     'facts-container-counter-il-anim',    // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
					animateClass: 'anim-70',
					animateClass: 'anim-60',
					animateClass: 'anim-50',
					animateClass: 'anim-40',
					animateClass: 'anim-30',
					animateClass: 'anim-20',
					animateClass: 'anim-10',
					animateClass: 'anim-5', // класс для анимации элемента (по умолчанию, animated)
					mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
					live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
					callback:     function(box) {
						// функция срабатывает каждый раз при старте анимации
						// аргумент box — элемент, для которого была запущена анимация
					},
					scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
				}
			);
			wow.init();


var russia_svg = document.getElementById('russia');
var russia_table = document.getElementById('map-show-country-1')
russia_svg.onmouseover = function() {
	russia_table.classList.add("map-show-off-hover");
}
russia_svg.onmouseleave = function() {
	russia_table.classList.remove("map-show-off-hover");
}
var france_svg = document.getElementById('france');
var france_table = document.getElementById('map-show-country-8')
france_svg.onmouseover = function() {
	france_table.classList.add("map-show-off-hover");
}
france_svg.onmouseleave = function() {
	france_table.classList.remove("map-show-off-hover");
}
var japan_svg = document.getElementById('japan');
var japan_table = document.getElementById('map-show-country-7')
japan_svg.onmouseover = function() {
	japan_table.classList.add("map-show-off-hover");
}
japan_svg.onmouseleave = function() {
	japan_table.classList.remove("map-show-off-hover");
}
var usa_svg = document.getElementById('usa');
var usa_table = document.getElementById('map-show-country-3')
usa_svg.onmouseover = function() {
	usa_table.classList.add("map-show-off-hover");
}
usa_svg.onmouseleave = function() {
	usa_table.classList.remove("map-show-off-hover");
}
var kanada_svg = document.getElementById('kanada');
var kanada_table = document.getElementById('map-show-country-4')
kanada_svg.onmouseover = function() {
	kanada_table.classList.add("map-show-off-hover");
}
kanada_svg.onmouseleave = function() {
	kanada_table.classList.remove("map-show-off-hover");
}
var shwedish_svg = document.getElementById('shwedish');
var shwedish_table = document.getElementById('map-show-country-5')
shwedish_svg.onmouseover = function() {
	shwedish_table.classList.add("map-show-off-hover");
}
shwedish_svg.onmouseleave = function() {
	shwedish_table.classList.remove("map-show-off-hover");
}
var germany_svg = document.getElementById('germany');
var germany_table = document.getElementById('map-show-country-6')
germany_svg.onmouseover = function() {
	germany_table.classList.add("map-show-off-hover");
}
germany_svg.onmouseleave = function() {
	germany_table.classList.remove("map-show-off-hover");
}
var england_svg = document.getElementById('england');
var england_table = document.getElementById('map-show-country-10')
england_svg.onmouseover = function() {
	england_table.classList.add("map-show-off-hover");
}
england_svg.onmouseleave = function() {
	england_table.classList.remove("map-show-off-hover");
}
var china_svg = document.getElementById('china');
var china_table = document.getElementById('map-show-country-2')
china_svg.onmouseover = function() {
	china_table.classList.add("map-show-off-hover");
}
china_svg.onmouseleave = function() {
	china_table.classList.remove("map-show-off-hover");
}
var italy_svg = document.getElementById('italy');
var italy_table = document.getElementById('map-show-country-9')
italy_svg.onmouseover = function() {
	italy_table.classList.add("map-show-off-hover");
}
italy_svg.onmouseleave = function() {
	italy_table.classList.remove("map-show-off-hover");
}