function Icchip(){
	this.id = 508;
	this.name = "Icchip";
	this.tex = "icchip";
	this.texnum = 0;
	this.stack = 4;
	this.creInv = true;
	fcItem.apply(this,arguments);
}

Icchip.prototype=Object.create(fcItem.prototype,{
	constructor:{
		value:Icchip
	}
});

var icchip = new Icchip();
fcaddItemlist.push(icchip);