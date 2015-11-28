function Quartzore(){
	this.id = 189;
	this.name = "Quartz Ore";
	this.textures = [["Quartzore",0]];
	this.materialSourceIdSrc = 0;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 7.0;
	this.layer = 3;
	this.opa = 0.1;
	fcBlock.apply(this,arguments);
}

Quartzore.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:Quartzore
	}
});

var quartzore = new Quartzore();
fcaddItemlist.push(quartzore);