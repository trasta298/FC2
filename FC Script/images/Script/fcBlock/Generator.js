function Generator(){
	this.id = 192;
	this.name = "Generator";
	this.textures = [["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["generator", 0],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["generator", 0],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["generator", 0],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["generator", 0]];
	this.materialSourceIdSrc = 2;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 0.3;
	this.layer = 3;
	this.opa = 0.1;
	fcBlock.apply(this,arguments);
}

Generator.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:Generator
	}
});

var generator = new Generator();
fcaddItemlist.push(generator);