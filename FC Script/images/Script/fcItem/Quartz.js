function Quartz(){
	this.id = 505;
	this.name = "Quartz";
	this.tex = "Quartz";
	this.texnum = 0;
	this.stack = 64;
	this.creInv = true;
	fcItem.apply(this,arguments);
}

Quartz.prototype=Object.create(fcItem.prototype,{
	constructor:{
		value:Quartz
	}
});

var quartz = new Quartz();
fcaddItemlist.push(quartz);