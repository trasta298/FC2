function entityRemovedHook(entity){
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="entityRemovedHook") addon[key][value](entity);
			}
		}
	}catch(e){}
}