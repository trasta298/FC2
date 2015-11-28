function chatReceiveHook(sender,str){
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="chatReceiveHook") addon[key][value](sender,str);
			}
		}
	}catch(e){}
}