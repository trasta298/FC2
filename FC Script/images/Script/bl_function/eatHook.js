function eatHook(hearts,notHearts){
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="eatHook") addon[key][value](hearts,notHearts);
			}
		}
	}catch(e){}
}