function Solargenerate(tick,x,y,z,d,ops){
	if(ops.run==0){
		if(ops.i0==2833) ops.speed=15;
		if(tick%ops.speed==0){
			if(d==Player.getDimension()){
				if(ops.i0==89&&ops.fc<ops.max){
					ops.fc++;
				}else if(Level.getBrightness(x,y+1,z)>12&&Level.getTime()>0&&Level.getTime()<10000&&ops.fc<ops.max){
					ops.fc++;
				}else if(getTile(x,y+1,z)==89){
					ops.fc++;
				}
			}
		}
	}
}
