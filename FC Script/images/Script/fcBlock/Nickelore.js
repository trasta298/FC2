function Nickelore(){
	this.id = 179;
	this.name = "Nickel Ore";
	this.textures = [["Nickelore",0]];
	this.materialSourceIdSrc = 0;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 5.0;
	this.layer = 3;
	this.opa = 0.1;
	fcBlock.apply(this,arguments);
}

Nickelore.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:Nickelore
	}
});

var nickelore = new Nickelore();
fcaddItemlist.push(nickelore);