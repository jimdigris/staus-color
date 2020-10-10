'use strict';

(function () {
	const MAIN_TABLE = document.querySelector('.main-table');
	const STATUS_ELEMENTS = Array.from(MAIN_TABLE.querySelectorAll('.status'));
	
	STATUS_ELEMENTS.forEach(function (status) {	
		let color;	
		
		switch (status.textContent) {
			  case 'Выпуск DST':
				color = '#FF9900';
				break;
				
			  case 'Отправлен DST':
				color = '#00B050';
				break;

			  case 'Не согласовано':
				color = '#FF0000';
				break;
				
			  case 'Отправлен исходящий':
				color = '#20D038';
				break;	

			  case 'Нет сертификата':
				color = '#FFE259';
				break;
		}
		
		status.style.color = color;
	});
})();