function Automatic(tick,x,y,z,d,ops){
	var id=ops.i9;
	var dmg=ops.d9;
	if(tick%10==0){
		if(ops.run==0&&id!=0){
			var side=[[x+1,y,z],[x,y+1,z],[x,y,z+1],[x,y,z-1],[x,y-1,z],[x-1,y,z]];
			var i=0;
			while(i<side.length){
				sx=side[i][0];
				sy=side[i][1];
				sz=side[i][2];
				if(getTile(sx,sy,sz)==54){
					var recipe=cheakrecipe(id,dmg);
					cheakchestItem(recipe,sx,sy,sz,id,dmg,x,y,z,d);
				}
				i++;
			}
		}
	}
}

function cheakchestItem(re,x,y,z,did,ddmg,xx,yy,zz,d){
	var Recovery=[];
	var sl=0;
	var i=0;
	var sce=true;
	while(i<9&&sce){
		sl=0;
		var ssce=false;
		while(sl<27&&re[i]){
			id=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemChest(x,y,z,sl);
			co=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemCountChest(x,y,z,sl);
			da=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemDataChest(x,y,z,sl);
			if(id==re[i][0]&&da==re[i][1]){
				if(co==1) net.zhuoweizhang.mcpelauncher.ScriptManager.nativeAddItemChest(x,y,z,sl,0,0,0);
				else net.zhuoweizhang.mcpelauncher.ScriptManager.nativeAddItemChest(x,y,z,sl,id,da,co-1);
				Recovery.push([id,da]);
				ssce=true;
				break;
			}
			sl++;
		}
		if(!re[i]) ssce=true;
		if(!ssce) sce=false;
		i++;
	}
	if(!sce){
		for(i=0;i<Recovery.length;i++){
			var sl=0;
			while(sl<27){
				cid=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemChest(x,y,z,sl);
				cco=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemCountChest(x,y,z,sl);
				cda=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemDataChest(x,y,z,sl);
				if((cid==Recovery[i][0]&&1<(65-cco)&& cda==Recovery[i][1])||cid==0){
					net.zhuoweizhang.mcpelauncher.ScriptManager.nativeAddItemChest(x,y,z,sl,Recovery[i][0],Recovery[i][1],cco+1);
					break;
				}
				sl++;
			}
		}
		Recovery=[];
	}else if(sce){
		var ad=false;
		var side=[[xx+1,yy,zz],[xx,yy+1,zz],[xx,yy,zz+1],[xx,yy,zz-1],[xx,yy-1,zz],[xx-1,yy,zz]];
		for(i=0;i<side.length;i++){
			var sideid=getTile(side[i][0],side[i][1],side[i][2]);
			if(sideid==pipe.id||sideid==goldpipe.id){
				for(var l=0;l<re[9];l++) futureinpipe.push([side[i][0],side[i][1],side[i][2],did,ddmg,i,d]);
				ad=true;
				break;
			}
		}
		if(!ad) Level.dropItem(xx,yy,zz,0,did,re[9],ddmg);
	}
}