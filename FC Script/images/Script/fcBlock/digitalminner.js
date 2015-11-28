function Digitalminner(){
	this.id = 181;
	this.name = "Digitalminner";
	this.textures = [["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 0],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 0],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 0],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 1],["electrolysis", 0]];
	this.materialSourceIdSrc = 2;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 0.3;
	this.layer = 3;
	this.opa = 0.1;
	fcBlock.apply(this,arguments);
}

Digitalminner.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:Digitalminner
	}
});

var digitalminner = new Digitalminner();
fcaddItemlist.push(digitalminner);