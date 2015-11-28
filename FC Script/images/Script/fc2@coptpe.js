// Frequency Craft 2 v0.0
// ©trasta298

// This mod use BetterStorage Mod by DAW330073

//仮のものとしてパイプ機構はFCのものを使用

var gui = {};
var mod = {};
var GUI = {};
var system = {};
var Marker = {};
var Energy = {};
var Solar = {};
var items = {};

var Inventory = {};
var Pipe = {};
var oldPipe = {};
mod.name = "FC2";


var pipeItem = {};

var Ee = [176,177,178,179,180,181];
var Ec = [181];
var pent=[];


function useItem(x,y,z,itemId,blockId,side,itemDamage,blockDamage){
	if(blockId==176){
		if(itemId==2832){
			clientMessage("Energy: "+FC[x+","+y+","+z].fc);
			clientMessage("Max: "+FC[x+","+y+","+z].max);
			clientMessage("Run: "+FC[x+","+y+","+z].run);
			clientMessage("Speed: 1FC/"+FC[x+","+y+","+z].speed+"tick");
		}else{
			GUI.openInventory("Solar",x,y,z);
			GUI.openSolar(x,y,z);
		}
	}else if(itemId==176){
		var s = mod.Setmachine(x,y,z,itemId,side);
		FC[s[0]+","+s[1]+","+s[2]] = {id:176,max:1,fc:0,run:0,speed:20,ai:0,ad:0,ac:0};
		grid[s[0]+","+s[1]+","+s[2]+","+176]=[[s[0],s[1],s[2],176]];
		setgrid = true;
	}else if(itemId==181){
		var s = mod.Setmachine(x,y,z,itemId,side);
		FC[s[0]+","+s[1]+","+s[2]] = {id:181,max:100,fc:0};
		setgrid = true;
	}else if(itemId==183){
		var s = mod.Setmachine(x,y,z,itemId,side);
		FC[s[0]+","+s[1]+","+s[2]] = {id:183,run:0,speed:10};
	}else if(itemId==177||itemId==178||itemId==179||itemId==180){
		setgrid = true;
	}else if(itemId==2832&&(blockId==177||blockId==178||blockId==179)){
		setTile(x,y,z,blockId+1,0);
	}else if(itemId==2832&&blockId==180){
		setTile(x,y,z,177,0);
	}
}

function destroyBlock(x,y,z,side){
	if(Ee.indexOf(getTile(x,y,z))!=-1)  setgrid = true;
}

function entityAddedHook(entity){
	var ex=Entity.getX(entity);
	var ey=Entity.getY(entity);
	var ez=Entity.getZ(entity);
	var eid=getTile(Math.floor(ex),Math.floor(ey),Math.floor(ez));
	if(Entity.getEntityTypeId(entity)==64&&oldPipe.entent&&(eid==fcItem.Itempipe||eid==fcItem.hpipe||eid==fcItem.elpipe||eid==54||eid==fcItem.chestReceiver||eid==fcItem.chestTransmitter||eid==fcItem.diapipe||eid==fcItem.delpipe||eid==fcItem.IMchest)){
		deleteent.push(entity);
		isworld=true;
	}
	if(!oldPipe.entent) oldPipe.entent=true;
	if(Entity.getEntityTypeId(entity)==64){
		items.drop(entity);
	}
}

items.drop = function(entity){
	var id = Entity.getItemEntityId(entity);
	var ex = Entity.getX(entity);
	var ey = Entity.getY(entity);
	var ez = Entity.getZ(entity);
	if(id==176){
		//Level.dropItem(ex,ey,ez,0,176,Entity.getItemEntityCount(entity),0);
		//Entity.remove(entity);
	}else if(id==178||id==179||id==180){
		Level.dropItem(ex,ey,ez,0,177,Entity.getItemEntityCount(entity),0);
		Entity.remove(entity);
	}
}



function modTick(){
	Energy.sendpower();
	GUI.modTick();
}

Pipe.discharge = function(tick,key){
	var dd = 0.5;
	if(tick%FC[key].speed==0){
		var x=parseInt(key.split(",")[0]);
		var y=parseInt(key.split(",")[1]);
		var z=parseInt(key.split(",")[2]);
		var side=[[x+1,y,z],[x-1,y,z],[x,y,z+1],[x,y,z-1],[x,y+1,z],[x,y-1,z]];
		var i=0;
		while(i<side.length){
			if(getTile(side[i][0],side[i][1],side[i][2])==54){
				var c = Chest.getaItem(side[i][0],side[i][1],side[i][2]);
				if(c){
					var e = Level.dropItem(x+dd,y+dd,z+dd,0,c[0],1,c[1]);
					pent.push(e);
					Pipe.move(e);
				}
				break;
			}
			i++;
		}
	}
}

oldPipe.setPipe = function(tick,key){
	if(FC[key].run==0){
		x=parseInt(key.split(",")[0]);
		y=parseInt(key.split(",")[1]);
		z=parseInt(key.split(",")[2]);
		var tt = false;
		if(tick%FC[key].speed==0){
			var side=[[x+1,y,z],[x,y+1,z],[x,y,z+1],[x,y,z-1],[x,y-1,z],[x-1,y,z]];
			for(i=0;i<side.length;i++){
				if(getTile(side[i][0],side[i][1],side[i][2])==54){
					oldPipe.propipe(side[i][0],side[i][1],side[i][2],x,y,z);
					tt = true;
				}
			}
			if(!tt){
				oldPipe.indropItem(x,y,z);
			}
		}
	}
}

oldPipe.indropItem = function(x,y,z){
	oldPipe.lllx = x;
	oldPipe.llly = y;
	oldPipe.lllz = z;
	oldPipe.cls = true;
	Entity.getAll().filter(oldPipe.judropItem).filter(oldPipe.nopipe).filter(oldPipe.Near).forEach(oldPipe.Target);
}

oldPipe.udropItem = function(entity,index,array) {
	return (Entity.getEntityTypeId(entity)==64);
}

oldPipe.nopipe = function(element,index,array) {
	var cop = true;
	for(key in pipeItem){
		if(element == key) cop = false;
	}
	return (cop);
}

oldPipe.Near = function(element,index,array) {
	return (getDistance(element)<7);
}

oldPipe.Target = function(entity) {
	if(oldPipe.cls){
		var cid = Entity.getItemEntityId(entity);
		var cco = Entity.getItemEntityCount(entity);
		var cda = Entity.getItemEntityData(entity);
		//clientMessage("id:"+cid+" data:"+cda+" count:"+cco);
		oldPipe.entent=false;
		var entItem=Level.dropItem(oldPipe.lllx,oldPipe.llly,oldPipe.lllz,0,cid,1,cda);
		Entity.setCollisionSize(entItem,0,0);
		Entity.setVelX(entItem,0);
		Entity.setVelY(entItem,0);
		Entity.setVelZ(entItem,0);
		pipeItem[entItem]={id:cid,dmg:cda,x:oldPipe.lllx,y:oldPipe.llly,z:oldPipe.lllz,tick:19,side:6};
		if(cco>1){
			Level.dropItem(Entity.getX(entity),Entity.getY(entity)+0.01,Entity.getZ(entity),0,cid,cco-1,cda);
			Entity.remove(entity);
		}else{
			Entity.remove(entity);
	}
		oldPipe.cls = false;
	}
}

oldPipe.propipe = function(cx,cy,cz,x,y,z){
	var sce = Chest.getaItem(cx,cy,cz);
	if(sce){
		var cid = sce[0];
		var cda = sce[1];
		oldPipe.entent=false;
		var entItem=Level.dropItem(x,y,z,0,cid,1,cda);
		Entity.setCollisionSize(entItem,0,0);
		Entity.setVelX(entItem,0);
		Entity.setVelY(entItem,0);
		Entity.setVelZ(entItem,0);
		pipeItem[entItem]={id:cid,dmg:cda,x:x,y:y,z:z,tick:19,side:6};
	}
}

oldPipe.intoItem = function(){
	for(key in pipeItem){
		var x=pipeItem[key].x;
		var y=pipeItem[key].y;
		var z=pipeItem[key].z;
		var dropId=pipeItem[key].id;
		var dropdmg=pipeItem[key].dmg;
		oldPipe.entent=false;
		var entItem=Level.dropItem(x,y,z,0,dropId,1,dropdmg);
		Entity.setCollisionSize(entItem,0,0);
		Entity.setVelX(entItem,0);
		Entity.setVelY(entItem,0);
		Entity.setVelZ(entItem,0);
		pipeItem[entItem]={id:dropId,dmg:dropdmg,x:x,y:y,z:z,tick:pipeItem[key].tick,side:pipeItem[key].side};
		delete pipeItem[key];
	}
	isworld=false;
}


oldPipe.moveItem = function(){
	for(key in pipeItem){
		var ent=parseInt(key);
		var tick=pipeItem[key].tick;
		var dx=pipeItem[key].x;
		var dy=pipeItem[key].y;
		var dz=pipeItem[key].z;
		var ee=pipeItem[key].side;
		var side=[[dx+1,dy,dz],[dx,dy+1,dz],[dx,dy,dz+1],[dx,dy,dz-1],[dx,dy-1,dz],[dx-1,dy,dz]];
		var limit=[];
		if(tick%20<19){
			if(ee==0) dx+=(1/20*(tick+1));
			else if(ee==1) dy+=(1/20*(tick+1));
			else if(ee==2) dz+=(1/20*(tick+1));
			else if(ee==3) dz-=(1/20*(tick+1));
			else if(ee==4) dy-=(1/20*(tick+1));
			else if(ee==5) dx-=(1/20*(tick+1));
			Entity.setPosition(ent,dx+0.5,dy+0.5,dz+0.5);
			Entity.setVelX(ent,0);
			Entity.setVelY(ent,0);
			Entity.setVelZ(ent,0);
			if(getTile(dx,dy,dz)==184) pipeItem[key].tick+=(19/6);
			else pipeItem[key].tick++;
		}else{
			var cc=[];
			if(ee!=6&&getTile(side[ee][0],side[ee][1],side[ee][2])==54){
				if(Chest.addItem(side[ee][0],side[ee][1],side[ee][2],pipeItem[key].id,pipeItem[key].dmg,1)) Entity.remove(ent);
				else Entity.setCollisionSize(ent,0.4,0.4);
				delete pipeItem[key];
			}/*else if(ee!=6&&getTile(side[ee][0],side[ee][1],side[ee][2])==fcItem.delpipe){
				Entity.remove(ent);
				delete pipeItem[key];
			}else if(ee!=6&&getTile(side[ee][0],side[ee][1],side[ee][2])==fcItem.chestTransmitter&&energy[side[ee][0]+","+side[ee][1]+","+side[ee][2]+","+fcItem.chestTransmitter]>0){
				energy[side[ee][0]+","+side[ee][1]+","+side[ee][2]+","+fcItem.chestTransmitter]--;
				microItem(side[ee][0],side[ee][1],side[ee][2],key);
			}*/else{
				/*if(ee!=6&&getTile(side[ee][0],side[ee][1],side[ee][2])==fcItem.diapipe){
					var xx=side[ee][0];
					var yy=side[ee][1];
					var zz=side[ee][2];
					var sss=[[xx+1,yy,zz],[xx,yy+1,zz],[xx,yy,zz+1],[xx,yy,zz-1],[xx,yy-1,zz],[xx-1,yy,zz]];
					var we=[];
					var i=0;
					while(i<9){
						if(DiPipe[xx+","+yy+","+zz][i][0]!=0){
							if((i==0||i==1||i==2)&&ee!=4) limit.push(1);
							if(i==3||i==4||i==5){
								limit.push(0);
								limit.push(2);
								limit.push(3);
								limit.push(5);
							}
							if(i==6||i==7||i==8) limit.push(4);
							if(pipeItem[key].id==DiPipe[xx+","+yy+","+zz][i][0]&&pipeItem[key].dmg==DiPipe[xx+","+yy+","+zz][i][1]){
								if((i==0||i==1||i==2)&&ee!=4) we.push(1);
								if(i==3||i==4||i==5){
									we.push(0);
									we.push(2);
									we.push(3);
									we.push(5);
								}
								if(i==6||i==7||i==8) we.push(4);
							}
						}
						i++;
					}
					var o=0;
					while(o<we.length){
						var s=we[o];
						if(getTile(sss[s][0],sss[s][1],sss[s][2])==182&&s+ee!=5){
							cc.push(s);
						}else if(getTile(sss[s][0],sss[s][1],sss[s][2])==184&&s+ee!=5){
							cc.push(s);
						}else if(getTile(sss[s][0],sss[s][1],sss[s][2])==fcItem.diapipe&&s+ee!=5){
							cc.push(s);
						}else if(getTile(sss[s][0],sss[s][1],sss[s][2])==fcItem.delpipe&&s+ee!=5){
							cc.push(s);
						}else if(getTile(sss[s][0],sss[s][1],sss[s][2])==fcItem.chestTransmitter&&energy[sss[s][0]+","+sss[s][1]+","+sss[s][2]+","+fcItem.chestTransmitter]>0&&s+ee!=5){
							cc.push(s);
						}else if(getTile(sss[s][0],sss[s][1],sss[s][2])==54&&getTile(dx,dy,dz)!=183){
							cc.push(s);
						}else if(getTile(sss[s][0],sss[s][1],sss[s][2])==fcItem.IMchest&&getTile(dx,dy,dz)!=183){
							cc.push(s);
						}
						o++;
					}
				}*/
				Entity.setVelX(ent,0);
				Entity.setVelY(ent,0);
				Entity.setVelZ(ent,0);
				if(ee!=6){
					Entity.setPosition(ent,side[ee][0]+0.5,side[ee][1]+0.5,side[ee][2]+0.5);
					pipeItem[key].x=side[ee][0];
					pipeItem[key].y=side[ee][1];
					pipeItem[key].z=side[ee][2];
				}else{
					Entity.setPosition(ent,dx+0.5,dy+0.5,dz+0.5);
				}
				var pp=[];
				var i=0;
				var cx=pipeItem[key].x;
				var cy=pipeItem[key].y;
				var cz=pipeItem[key].z;
				var dside=[[cx+1,cy,cz],[cx,cy+1,cz],[cx,cy,cz+1],[cx,cy,cz-1],[cx,cy-1,cz],[cx-1,cy,cz]];
				while(i<dside.length){
					if(getTile(dside[i][0],dside[i][1],dside[i][2])==182&&i+ee!=5){
						pp.push(i);
					}/*else if(getTile(dside[i][0],dside[i][1],dside[i][2])==184&&i+ee!=5){
						pp.push(i);
					}else if(getTile(dside[i][0],dside[i][1],dside[i][2])==fcItem.diapipe&&i+ee!=5){
						pp.push(i);
					}else if(getTile(dside[i][0],dside[i][1],dside[i][2])==fcItem.delpipe&&i+ee!=5){
						pp.push(i);
					}else if(getTile(dside[i][0],dside[i][1],dside[i][2])==fcItem.chestTransmitter&&energy[dside[i][0]+","+dside[i][1]+","+dside[i][2]+","+fcItem.chestTransmitter]>0&&i+ee!=5){
						pp.push(i);
					}*/else if(getTile(dside[i][0],dside[i][1],dside[i][2])==54&&getTile(dx,dy,dz)!=183){
						pp.push(i);
					}
					i++;
				}
				if(cc.length!=0){
					var g=cc[random(0,cc.length-1)];
					pipeItem[key].side=g;
					pipeItem[key].tick=0;
				}else{
					for(k=0;k<limit.length;k++){
						for(l=0;l<pp.length;l++){
							if(pp[l]==limit[k]) pp.splice(l,1);
						}
					}
					if(pp.length!=0){
						var g=pp[random(0,pp.length-1)];
						pipeItem[key].side=g;
						pipeItem[key].tick=0;
					}else{
						if(ee==0) Entity.setVelX(ent,0.3);
						if(ee==1) Entity.setVelY(ent,0.3);
						if(ee==2) Entity.setVelZ(ent,0.3);
						if(ee==3) Entity.setVelZ(ent,-0.3);
						if(ee==4) Entity.setVelY(ent,-0.3);
						if(ee==5) Entity.setVelX(ent,-0.3);
						if(ee==6) Entity.setVelY(ent,1);
						Entity.setCollisionSize(ent,0.4,0.4);
						delete pipeItem[key];
					}
				}
			}
		}
	}
}

Pipe.discharge = function(e){
	var dd = 0.5;
	var ex = Entity.getX(e);
	var ey = Entity.getY(e);
	var ez = Entity.getZ(e);
	var mf = Math.floor;
	
}

Level.err = function(n,m,d){
	return (Math.abs(n-m)<d);
}












