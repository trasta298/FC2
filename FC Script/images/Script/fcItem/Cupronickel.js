function Cupronickel(){
	this.id = 506;
	this.name = "Cupronickel Ingot";
	this.tex = "Cupronickel";
	this.texnum = 0;
	this.stack = 64;
	this.creInv = true;
	fcItem.apply(this,arguments);
}

Cupronickel.prototype=Object.create(fcItem.prototype,{
	constructor:{
		value:Cupronickel
	}
});

var cupronickel = new Cupronickel();
fcaddItemlist.push(cupronickel);