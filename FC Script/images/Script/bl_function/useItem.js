function useItem(x,y,z,i,b,s,iD,bD){
	var d = Player.getDimension();
	api_useItem(x,y,z,i,b,s,iD,bD,d);
	
	//木エンジン
	if(b==woodengine.id && !Entity.isSneaking(Player.getEntity())){
		var sp=MOB_BLOCK.getSpeed(x,y,z);
		MOB_BLOCK.engineSpeedChange(x,y,z,sp+1);
		clientMessage(sp+1);
	}
	if(b==woodengine.id && Entity.isSneaking(Player.getEntity())){
		var sp=MOB_BLOCK.getSpeed(x,y,z);
		if(sp!=0)
			MOB_BLOCK.engineSpeedChange(x,y,z,sp-1);
		clientMessage(sp-1);
	}
	if(i==woodengine.id){
		var h = SetEngine(x,y,z,i,s);
		FC[inkey(h[0],h[1],h[2],d)]={
			id:woodengine.id,max:1,fc:0,speed:0,state:0,piston:1
		};
		Level.spawnMob(h[0]+0.5,h[1],h[2]+0.5,15);
	}
	
	//ソーラー
	else if(b==solar.id){
		if(i==wrench.id){
			clientMessage("Energy: "+FC[x+","+y+","+z+","+d].fc);
			clientMessage("Max: "+FC[x+","+y+","+z+","+d].max);
			clientMessage("Run: "+FC[x+","+y+","+z+","+d].run);
			clientMessage("Speed: 1FC/"+FC[x+","+y+","+z+","+d].speed+"tick");
		}else{
			selectedSlot.f=b;
			GUI.openInventory("Solar",x,y,z,d);
			GUI.openSolar(x,y,z,d);
		}
	}else if(i==solar.id){
		var h = Setmachine(x,y,z,i,s);
		FC[inkey(h[0],h[1],h[2],d)]={
			id:solar.id,
			max:1,
			fc:0,
			run:0,
			speed:20,
			i0:0,
			d0:0,
			c0:0,
			i1:0,
			d1:0,
			c1:0
		};
		grid[h[0]+","+h[1]+","+h[2]+","+solar.id+","+d]=[[h[0],h[1],h[2],solar.id,d]];
		setgrid = true;
	}
	
	else if(i==ponp.id){
		var h = Setmachine(x,y,z,i,s);
		FC[inkey(h[0],h[1],h[2],d)]={
			id:ponp.id,
			run:0
		};
	}
	
	else if(i==automaticCrafting.id){
		var h = Setmachine(x,y,z,i,s);
		FC[inkey(h[0],h[1],h[2],d)]={
			id:automaticCrafting.id,
			i9:0,
			d9:0,
			c9:0,
			run:0
		};
	}
	
	else if(b==automaticCrafting.id){
		selectedSlot.f=b;
		GUI.openInventory("AutomaticCrafting",x,y,z,d);
		GUI.openAutogui(x,y,z,d);
	}
	
	else if(i==digitalminner.id){
		var h = Setmachine(x,y,z,i,s);
		FC[inkey(h[0],h[1],h[2],d)]={
			id:digitalminner.id,
			max:10000,
			fc:0,
			run:0
		};
		setgrid = true;
	}
	
	else if(i==generator.id){
		var h = Setmachine(x,y,z,i,s);
		FC[inkey(h[0],h[1],h[2],d)]={
			id:generator.id,
			max:1000,
			fc:0,
			run:0,
			fire:0,
			firemax:200,
			effect:1,
			speed:20,
			i0:0,
			d0:0,
			c0:0
		};
		grid[h[0]+","+h[1]+","+h[2]+","+generator.id+","+d]=[[h[0],h[1],h[2],generator.id,d]];
		setgrid = true;
	}
	
	else if(b==generator.id&&i!=wrench.id){
		selectedSlot.f=b;
		GUI.openInventory("Generator",x,y,z,d);
		GUI.openGeneratorgui(x,y,z,d);
	}
	
	else if(i==wire.id){
		setgrid = true;
	}
	
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="useItem") addon[key][value](x,y,z,i,b,s,iD,bD);
			}
		}
	}catch(e){}
}

/*
以下テンプレ
if(i==181){
		var h = Setmachine(x,y,z,i,s);
		FC[h[0]+","+h[1]+","+h[2]+","+d] = {id:181,max:100,fc:0};
		setgrid = true;
	}

*/


function api_useItem(x,y,z,i,b,s,iD,bD,d){
	for(key in apidata){
		if(i==apidata[key].id){
			var h = Setmachine(x,y,z,i,s);
			FC[inkey(h[0],h[1],h[2],d)] = apidata[key].fcdata;
			FC[inkey(h[0],h[1],h[2],d)].id=apidata[key].id;
			if(apidata[key].ss) grid[h[0]+","+h[1]+","+h[2]+","+apidata[key].id+","+d]=[[h[0],h[1],h[2],apidata[key].id,d]];
			setgrid = true;
		}else if(b==apidata[key].id){
			fcapi.ontouch[key](x,y,z,i,b,s,iD,bD,d,FC[inkey(x,y,z,d)]);
		}
	}
}