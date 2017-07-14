var _hmt = _hmt || [];
(function() {
	var handler = function() {
		document.removeEventListener("DOMContentLoaded", handler, false);
		window.removeEventListener("load", handler, false);
		//移除loading
		var $loading = document.getElementById('app-loading');
		$loading && document.body.removeChild($loading);
		//百度统计
		var hm = document.createElement("script");
		hm.src = "//hm.baidu.com/hm.js?78f3092ce7922d42045bc1f81f5e82b4";
		//var s = document.getElementsByTagName("script")[0];
		//s.parentNode.insertBefore(hm, s);
		document.body.appendChild(hm);
	};
	document.addEventListener("DOMContentLoaded", handler, false);
	window.addEventListener("load", handler, false);
})();