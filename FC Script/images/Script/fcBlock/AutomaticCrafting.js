function AutomaticCrafting(){
	this.id = 188;
	this.name = "AutomaticCrafting";
	this.textures = [["iron_block", 0],["auto", 0],["iron_block", 0],["iron_block", 0],["iron_block", 0],["iron_block", 0]];
	this.materialSourceIdSrc = 2;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 0.3;
	this.layer = 3;
	this.opa = 0.1;
	fcBlock.apply(this,arguments);
}

AutomaticCrafting.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:AutomaticCrafting
	}
});

var automaticCrafting = new AutomaticCrafting();
fcaddItemlist.push(automaticCrafting);