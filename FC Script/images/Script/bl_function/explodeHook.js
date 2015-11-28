function explodeHook(en,x,y,z,power,fire){
	setgrid = true;
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="explodeHook") addon[key][value](en,x,y,z,power,fire);
			}
		}
	}catch(e){}
}