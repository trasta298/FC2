var MOBBLOCK_RENDERER=(function(){
	
	var models=[[],[],[],[],[],[]]; //各向きのレンダラー配列
	
	//レンダラ生成用関数
	function _render(func){
		var papa=Renderer.createHumanoidRenderer();
		var model=papa.getModel();
		model.getPart("head").clear();
		model.getPart("body").clear();
		model.getPart("rightArm").clear();
		model.getPart("leftArm").clear();
		model.getPart("rightLeg").clear();
		model.getPart("leftLeg").clear();
		var body=model.getPart("body");
		body.setTextureSize(256,256);
		func(body);
		return papa;
		
	}

	// +yの向き
	
	for(var i=16;i>=8;i-=0.1){ //80個
		models[0].push(_render(function(body){
			body.setTextureOffset(0,24);
			body.addBox(-8,20,-8,16,4,16);
			body.setTextureOffset(0,0);
			body.addBox(-4,8,-4,8,14,8);
			body.setTextureOffset(0,24);
			body.addBox(-8,i,-8,16,4,16);
			body.setTextureOffset(48,0);
			body.addBox(-5,i+2,-5,10,20-i,10);
		}));
	}

	// -yの向き

	for(var i=12;i<=20;i+=0.1){ //80個
		models[1].push(_render(function(body){
			body.setTextureOffset(0,24);
			body.addBox(-8,8,-8,16,4,16);
			body.setTextureOffset(0,0);
			body.addBox(-4,10,-4,8,14,8);
			body.setTextureOffset(0,24);
			body.addBox(-8,i,-8,16,4,16);
			body.setTextureOffset(48,0);
			body.addBox(-5,10,-5,10,i-8,10);
		}));
	}

	// +xの向き

	for(var i=-4;i<=4;i+=0.1){ //80個
		models[2].push(_render(function(body){
			body.setTextureOffset(0,60);
			body.addBox(-8,8,-8,4,16,16);
			body.setTextureOffset(0,44);
			body.addBox(-6,12,-4,14,8,8);
			body.setTextureOffset(0,60);
			body.addBox(i,8,-8,4,16,16);
			body.setTextureOffset(48,44);
			body.addBox(-6,11,-5,8+i,10,10);
		}));
	}

	// -xの向き

	for(var i=-8;i<=0;i+=0.1){ //80個
		models[3].push(_render(function(body){
			body.setTextureOffset(0,60);
			body.addBox(4,8,-8,4,16,16);
			body.setTextureOffset(0,44);
			body.addBox(-8,12,-4,14,8,8);
			body.setTextureOffset(0,60);
			body.addBox(-8-i,8,-8,4,16,16);
			body.setTextureOffset(48,44);
			body.addBox(-i-6,11,-5,12+i,10,10);
		}));
	}

	// +zの向き

	for(var i=-4;i<=4;i+=0.1){ //80個
		models[4].push(_render(function(body){
			body.setTextureOffset(0,116);
			body.addBox(-8,8,-8,16,16,4);
			body.setTextureOffset(0,92);
			body.addBox(-4,12,-6,8,8,14);
			body.setTextureOffset(0,116);
			body.addBox(-8,8,i,16,16,4);
			body.setTextureOffset(48+9-Math.ceil(i),92+9-Math.ceil(i));
			body.addBox(-5,11,-6,10,10,8+i);
		}));
	}
	// -zの向き

	for(var i=-8;i<=0;i+=0.1){ //80個
		models[5].push(_render(function(body){
			body.setTextureOffset(0,116);
			body.addBox(-8,8,4,16,16,4);
			body.setTextureOffset(0,92);
			body.addBox(-4,12,-8,8,8,14);
			body.setTextureOffset(0,116);
			body.addBox(-8,8,-8-i,16,16,4);
			body.setTextureOffset(48+5-Math.ceil(i),92+5-Math.ceil(i));
			body.addBox(-5,11,-i-6,10,10,12+i);
		}));
	}
	
	return models;
	
})();



var MOB_BLOCK=(function(){
	
	var mob_block_menber=[]; //モブブロックが配列で入る
	
	var PISTON={FOARD:1,BACK:-1}; //ピストンの進行方向
	
	//構造体的なサムシング
	var _mobBlock=function(direction,texture,entity,speed){
		this.x=Math.floor(Entity.getX(entity)); //x座標を表す
		this.y=Math.round(Entity.getY(entity)); //y座標を表す
		this.z=Math.floor(Entity.getZ(entity)); //z座標を表す
		this.direction=direction; //向きを表す [+y:0 -y:1 +x:2 -x:3 +z:4 -z:5]
		this.renderer=MOBBLOCK_RENDERER[direction]; //レンダラーの配列が入る
		this.texture=texture; //テクスチャ
		this.dimension=Player.getDimension();
		this.state=FC[this.x+","+this.y+","+this.z+","+Player.getDimension()].state; //ピストンの状態を表す [0~79]
		this.speed=FC[this.x+","+this.y+","+this.z+","+Player.getDimension()].speed; //スピードが入る [0でストップ]
		this.piston=FC[this.x+","+this.y+","+this.z+","+Player.getDimension()].piston; //ピストンの進行方向
		this.entity=entity; //エンティティ番号が入る
		_engineSpeedChange(this.x,this.y,this.z,FC[this.x+","+this.y+","+this.z+","+Player.getDimension()].speed);
	};
	
	//呼び出すとすべてのエンジンを進ませる
	function _engineWork(){
		for(var i=0;i<mob_block_menber.length;i++){
				
			FC[mob_block_menber[i].x+","+mob_block_menber[i].y+","+mob_block_menber[i].z+","+mob_block_menber[i].dimension].speed=mob_block_menber[i].speed;
			
			if(mob_block_menber[i].speed==0)
				continue;
			
			if(mob_block_menber[i].piston==PISTON.FOARD)
				mob_block_menber[i].state+=mob_block_menber[i].speed;
			else
				mob_block_menber[i].state-=mob_block_menber[i].speed;
				
			if(mob_block_menber[i].state>=79){
				mob_block_menber[i].state=79;
				mob_block_menber[i].piston=PISTON.BACK;
			}
			
			if(mob_block_menber[i].state<0){
				mob_block_menber[i].state=0;
				mob_block_menber[i].piston=PISTON.FOARD;
			}
			
			FC[mob_block_menber[i].x+","+mob_block_menber[i].y+","+mob_block_menber[i].z+","+mob_block_menber[i].dimension].state=mob_block_menber[i].state;
			FC[mob_block_menber[i].x+","+mob_block_menber[i].y+","+mob_block_menber[i].z+","+mob_block_menber[i].dimension].piston=mob_block_menber[i].piston;
			
			Entity.setRenderType(mob_block_menber[i].entity,MOBBLOCK_RENDERER[mob_block_menber[i].direction][mob_block_menber[i].state].renderType);
			
		}
	}
	
	//エンジンのスピード変更
	function _engineSpeedChange(x,y,z,speed){
		var mob_index=_serchMobBlockIndex(x,y,z);
		if(mob_index!=-1){
			mob_block_menber[mob_index].speed=speed;
			if(speed<3) mob_block_menber[mob_index].texture=mob_block_menber[mob_index].texture.slice(0,-5)+"0.png";
			else if(speed<6) mob_block_menber[mob_index].texture=mob_block_menber[mob_index].texture.slice(0,-5)+"1.png";
			else mob_block_menber[mob_index].texture=mob_block_menber[mob_index].texture.slice(0,-5)+"2.png";
			Entity.setMobSkin(mob_block_menber[mob_index].entity,mob_block_menber[mob_index].texture);
		}
	}
	
	//mobブロックの固定
	function _mobBlockModTick(){
		for(var i=0;i<mob_block_menber.length;i++){
			Entity.setPosition(mob_block_menber[i].entity,mob_block_menber[i].x+0.5,mob_block_menber[i].y,mob_block_menber[i].z+0.5);
			Entity.setVelY(mob_block_menber[i].entity,0.001); 
			Entity.setVelZ(mob_block_menber[i].entity,0.001); 
			Entity.setHealth(mob_block_menber[i].entity,10);
		}
	}
	
	//エンジンの追加
	function _addMobBlock(direction,texture,entity){
		mob_block_menber.push(new _mobBlock(direction,texture,entity));
		Entity.setMobSkin(entity,texture);
		Entity.setRenderType(entity,MOBBLOCK_RENDERER[direction][0].renderType);
		Entity.setCollisionSize(entity,0.5,0.8);
		Entity.setVelY(entity,0);
		Entity.setRot(entity,0,0);
	}
	
	//向きの変更
	function _changeDirection(x,y,z,direction){
		var mob_index=_serchMobBlockIndex(x,y,z);
		if(mob_index!=-1){
			mob_block_menber[mob_index].direction=direction;
			mob_block_menber[mob_index].renderer=MOBBLOCK_RENDERER[direction];
			Entity.setRenderType(mob_block_menber[mob_index].entity,MOBBLOCK_RENDERER[direction][mob_block_menber[mob_index].state].renderType);
		}
	}
	
	//mobブロックの消去
	function _removeMobBlock(x,y,z){
		var mob_index=_serchMobBlockIndex(x,y,z);
		if(mob_index!=-1){
			Entity.remove(mob_block_menber[mob_index].entity);
			mob_block_menber.splice(mob_index,1);
		}
	}
	
	//エンジンのスピード取得
	function _getSpeed(x,y,z){
		var mob_index=_serchMobBlockIndex(x,y,z);
		if(mob_index!=-1){
			return mob_block_menber[mob_index].speed;
		}
	}
	
	//座標からmobブロックを返してくれる
	function _serchMobBlockIndex(x,y,z){
		for(var i=0;i<mob_block_menber.length;i++){
		if(mob_block_menber[i].x==x && mob_block_menber[i].y==y && mob_block_menber[i].z==z){
				return i;
			}
		}
		return -1;
	}
	
	//mobブロック消去チェック
	function _checkMobBlock(){
		var i=0;
		while(i<mob_block_menber.length){
			clientMessage(getTile(mob_block_menber[i].x,mob_block_menber[i].y,mob_block_menber[i].z)+" "+i);
			if(getTile(mob_block_menber[i].x,mob_block_menber[i].y,mob_block_menber[i].z)!=woodengine.id){
				_removeMobBlock(mob_block_menber[i].x,mob_block_menber[i].y,mob_block_menber[i].z);
				i--;
			}
			i++;
		}
	
	
	
	
	}
	
	return {
		member:mob_block_menber,
		engineWork:_engineWork,
		engineSpeedChange:_engineSpeedChange,
		mobBlockModTick:_mobBlockModTick,
		addMobBlock:_addMobBlock,
		changeDirection:_changeDirection,
		removeMobBlock:_removeMobBlock,
		getSpeed:_getSpeed,
		serchMobBlockIndex:_serchMobBlockIndex,
		checkMobBlock:_checkMobBlock
	};
	
})();
