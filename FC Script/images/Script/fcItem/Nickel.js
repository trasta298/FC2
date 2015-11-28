function NickelIngot(){
	this.id = 501;
	this.name = "Nickel Ingot";
	this.tex = "Nickel";
	this.texnum = 0;
	this.stack = 64;
	this.creInv = true;
	fcItem.apply(this,arguments);
}

NickelIngot.prototype=Object.create(fcItem.prototype,{
	constructor:{
		value:NickelIngot
	}
});

var nickelIngot = new NickelIngot();
fcaddItemlist.push(nickelIngot);