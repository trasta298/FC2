function makeslotbutton(x,y,z,d,size,key,ly,intoItem,slotboo){
	//intoItem 直接アイテムを入れれるかどうか
	//slotboo スロットかどうか
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				var sid="i"+key;
				var data="d"+key;
				var cnt="c"+key;
				var mainA=new android.widget.FrameLayout(activity);
				mainA.setLayoutParams(new android.widget.LinearLayout.LayoutParams(size,size));
				mainA.setBackgroundDrawable(ItemBg);

				var mainB=new android.widget.LinearLayout(activity);
				mainB.setOrientation(android.widget.LinearLayout.VERTICAL);
				mainB.setLayoutParams(new android.widget.LinearLayout.LayoutParams(size,size));
				mainB.setGravity(android.view.Gravity.CENTER);

				gui[sid]=new android.widget.Button(activity);
				gui[sid].setTextColor(android.graphics.Color.parseColor("#FFFFFF"));
				gui[sid].setTypeface(font);
				gui[sid].setPaintFlags(gui[sid].getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
				if(android.os.Build.VERSION.SDK_INT>=19) gui[sid].setShadowLayer(1,Math.round((gui[sid].getLineHeight()-4*display.density)/8),Math.round((gui[sid].getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				else gui[sid].setShadowLayer(0.0001,Math.round((gui[sid].getLineHeight()-4*display.density)/8),Math.round((gui[sid].getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				gui[sid].setBackgroundDrawable(null);
				gui[sid].setLayoutParams(new android.view.ViewGroup.LayoutParams(size*7/11,size*7/11));
				gui[sid].setGravity(android.view.Gravity.CENTER);
//gui[sid]
				var SlotC=new android.widget.Button(activity);
				SlotC.setText("");
				SlotC.setTextColor(android.graphics.Color.parseColor("#FFFFFF"));
				SlotC.setTypeface(font);
				SlotC.setPaintFlags(SlotC.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
				if(android.os.Build.VERSION.SDK_INT>=19) SlotC.setShadowLayer(1,Math.round((SlotC.getLineHeight()-4*display.density)/8),Math.round((SlotC.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				else SlotC.setShadowLayer(0.0001,Math.round((SlotC.getLineHeight()-4*display.density)/8),Math.round((SlotC.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				SlotC.setBackgroundDrawable(null);
				SlotC.setLayoutParams(new android.view.ViewGroup.LayoutParams(size,size));

				gui[cnt]=new android.widget.TextView(activity);
				gui[cnt].setText("    ");
				gui[cnt].setTextSize(size/20);

				if(slotboo){
				GUI.itemsdv(gui[sid],FC[x+","+y+","+z+","+d][sid],FC[x+","+y+","+z+","+d][data]);
				if(FC[x+","+y+","+z+","+d][cnt]>0) gui[cnt].setText("    "+FC[x+","+y+","+z+","+d][cnt]);
			SlotC.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(selectedSlot.c!=null){
						if(selectedSlot.c==SlotC){
							var id = FC[x+","+y+","+z+","+d][sid];
							var dmg = FC[x+","+y+","+z+","+d][data];
							var count = FC[x+","+y+","+z+","+d][cnt];
							if(id!=0&&Player.addItem(id,dmg,count)){
								FC[x+","+y+","+z+","+d][sid]=0;
								FC[x+","+y+","+z+","+d][data]=0;
								FC[x+","+y+","+z+","+d][cnt]=0;
								GUI.itemsdv(gui[sid],0,0);
								gui[cnt].setText("    ");
								//FC[x+","+y+","+z+","+d].speed=20;
								updatenew(x,y,z,d);
							}
						}else{
							selectedSlot.c.setBackgroundDrawable(null);
							SlotC.setBackgroundDrawable(Choice);
							selectedSlot.b=intoItem;
							selectedSlot.a=gui[sid];
							selectedSlot.d=key;
							selectedSlot.c=SlotC;
							selectedSlot.e=gui[cnt];
						}
					}else{
						SlotC.setBackgroundDrawable(Choice);
						selectedSlot.b=intoItem;
						selectedSlot.a=gui[sid];
						selectedSlot.d=key;
						selectedSlot.c=SlotC;
						selectedSlot.e=gui[cnt];
					}
				}
			}));
			}

				ly.addView(mainA);
				mainA.addView(mainB);
				mainB.addView(gui[cnt]);
				mainB.addView(gui[sid]);
				mainA.addView(SlotC);

				return mainA;

			}catch(e){
				clientMessage("makeslotbutton: "+e);
			}
		}
	}));
}