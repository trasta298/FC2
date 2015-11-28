function blockEventHook(x,y,z,type,data){
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="blockEventHook") addon[key][value](x,y,z,type,data);
			}
		}
	}catch(e){}
}