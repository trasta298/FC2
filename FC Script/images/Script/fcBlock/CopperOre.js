function Copperore(){
	this.id = 190;
	this.name = "Copper Ore";
	this.textures = [["Copperore",0]];
	this.materialSourceIdSrc = 0;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 2.0;
	this.layer = 3;
	this.opa = 0.1;
	fcBlock.apply(this,arguments);
}

Copperore.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:Copperore
	}
});

var copperore = new Copperore();
fcaddItemlist.push(copperore);