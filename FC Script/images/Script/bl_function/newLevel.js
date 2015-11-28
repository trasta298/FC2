function newLevel(hasLevel,isRemote){
	var bool = true;
	if(bool){
		setgrid = true;
		clientMessage("§6[BUILD] FC2 v0.0");
		var i = 0;
		for(key in FC) i++;
		clientMessage("Load Machine: "+i);
	}
	addrecipe();
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="newLevel") addon[key][value](hasLevel,isRemote);
			}
		}
	}catch(e){}
}