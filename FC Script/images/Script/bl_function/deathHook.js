function deathHook(attacker,victim){
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="deathHook") addon[key][value](attacker,victim);
			}
		}
	}catch(e){}
}