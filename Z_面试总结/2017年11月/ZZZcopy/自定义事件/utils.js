(function(){
	return window.utils = {
		$: function(selector){
			return document.querySelector(selector);
		},
		extend: function(target, obj){
	        for(var p in obj){
	            target[p] = obj[p];
	        }
	        return target;
	    }
	};
})();