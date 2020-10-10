'use strict';

(function () {
	const MAIN_TABLE = document.querySelector('.main-table');
	const STATUS_ELEMENTS = Array.from(MAIN_TABLE.querySelectorAll('.status'));
	
	STATUS_ELEMENTS.forEach(function (status) {	
		let circleOne = status.querySelector('.circle-one');
		let circleTwo = status.querySelector('.circle-two');
		let text = status.querySelector('.text');
		let styleOne, styleTwo;
		
		switch (text.textContent) {
			  case 'Выпуск DST':
				styleOne = 'fa-circle';
				styleTwo = 'fa-circle-sec';
				break;
				
			  case 'Отправлен DST':
				styleOne = 'fa-circle-2';
				styleTwo = 'fa-circle-sec-2';
				break;

			  case 'Не согласовано':
				styleOne = 'fa-circle-3';
				styleTwo = 'fa-circle-sec-3';
				break;
				
			  case 'Отправлен исходящий':
				styleOne = 'fa-circle-4';
				styleTwo = 'fa-circle-sec-4';
				break;	

			  case 'Нет сертификата':
				styleOne = 'fa-circle-5';
				styleTwo = 'fa-circle-sec-5';
				break;
		}
		circleOne.classList.add(styleOne);
		circleTwo.classList.add(styleTwo);
	});
})();