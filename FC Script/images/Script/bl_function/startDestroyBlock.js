function startDestroyBlock(x,y,z,side){
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="useItem") addon[key][value](x,y,z,side);
			}
		}
	}catch(e){}
}