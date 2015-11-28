function Marker(){
	this.id = 194;
	this.name = "Marker";
	this.textures = [["el_wire",0]];
	this.materialSourceIdSrc = 6;
	this.opaqueSrc = false;
	this.renderTypeSrc = 0;
	this.time = 0.3;
	this.layer = 3;
	this.opa = 0.1;
	fcBlock.apply(this,arguments);
}

Marker.prototype=Object.create(fcBlock.prototype,{
	constructor:{
		value:Marker
	}
});

var marker = new Marker();
fcaddItemlist.push(marker);