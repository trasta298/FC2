function fcBlock(){
	this.add = function(){
		Block.defineBlock(this.id,this.name,this.textures,this.materialSourceIdSrc,this.opaqueSrc,this.renderTypeSrc);
		Block.setDestroyTime(this.id,this.time);
		if(this.renderType!=null) Block.setRenderType(this.id,this.renderType);
		if(this.resist!=null) Block.setExplosionResistance(this.id,this.resist);
		if(this.Shape!=null){
			for(var i=0;i<this.Shape.length;i++) Block.setShape(this.id,this.Shape[i][0],this.Shape[i][1],this.Shape[i][2],this.Shape[i][3],this.Shape[i][4],this.Shape[i][5],this.Shape[i][6]);
		}
		if(this.lightLevel!=null) Block.setLightLevel(this.id,this.lightLevel);
		if(this.colorArray!=null) Block.setColor(this.id,this.colorArray);
		Item.setCategory(this.id, ItemCategory.TOOL);
		Block.setRenderLayer(this.id,this.layer);
		Player.addItemCreativeInv(this.id,1,0);
		Block.setLightOpacity(this.id,this.opa);
	}
}