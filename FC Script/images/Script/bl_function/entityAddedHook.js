function entityAddedHook(entity){
	var d=Player.getDimension();
	if(nowDid!=d) godid=1;
	if(Entity.getEntityTypeId(entity)==64){
		if(Entity.getItemEntityId(entity)==191) Entity.remove(entity);
		if(nowDid!=d){
			var ex=Math.floor(Entity.getX(entity));
			var ey=Math.floor(Entity.getY(entity));
			var ez=Math.floor(Entity.getZ(entity));
			var id =getTile(ex,ey,ez);
			if(pfc.indexOf(id)>-1){
				Entity.remove(entity);
			}
		}
	}
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="entityAddedHook") addon[key][value](x,y,z,i,b,s,iD,bD);
			}
		}
	}catch(e){}
}