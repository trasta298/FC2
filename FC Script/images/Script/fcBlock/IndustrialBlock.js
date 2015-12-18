function IndustrialBlock(){
	this.id = 204;
	this.name = "Industrial Block";
	this.textures = [["electrolysis", 1]];
	this.materialSourceIdSrc = 2;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 0.3;
	this.layer = 3;
	this.opa = 0.1;
	fcBlock.apply(this,arguments);
}

IndustrialBlock.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:IndustrialBlock
	}
});

var industrialBlock = new IndustrialBlock();
fcaddItemlist.push(industrialBlock);