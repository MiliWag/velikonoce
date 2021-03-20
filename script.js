'use strict';

//Vyberte si nějakou budoucí událost, jejíž datum je pevně určeno. Za pomoci knihovny dayjs vytvořte stránku zobrazující velké ANO nebo NE případně krátkou zprávu podle toho, zda už událost nastala či nikoliv.

const velikonoce = dayjs('2021-04-05');

const message = document.querySelector('#msg');

if (velikonoce === true) {
  message.textContent = 'ANO';
  message.className += '.msg--valid';
} else {
  message.textContent = 'NE';
  message.className += '.msg--invalid';
}
