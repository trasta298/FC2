var modtick=0;
var nowDid = -1;
var godid=0;

function modTick(){
	var d=Player.getDimension();
	EL.init();
	if(nowDid!=d&&godid==1){
		nowDid=d;
		godid=2;
		var ff=[];
		for(var i=0;i<flowitem.length;i++){
			var entItem;
			if(flowitem[i].dimension==d){
				entItem=Level.dropItem(flowitem[i].x+0.5,flowitem[i].y+0.5,flowitem[i].z+0.5,0,flowitem[i].id,1,flowitem[i].data);
			}
			else entItem=0;
			var v = new Itemflow(entItem,flowitem[i].x,flowitem[i].y,flowitem[i].z,flowitem[i].yaw,flowitem[i].dimension,flowitem[i].id,flowitem[i].data);
			ff.push(v);
		}
		flowitem=ff;
	}
	if(godid==2&&nowDid==d) flowItem_place();
	modtick++;
	if(setgrid){
		Energy.setGrid();
		MOB_BLOCK.checkMobBlock();
		setgrid = false;
	}
	MOB_BLOCK.mobBlockModTick();
	MOB_BLOCK.engineWork();
	for(key in FC){
		fctick(FC[key],key,modtick);
	}
	GUI.WrenchWin();
	if(modtick%5==0) intoPipein();
	if(modtick%3==0) GenerationOre(Math.floor(Player.getX()),Math.floor(Player.getZ()),false);
	if(modtick%20==0) moddelete();
	if(modtick%200==0) SaveData();
	Energy.sendpower();
	GUI.modTick();
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="modTick") addon[key][value](x,y,z,i,b,s,iD,bD);
			}
		}
	}catch(e){}
}

function moddelete(){
	for(key in FC){
		var x=parseInt(key.split(",")[0]);
		var y=parseInt(key.split(",")[1]);
		var z=parseInt(key.split(",")[2]);
		var d=parseInt(key.split(",")[3]);
		if(getTile(x,y,z)!=FC[key].id&&d==Player.getDimension()){
			if(grid[x+","+y+","+z+","+FC[key].id+","+d]) delete grid[x+","+y+","+z+","+FC[key].id+","+d];
			delete FC[key];
			clientMessage("delete:"+key);
		}
	}
}

function fctick(ops,key,tick){
	var x=parseInt(key.split(",")[0]);
	var y=parseInt(key.split(",")[1]);
	var z=parseInt(key.split(",")[2]);
	var d=parseInt(key.split(",")[3]);
	if(ops.id==solar.id) Solargenerate(tick+1,x,y,z,d,ops);
	if(ops.id==automaticCrafting.id) Automatic(tick,x,y,z,d,ops);
	if(ops.id==generator.id) Generate(tick,x,y,z,d,ops);
	if(ops.id==ponp.id) flowItem_modTick(tick,x,y,z,d,ops);
	for(value in apidata){
		if(ops.id==apidata[value].id&&Player.getDimension()==d){
			fcapi.tick[value](x,y,z,d,tick,ops);
		}
	}
}


