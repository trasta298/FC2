function levelEventHook(player,eventType,x,y,z,data){
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="levelEventHook") addon[key][value](player,eventType,x,y,z,data);
			}
		}
	}catch(e){}
}