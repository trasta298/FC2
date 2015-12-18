function destroyBlock(x,y,z,side){
	var blockId=getTile(x,y,z);
	if(blockId==woodengine.id) MOB_BLOCK.removeMobBlock(x,y,z);
	if(Ee.indexOf(getTile(x,y,z))!=-1)  setgrid = true;
	if(blockId==191){
		preventDefault();
		Level.destroyBlock(x,y,z,false);
		Level.dropItem(x,y,z,0.1,503,1,0);
	}
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="destroyBlock") addon[key][value](x,y,z,side);
			}
		}
	}catch(e){}
}