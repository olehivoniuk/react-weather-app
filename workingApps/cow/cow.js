;(function() {
	let str = 'переменная модуля';
	
	function func() {
		alert('функция модуля');
	}
})();

// Тут переменные и функции модуля недоступны:
alert(str);
alert(func);
