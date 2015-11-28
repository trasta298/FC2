function Solar(){
	this.id = 176;
	this.name = "Solar";
	this.textures = [["solar", 1],["solar", 0],["solar", 1],["solar", 1],["solar", 1],["solar", 1]];
	this.materialSourceIdSrc = 2;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 0.3;
	this.layer = 3;
	this.opa = 0.1;
	fcBlock.apply(this,arguments);
}

Solar.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:Solar
	}
});

var solar = new Solar();
fcaddItemlist.push(solar);