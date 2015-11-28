function CopperIngot(){
	this.id = 504;
	this.name = "Copper Ingot";
	this.tex = "Copper";
	this.texnum = 0;
	this.stack = 64;
	this.creInv = true;
	fcItem.apply(this,arguments);
}

CopperIngot.prototype=Object.create(fcItem.prototype,{
	constructor:{
		value:CopperIngot
	}
});

var copperIngot = new CopperIngot();
fcaddItemlist.push(copperIngot);