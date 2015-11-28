function goldPipe(){
	this.id = 180;
	this.name = "GoldPipe";
	this.textures = [["pipetx",1]];
	this.materialSourceIdSrc = 6;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 0.3;
	this.layer = 3;
	this.opa = 0.1;
	this.colorArray = [0xFFFF00];
	fcBlock.apply(this,arguments);
}

goldPipe.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:goldPipe
	}
});

var goldpipe = new goldPipe();
fcaddItemlist.push(goldpipe);