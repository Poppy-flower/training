(function(){

	var Tabview = function(options){
		var settings = utils.extend({
			width: 300,
			height: 200
		}, options);

		var tabview = utils.$(settings.el);
		tabview.style.width = parseInt(settings.width) + 'px';
		tabview.style.height = parseInt(settings.height) + 'px';
	};

	window.Tabview = Tabview;
})();