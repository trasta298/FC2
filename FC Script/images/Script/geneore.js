var Oreblocklist=[
	{ID:tinore.id,Damage:0,MaxY:70,MinY:10,Rarity:20,Delete:[1,3,13],Size:12},
	{ID:nickelore.id,Damage:0,MaxY:50,MinY:4,Rarity:15,Delete:[1,3,13],Size:11},
	{ID:quartzore.id,Damage:0,MaxY:25,MinY:4,Rarity:5,Delete:[1,3,13],Size:6},
	{ID:copperore.id,Damage:0,MaxY:70,MinY:4,Rarity:25,Delete:[1,3,13],Size:13},
	{ID:apatiteore.id,Damage:0,MaxY:70,MinY:30,Rarity:10,Delete:[1,3,13],Size:11}
];

function GenerationOre(px,pz,syc){
	var dx = px%16;
	var dz = pz%16;
	var wx=wz=0;
	if(px>0) wx = px-dx;
	else wx = pz-16-dx;
	if(pz>0) wz = pz-dz;
	else wz = pz-16-dz;
	var co = Level.getData(wx,1,wz);
	if(co==2){
		if(syc){
			switch(random(1,4)){
				case 1 : GenerationOre(px+16,pz,true);break;
				case 2 : GenerationOre(px-16,pz,true);break;
				case 3 : GenerationOre(px,pz+16,true);break;
				case 4 : GenerationOre(px,pz-16,true);break;
			}
		}
	}else{
		SetGene(wx,wz,co);
	}
}

function SetGene(wx,wz,co){
	for(i=0;i<Oreblocklist.length;i++){
		if(random(1,100)<Oreblocklist[i].Rarity){
			var xx = wx+random(0,15);
			var zz = wz+random(0,15);
			var yy = random(Oreblocklist[i].MinY,Oreblocklist[i].MaxY);
			SetOre(xx,yy,zz,Oreblocklist[i].ID,Oreblocklist[i].Damage,Oreblocklist[i].Size,Oreblocklist[i].Delete,0);
		}
	}
	var wdata = Level.getData(wx+1,1,wz);
	setTile(wx+1,1,wz,7,wdata+1);
	if(wdata==15) setTile(wx,1,wz,7,co+1);
}

function SetOre(x,y,z,id,data,size,del,pro){
	var gid = getTile(x,y,z);
	if(del.indexOf(gid)!=-1&&gid!=id){
		var num = random(Math.floor(size/8),Math.floor(size/4));
		if(num>pro){
			setTile(x,y,z,id,data);
			SetOre(x+1,y,z,id,data,size,del,pro+1);
			SetOre(x-1,y,z,id,data,size,del,pro+1);
			SetOre(x,y+1,z,id,data,size,del,pro+1);
			SetOre(x,y-1,z,id,data,size,del,pro+1);
			SetOre(x,y,z+1,id,data,size,del,pro+1);
			SetOre(x,y,z-1,id,data,size,del,pro+1);
		}
	}
}
