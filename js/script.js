var btn = document.getElementById("m_menu");
var btnm = document.getElementById("m_memu_text");
	btn.onclick= function() {
		btnm.classList.toggle("manu-active");
					btn.classList.toggle("buttion-active");
			}


			var wow = new WOW(
				{
					boxClass:     'facts-container-counter-il-anim',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
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