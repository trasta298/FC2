var EL = (function(){
	
	function _init(){
		for(key in FC){
			if(FC[key].el!=null) FC[key].el=0;
		}
	}
	
	function _send(x,y,z,s,p){
		
	}
	
	return {
		init : _init,
		send : _send
	};
})();