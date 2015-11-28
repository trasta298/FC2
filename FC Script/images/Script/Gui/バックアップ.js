GUI.openSolar=function(x,y,z,d){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				selectedSlot.b=176;
				if(display.widthPixels>display.heightPixels){var width=display.widthPixels;var height=display.heightPixels;}
				else{var width=display.heightPixels;var height=display.widthPixels;}

				var mainA=new android.widget.FrameLayout(activity);
				mainA.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels/7,display.widthPixels/7));
				mainA.setBackgroundDrawable(ItemBg);

				var mainB=new android.widget.LinearLayout(activity);
				mainB.setOrientation(android.widget.LinearLayout.VERTICAL);
				mainB.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels/7,display.widthPixels/7));
				mainB.setGravity(android.view.Gravity.CENTER);

				var slotA=new android.widget.Button(activity);
				slotA.setTextColor(android.graphics.Color.parseColor("#FFFFFF"));
				slotA.setTypeface(font);
				slotA.setPaintFlags(slotA.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
				if(android.os.Build.VERSION.SDK_INT>=19) slotA.setShadowLayer(1,Math.round((slotA.getLineHeight()-4*display.density)/8),Math.round((slotA.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				else slotA.setShadowLayer(0.0001,Math.round((slotA.getLineHeight()-4*display.density)/8),Math.round((slotA.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				slotA.setBackgroundDrawable(null);
				slotA.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels/11,display.widthPixels/11));
				slotA.setGravity(android.view.Gravity.CENTER);
				GUI.itemsdv(slotA,FC[x+","+y+","+z+","+d].i0,FC[x+","+y+","+z+","+d].d0);

				var CoA=new android.widget.Button(activity);
				CoA.setText("");
				CoA.setTextColor(android.graphics.Color.parseColor("#FFFFFF"));
				CoA.setTypeface(font);
				CoA.setPaintFlags(CoA.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
				if(android.os.Build.VERSION.SDK_INT>=19) CoA.setShadowLayer(1,Math.round((CoA.getLineHeight()-4*display.density)/8),Math.round((CoA.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				else CoA.setShadowLayer(0.0001,Math.round((CoA.getLineHeight()-4*display.density)/8),Math.round((CoA.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				CoA.setBackgroundDrawable(null);
				CoA.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels/7,display.widthPixels/7));

				var txtA=new android.widget.TextView(activity);
				if(FC[x+","+y+","+z+","+d].c0>0) txtA.setText("    "+FC[x+","+y+","+z+","+d].c0);
				else txtA.setText("    ");
				txtA.setTextSize(14);

			CoA.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(selectedSlot.c!=null){
						if(selectedSlot.c==CoA){
							var id = FC[x+","+y+","+z+","+d].i0;
							var dmg = FC[x+","+y+","+z+","+d].d0;
							var count = FC[x+","+y+","+z+","+d].c0;
							if(id!=0&&Player.addItem(id,dmg,count)){
								FC[x+","+y+","+z+","+d].i0=0;
								FC[x+","+y+","+z+","+d].d0=0;
								FC[x+","+y+","+z+","+d].c0=0;
								GUI.itemsdv(slotA,0,0);
								txtA.setText("    ");
								FC[x+","+y+","+z+","+d].speed=20;
							}
						}else{
							selectedSlot.c.setBackgroundDrawable(null);
							CoA.setBackgroundDrawable(Choice);
							selectedSlot.a=slotA;
							selectedSlot.d="0";
							selectedSlot.c=CoA;
							selectedSlot.e=txtA;
						}
					}else{
						CoA.setBackgroundDrawable(Choice);
						selectedSlot.a=slotA;
						selectedSlot.d="0";
						selectedSlot.c=CoA;
						selectedSlot.e=txtA;
					}
				}
			}));

				gui.rightBody.addView(mainA);
				mainA.addView(mainB);
				mainB.addView(txtA);
				mainB.addView(slotA);
				mainA.addView(CoA);

			}catch(e){
				clientMessage("GUI.openSolar: "+e);
			}
		}
	}));
}

