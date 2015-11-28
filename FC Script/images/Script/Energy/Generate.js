function Generate(tick,x,y,z,d,key){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				if(key.run==0){
					if(key.fire==0){
						if(key.i0==263){
							key.effect=1;
							key.fire=200;
							key.firemax=200;
							if(key.c0>1){
								key.c0--;
								if(FC[selectedSlot.g]==key) gui.c0.setText("    "+key.c0);
							}else{
								key.i0=0;
								key.d0=0;
								key.c0=0;
								if(FC[selectedSlot.g]==key) GUI.itemsdv(gui.i0,0,0);
								if(FC[selectedSlot.g]==key) gui.c0.setText("");
							}
						}
					}else{
						key.fire--;
						if(key.fc<key.max) key.fc+=key.effect;
					}
				}
			}catch(e){
				clientMessage("GUI.openGeneratorgui: "+e);
			}
		}
	}));
}