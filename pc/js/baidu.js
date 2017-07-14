var _hmt = _hmt || [];
(function() {
	var handler = function() {
		document.removeEventListener("DOMContentLoaded", handler, false);
		window.removeEventListener("load", handler, false);
		//移除loading
		var $loading = document.getElementById('app-loading');
		$loading && document.body.removeChild($loading);
		document.body.appendChild(hm);
	};
	document.addEventListener("DOMContentLoaded", handler, false);
	window.addEventListener("load", handler, false);
})();