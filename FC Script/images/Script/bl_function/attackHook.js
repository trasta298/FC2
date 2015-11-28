function attackHook(attacker,victim){
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="attackHook") addon[key][value](attacker,victim);
			}
		}
	}catch(e){}
}