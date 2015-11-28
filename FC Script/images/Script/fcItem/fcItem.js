function fcItem(){
	this.add = function(){
		ModPE.setItem(this.id,this.tex,this.texnum,this.name,this.stack);
		if(this.creInv) Player.addItemCreativeInv(this.id,1,0);
		if(this.maxdmg!=null) Item.setMaxDamage(this.id,this.maxdmg);
		if(this.category!=null) Item.setCategory(this.id,this.category);
		if(this.eq!=null) Item.setHandEquipped(this.id,this.eq);
	}
}