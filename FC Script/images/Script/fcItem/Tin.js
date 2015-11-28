function TinIngot(){
	this.id = 502;
	this.name = "Tin Ingot";
	this.tex = "Tin";
	this.texnum = 0;
	this.stack = 64;
	this.creInv = true;
	fcItem.apply(this,arguments);
}

TinIngot.prototype=Object.create(fcItem.prototype,{
	constructor:{
		value:TinIngot
	}
});

var tinIngot = new TinIngot();
fcaddItemlist.push(tinIngot);