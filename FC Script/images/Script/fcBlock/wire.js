function Wire(){
	this.id = 177;
	this.name = "Wire";
	this.textures = [["el_wire",0]];
	this.materialSourceIdSrc = 6;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 0.3;
	this.layer = 3;
	this.opa = 0.1;
	//this.Shape = [[1/3,1/3,1/3,2/3,2/3,2/3,0],[-1/3,1/3,1/3,4/3,2/3,2/3,1],[1/3,-1/3,1/3,2/3,4/3,2/3,2],[1/3,1/3,-1/3,2/3,2/3,4/3,3]];
	fcBlock.apply(this,arguments);
}

Wire.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:Wire
	}
});

var wire = new Wire();
fcaddItemlist.push(wire);