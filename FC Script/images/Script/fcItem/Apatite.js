function Apatite(){
	this.id = 503;
	this.name = "Apatite";
	this.tex = "Apatite";
	this.texnum = 0;
	this.stack = 64;
	this.creInv = true;
	fcItem.apply(this,arguments);
}

Apatite.prototype=Object.create(fcItem.prototype,{
	constructor:{
		value:Apatite
	}
});

var apatite = new Apatite();
fcaddItemlist.push(apatite);