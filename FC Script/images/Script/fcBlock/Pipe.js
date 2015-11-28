function Pipe(){
	this.id = 182;
	this.name = "Pipe";
	this.textures = [["pipetx",1]];
	this.materialSourceIdSrc = 6;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 0.3;
	this.layer = 3;
	this.opa = 0.1;
	this.colorArray = [0xFFA500];
	fcBlock.apply(this,arguments);
}

Pipe.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:Pipe
	}
});

var pipe = new Pipe();
fcaddItemlist.push(pipe);