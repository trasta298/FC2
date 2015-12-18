function Setmachine(x,y,z,id,side){
	preventDefault();
	switch(side){
		case 0:y-=1;break;
		case 1:y+=1;break;
		case 2:z-=1;break;
		case 3:z+=1;break;
		case 4:x-=1;break;
		case 5:x+=1;break;
	}
	var dmg = 0;
	var rm = Entity.getYaw(Player.getEntity()) % 360;
	if(rm<-315||-45<=rm&&rm<45) dmg = 1;
	else if(-315<=rm&&rm<-225||45<=rm&&rm<135) dmg = 3;
	else if (-225<=rm&&rm<-135||135 <= rm && rm < 225 ) dmg = 0;
	else if ( -135 <= rm && rm < -45  || 225 <= rm )  dmg = 2;
	setTile(x,y,z,id,dmg);
	Level.playSound(x,y,z,"step.stone",3,15);
	if(Level.getGameMode()==0){
		count=Player.getCarriedItemCount();
		if(count==1) Entity.setCarriedItem(getPlayerEnt(),0,0,0);
		else Entity.setCarriedItem(getPlayerEnt(),id,count-1,dmg);
	}
	return [x,y,z];
}

function debug(string,type){
	switch(type){
		case 0 : clientMessage("Debug  "+string);break;
		case 1 : ModPE.showTipMessage("Debug  "+string);break;
		case 2 : print("Debug  "+string);break;
	}
}

function SetEngine(x,y,z,id,side){
	preventDefault();
	var dmg = 0;
	switch(side){
		case 0:y-=1;dmg=0;break;
		case 1:y+=1;dmg=1;break;
		case 2:z-=1;dmg=2;break;
		case 3:z+=1;dmg=3;break;
		case 4:x-=1;dmg=4;break;
		case 5:x+=1;dmg=5;break;
	}
	setTile(x,y,z,id,dmg);
	Level.playSound(x,y,z,"step.stone",3,15);
	if(Level.getGameMode()==0){
		count=Player.getCarriedItemCount();
		if(count==1) Entity.setCarriedItem(getPlayerEnt(),0,0,0);
		else Entity.setCarriedItem(getPlayerEnt(),id,count-1,dmg);
	}
	return [x,y,z];
}

function debug(string,type){
	switch(type){
		case 0 : clientMessage("Debug  "+string);break;
		case 1 : ModPE.showTipMessage("Debug  "+string);break;
		case 2 : print("Debug  "+string);break;
	}
}