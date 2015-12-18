function WoodEngine(){
	this.id = 203;
	this.name = "WoodEngine";
	this.textures = [["cauldron_top",0]];
	this.materialSourceIdSrc = 20;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 1.0;
	this.layer = 3;
	this.opa = 0.1;
	this.renderType=15;
	fcBlock.apply(this,arguments);
}

WoodEngine.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:WoodEngine
	}
});

var woodengine = new WoodEngine();
fcaddItemlist.push(woodengine);