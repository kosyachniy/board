var CanvasDesigner = require('./canvas/canvas-designer-widget.js');
// const designer = new window.CanvasDesigner();
const designer = new CanvasDesigner();

// установка параметров
designer.setSelected('pencil');
designer.setTools({
	pencil: true,
	eraser: true,
	undo: true,
});
designer.icons = {
	pencil: '/img/pencil.png',
	eraser: '/img/eraser.png',
	undo: '/img/undo.png',
};

// установка файлов
designer.widgetHtmlURL = '/canvas/widget.html';
designer.widgetJsURL = '/canvas/widget.min.js';

module.exports = designer;

// // отслеживание изменений
// designer.addSyncListener((data) => {
// 	console.log('!board_send', data);
// 	// отправка изменений
// 	socketIo.emit('board_send', {
// 		space: path.room,
// 		data,
// 	});
// });

// // ожидание изменений
// socketIo.on('board_get', (mes) => {
// 	console.log('!board_get', mes);
// 	// если нужная комната
// 	if (mes.space === path.room) {
// 		// внедрение изменений
// 		designer.syncData(mes.data);
// 	}
// });

// // прикрепление к дом дереву
// const boardBlock = document.getElementById('board');
// designer.appendTo(boardBlock);

// // включение синхронизации
// setTimeout(() => {
// 	designer.sync();
// }, 3000);