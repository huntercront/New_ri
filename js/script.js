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
var x = window.matchMedia("(max-width: 768px)")
myFunction(x)
x.addListener(myFunction)
function myFunction(x) {
	if (x.matches) {
		var testimonials_section = document.getElementById("testimonials");
	testimonials_section.classList.add("siema");
	const mySiema = new Siema({
		loop: true,
		selector: '.siema',
		duration: 700,
		easing: 'ease-in-out',
		perPage: 1,
		startIndex: 3,
		draggable: true,
		multipleDrag: false,
		threshold: 20,
		rtl: false,
		onInit: () => {},
		onChange: () => {},
	});
	document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
	document.querySelector('.next').addEventListener('click', () => mySiema.next()); 
}
}


var y = window.matchMedia("(max-width: 768px)")
myFunction2(y)
y.addListener(myFunction2)
function myFunction2(y) {
	if (y.matches) {
		var news_section = document.getElementById("news-block");
	news_section.classList.add("siema-news");
	var newSiema = new Siema({
		loop: true,
		selector: '.siema-news',
		duration: 700,
		easing: 'ease-in-out',
		perPage: 2,
		startIndex: 0,
		draggable: true,
		multipleDrag: false,
		threshold: 20,
		rtl: false,
		onInit: () => {},
		onChange: () => {},
	});
	document.querySelector('.prev-news').addEventListener('click', () => newSiema.prev());
	document.querySelector('.next-news').addEventListener('click', () => newSiema.next()); 
}
}


ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.97,
        longitude: 30.31,
        hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19',
            '</div>'
        ]
    },
    {
        latitude: 59.94,
        longitude: 30.25,
        hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
            '</div>'
        ]
    },
    {
        latitude: 59.93,
        longitude: 30.34,
        hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
            '</div>'
        ]
    }
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/sprite.png',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57],
                iconImageClipRect: [[415, 0], [461, 57]]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'img/burger.png',
                size: [100, 100],
                offset: [-50, -50]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}