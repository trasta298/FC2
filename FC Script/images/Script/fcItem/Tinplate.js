function Tinplate(){
	this.id = 507;
	this.name = "Tinplate";
	this.tex = "Tinplate";
	this.texnum = 0;
	this.stack = 64;
	this.creInv = true;
	fcItem.apply(this,arguments);
}

Tinplate.prototype=Object.create(fcItem.prototype,{
	constructor:{
		value:Tinplate
	}
});

var tinplate = new Tinplate();
fcaddItemlist.push(tinplate);