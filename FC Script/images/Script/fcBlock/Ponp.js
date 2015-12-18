function Ponp(){
	this.id = 202;
	this.name = "Ponp";
	this.textures = [["pipetx",0]];
	this.materialSourceIdSrc = 6;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 0.3;
	this.layer = 3;
	this.opa = 0.1;
	fcBlock.apply(this,arguments);
}

Ponp.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:Ponp
	}
});

var ponp = new Ponp();
fcaddItemlist.push(ponp);