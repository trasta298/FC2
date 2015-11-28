function Wrench(){
	this.id = 500;
	this.name = "Wrench";
	this.tex = "wrench";
	this.texnum = 0;
	this.stack = 1;
	this.creInv = true;
	fcItem.apply(this,arguments);
}

Wrench.prototype=Object.create(fcItem.prototype,{
	constructor:{
		value:Wrench
	}
});

var wrench = new Wrench();
fcaddItemlist.push(wrench);