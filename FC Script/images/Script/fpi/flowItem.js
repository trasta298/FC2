var flowitem = [];
var bb = [pipe.id,54,goldpipe.id];
var pfc = [pipe.id,54,goldpipe.id,183,188];
var futureinpipe=[];

function intoPipein(){
	var s=0;
	while(true){
		if(futureinpipe.length>s){
			if(futureinpipe[s][6]==Player.getDimension()){
				var entItem=Level.dropItem(futureinpipe[s][0]+0.5,futureinpipe[s][1]+0.5,futureinpipe[s][2]+0.5,s,futureinpipe[s][3],1,futureinpipe[s][4]);
				var i = new Itemflow(entItem,futureinpipe[s][0],futureinpipe[s][1],futureinpipe[s][2],futureinpipe[s][5],futureinpipe[s][6],futureinpipe[s][3],futureinpipe[s][4]);
				flowitem.push(i);
				futureinpipe.splice(s,1);
				break;
			}
		}else{
			break;
		}
	}
}

function flowItem_modTick(tick,x,y,z,d,ops){
	if(ops.run==0){
		var tt = false;
		if(d==Player.getDimension()){
			var side=[[x+1,y,z],[x,y+1,z],[x,y,z+1],[x,y,z-1],[x,y-1,z],[x-1,y,z]];
			for(i=0;i<side.length;i++){
				if(getTile(side[i][0],side[i][1],side[i][2])==54){
					flowItem_into(side[i][0],side[i][1],side[i][2],x,y,z,5-i);
					tt = true;
				}
			}
			if(!tt){
				//なかったとき ドロップアイテム吸い込みはなしで
			}
		}
	}
}

function flowItem_into(cx,cy,cz,x,y,z,side){
	var sce = Chest.getaItem(cx,cy,cz);
	if(sce){
		var cid = sce[0];
		var cda = sce[1];
		var entItem=Level.dropItem(x+0.5,y+0.5,z+0.5,0,cid,1,cda);
		var i = new Itemflow(entItem,x,y,z,side,Player.getDimension(),cid,cda);
		flowitem.push(i);
	}
}

function flowItem_place(){
	for(i=0;i<flowitem.length;i++) flowitem[i].flow(i);
}

function Itemflow(e,x,y,z,s,d,id,data){
	this.ent = e;
	this.x = x;
	this.y = y;
	this.z = z;
	this.id=id;
	this.data=data;
	this.dimension = d;
	this.tick = 0;
	this.max = 20;
	this.yaw = s;
	this.flow = function(l){
		if(Player.getDimension()!=this.dimension) return;
		if(Entity.getEntityTypeId(this.ent)==0){
			flowitem.splice(l,1);
			return;
		}
		if(this.tick==this.max){
			switch(this.yaw){
				case 0:
					this.x+=1;
					break;
				case 1:
					this.y+=1;
					break;
				case 2:
					this.z+=1;
					break;
				case 3:
					this.z-=1;
					break;
				case 4:
					this.y-=1;
					break;
				case 5:
					this.x-=1;
					break;
			}
			var id = getTile(this.x,this.y,this.z);
			if(id==54){
				var eid = Entity.getItemEntityId(this.ent);
				var edata = Entity.getItemEntityData(this.ent);
				if(!Chest.addItem(this.x,this.y,this.z,eid,edata,1)) Entity.setCollisionSize(this.ent,0.2,0.2);
				flowitem.splice(l,1);
				Entity.remove(this.ent);
				return false;
			}else if(id==pipe.id){
				this.max = this.max<17 ? this.max+3 : 20;
			}else if(id==goldpipe.id){
				this.max = this.max>12 ? this.max-3 : 10;
			}
			this.tick=0;
		}
		if(this.tick==0){
			var side=[[this.x+1,this.y,this.z],[this.x,this.y+1,this.z],[this.x,this.y,this.z+1],[this.x,this.y,this.z-1],[this.x,this.y-1,this.z],[this.x-1,this.y,this.z]];
			var FullTile = [];
			var i=0;
			while(i<side.length){
				var getid = getTile(side[i][0],side[i][1],side[i][2]);
				if(bb.indexOf(getid)!=-1&&i+this.yaw!=5){
					FullTile.push({x:side[i][0],y:side[i][1],z:side[i][2],yaw:i,id:getid});
				}
				i++;
			}
			if(FullTile.length==0){
				Entity.setCollisionSize(this.ent,0.2,0.2);
				flowitem.splice(l,1);
				return false;
			}else{
				var t = random(0,FullTile.length-1);
				this.yaw = FullTile[t].yaw;
				Entity.setPosition(this.ent,this.x+0.5,this.y+0.5,this.z+0.5);
				Entity.setRot(this.ent,0,0);
				Entity.setVelY(this.ent,0);
				Entity.setVelX(this.ent,0);
				Entity.setCollisionSize(this.ent,0,0);
				this.tick = 1;
				return true;
			}
		}else{
			var m = this.tick/this.max;
			Entity.setRot(this.ent,0,0);
			switch(this.yaw){
				case 0:
					Entity.setPosition(this.ent,this.x+0.5+m,this.y+0.5,this.z+0.5);
					Entity.setVelX(this.ent,1.2/this.max);
					Entity.setVelY(this.ent,0);
					Entity.setVelZ(this.ent,0);
					break;
				case 1:
					Entity.setPosition(this.ent,this.x+0.5,this.y+0.5+m,this.z+0.5);
					Entity.setVelY(this.ent,1.2/this.max);
					Entity.setVelZ(this.ent,0);
					Entity.setVelX(this.ent,0);
					break;
				case 2:
					Entity.setPosition(this.ent,this.x+0.5,this.y+0.5,this.z+0.5+m);
					Entity.setVelZ(this.ent,1.2/this.max);
					Entity.setVelY(this.ent,0);
					Entity.setVelX(this.ent,0);
					break;
				case 3:
					Entity.setPosition(this.ent,this.x+0.5,this.y+0.5,this.z+0.5-m);
					Entity.setVelX(this.ent,-1.2/this.max);
					Entity.setVelY(this.ent,0);
					Entity.setVelZ(this.ent,0);
					break;
				case 4:
					Entity.setPosition(this.ent,this.x+0.5,this.y+0.5-m,this.z+0.5);
					Entity.setVelY(this.ent,-1.2/this.max);
					Entity.setVelZ(this.ent,0);
					Entity.setVelX(this.ent,0);
					break;
				case 5:
					Entity.setPosition(this.ent,this.x+0.5-m,this.y+0.5,this.z+0.5);
					Entity.setVelZ(this.ent,-1.2/this.max);
					Entity.setVelY(this.ent,0);
					Entity.setVelX(this.ent,0);
					break;
			}
			this.tick++;
		}
	}
	this.remove = function(l){
		flowitem.splice(l,1);
	}
}