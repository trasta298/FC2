function Tinore(){
	this.id = 201;
	this.name = "Tin Ore";
	this.textures = [["Tinore",0]];
	this.materialSourceIdSrc = 0;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 2.0;
	this.layer = 3;
	this.opa = 0.1;
	fcBlock.apply(this,arguments);
}

Tinore.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:Tinore
	}
});

var tinore = new Tinore();
fcaddItemlist.push(tinore);