
//通すだけ、発電の物はEeに
//貯めるものはEe、Ec両方にいれる

var Ee = [wire.id,solar.id,digitalminner.id,automaticCrafting.id,generator.id];
var Ec = [digitalminner.id,automaticCrafting.id];
var Energy = {};

Energy.setGrid = function(){
	px=Player.getX();
	py=Player.getY();
	pz=Player.getZ();
	pd = Player.getDimension();
	for(key in grid){
		x=parseInt(key.split(",")[0]);
		y=parseInt(key.split(",")[1]);
		z=parseInt(key.split(",")[2]);
		d=parseInt(key.split(",")[4]);
		if(Math.abs(px-x)<150&&Math.abs(pz-z)<150&&pd==d){
			id=parseInt(key.split(",")[3]);
			grid[key]=[[x,y,z,id,d]];
			Energy.ispowered(x,y,z,key,d);
		}
	}
}

Energy.ispowered = function(x,y,z,key,d){
	var side=[[x+1,y,z],[x-1,y,z],[x,y,z+1],[x,y,z-1],[x,y+1,z],[x,y-1,z]];
	var i=0;
	while(i<side.length){
		sx=side[i][0];
		sy=side[i][1];
		sz=side[i][2];
		sblock=getTile(sx,sy,sz);
		if(Ee.indexOf(sblock)!=-1){
			if(!inarrey([sx,sy,sz,d],grid[key])){
				grid[key].push([sx,sy,sz,sblock,d]);
				Energy.ispowered(sx,sy,sz,key,d);
			}
		}
		i++;
	}
}

Energy.sendpower = function(){
	for(key in grid){
		x=parseInt(key.split(",")[0]);
		y=parseInt(key.split(",")[1]);
		z=parseInt(key.split(",")[2]);
		d=parseInt(key.split(",")[4]);
		var value=x+","+y+","+z+","+d;
		if(FC[value].fc>0/*&&d==Player.getDimension()*/){
			var i=0;
			while(i<grid[key].length){
				var clue=grid[key][i][0]+","+grid[key][i][1]+","+grid[key][i][2]+","+d;
				var eid = grid[key][i][3];
				if(FC[clue]){
					if(FC[clue].fc<FC[clue].max&&FC[value].fc>0&&Ec.indexOf(eid)!=-1){
						FC[value].fc--;
						FC[clue].fc++;
					}
				}
				i++;
			}
		}
	}
}

function inarrey(what,where){
	if(!where)
		return false;
	for(var i=0;i<where.length;i++){
		if(where[i][0]==what[0] && where[i][1]==what[1] && where[i][2]==what[2]) return true;
	}
	return false;
}