$(function () {
	var selectors = [
		":lt(11)",
		":gt(10)"
	];
	var $tableslide = $(".tableslide").children(selectors[3]).hide().end();
	var state = false;
	setInterval(function () {
		var s = state;
		$tableslide.children(selectors[+!s]).fadeOut().promise().then(function () {
			$tableslide.children(selectors[+s]).fadeIn();
		});
		state = !state;
	}, 5000);
});
