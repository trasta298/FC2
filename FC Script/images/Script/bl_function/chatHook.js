function chatHook(str){
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="chatHook") addon[key][value](str);
			}
		}
	}catch(e){}
}