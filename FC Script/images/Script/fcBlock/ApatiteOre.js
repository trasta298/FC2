function Apatiteore(){
	this.id = 191;
	this.name = "Apatite Ore";
	this.textures = [["Apatiteore",0]];
	this.materialSourceIdSrc = 0;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 4.0;
	this.layer = 3;
	this.opa = 0.1;
	fcBlock.apply(this,arguments);
}

Apatiteore.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:Apatiteore
	}
});

var apatiteore = new Apatiteore();
fcaddItemlist.push(apatiteore);