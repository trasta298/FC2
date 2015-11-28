var Chest = {};

Chest.addItem = function(x,y,z,id,dmg,count){
	var sl=0;
	var success=false;
	while(sl<27){
		var cid=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemChest(x,y,z,sl);
		var cco=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemCountChest(x,y,z,sl);
		var cda=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemDataChest(x,y,z,sl);
		if((cid==id&&cco<(65-count)&& cda==dmg)||cid==0){
			net.zhuoweizhang.mcpelauncher.ScriptManager.nativeAddItemChest(x,y,z,sl,id,dmg,cco+count);
			success=true;
			break;
		}
		sl++;
	}
	return success;
}

Chest.getItem = function(cx,cy,cz,id,dmg){
	var csl=0;
	var cco;
	while(csl<27){
		var cid=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemChest(cx,cy,cz,csl);
		var cco=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemCountChest(cx,cy,cz,csl);
		var cda=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemDataChest(cx,cy,cz,csl);
		if(cid==id){
			break;
		}
		csl++;
	}
	return [csl,cco];
}

Chest.getaItem = function(cx,cy,cz){
	var csl=0;
	while(csl<27){
		var cid=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemChest(cx,cy,cz,csl);
		var cco=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemCountChest(cx,cy,cz,csl);
		var cda=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemDataChest(cx,cy,cz,csl);
		if(cid!=0){
			if(cco==1) net.zhuoweizhang.mcpelauncher.ScriptManager.nativeAddItemChest(cx,cy,cz,csl,0,0,0);
			else net.zhuoweizhang.mcpelauncher.ScriptManager.nativeAddItemChest(cx,cy,cz,csl,cid,cda,cco-1);
			return [cid,cda];
		}
		csl++;
	}
	return false;
}

Chest.getItem = function(cx,cy,cz,id,dmg,count){
	var csl=0;
	var cco;
	while(csl<27){
		var cid=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemChest(cx,cy,cz,csl);
		var cco=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemCountChest(cx,cy,cz,csl);
		var cda=net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemDataChest(cx,cy,cz,csl);
		if(cid==id){
			break;
		}
		csl++;
	}
	return [csl,cco];
}

