GUI.addongui = {};

GUI.WrenchWin = function(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			try{
				if(Player.getCarriedItem()==wrench.id){
					if(gui.WrenchGUI){
						var x=Player.getPointedBlockX();
						var y=Player.getPointedBlockY();
						var z=Player.getPointedBlockZ();
						var d=Player.getDimension();
						var key = x+","+y+","+z+","+d;
						var blockId=Player.getPointedBlockId();
						var k=true;
						for(value in apidata){
							if(blockId==apidata[value].id){
								gui.CRun.setBackgroundDrawable(bodyBackground);
								GUI.addongui[value](gui.CRun,gui.infoText,FC[key]);
								k=false;
							}
						}
						if(blockId==solar.id){
							gui.CRun.setBackgroundDrawable(bodyBackground);
							if(FC[key].run==0) gui.CRun.setText("ON");
							else gui.CRun.setText("OFF");
							gui.infoText.setText("Solar  "+FC[key].fc+"/"+FC[key].max+"FC\n1FC/"+FC[key].speed+"tick");
							gui.CRun.setOnClickListener(new android.view.View.OnClickListener({
								onClick: function(viewarg){
									if(FC[key].run==0) FC[key].run=1;
									else FC[key].run=0;
								}
							}));
						}else if(blockId==digitalminner.id){
							gui.CRun.setBackgroundDrawable(bodyBackground);
							if(FC[key].run==0) gui.CRun.setText("ON");
							else gui.CRun.setText("OFF");
							gui.CRun.setOnClickListener(new android.view.View.OnClickListener({
								onClick: function(viewarg){
									if(FC[key].run==0) FC[key].run=1;
									else FC[key].run=0;
								}
							}));
							gui.infoText.setText("Digitalminner  "+FC[key].fc+"/"+FC[key].max+"FC");
						}else if(blockId==generator.id){
							gui.CRun.setBackgroundDrawable(bodyBackground);
							if(FC[key].run==0) gui.CRun.setText("ON");
							else gui.CRun.setText("OFF");
							gui.CRun.setOnClickListener(new android.view.View.OnClickListener({
								onClick: function(viewarg){
									if(FC[key].run==0) FC[key].run=1;
									else FC[key].run=0;
								}
							}));
							gui.infoText.setText("Generator  "+FC[key].fc+"/"+FC[key].max+"FC");
						}else if(blockId==ponp.id){
							gui.CRun.setBackgroundDrawable(bodyBackground);
							if(FC[key].run==0) gui.CRun.setText("ON");
							else gui.CRun.setText("OFF");
							gui.infoText.setText("ItemPonp  "+FC[key].speed+"tick/item");
							gui.CRun.setOnClickListener(new android.view.View.OnClickListener({
								onClick: function(viewarg){
									if(FC[key].run==0) FC[key].run=1;
									else FC[key].run=0;
								}
							}));
						}else if(blockId==automaticCrafting.id){
							gui.CRun.setBackgroundDrawable(bodyBackground);
							if(FC[key].run==0) gui.CRun.setText("ON");
							else gui.CRun.setText("OFF");
							gui.infoText.setText("automaticCrafting");
							gui.CRun.setOnClickListener(new android.view.View.OnClickListener({
								onClick: function(viewarg){
									if(FC[key].run==0) FC[key].run=1;
									else FC[key].run=0;
								}
							}));
						}else if(k){
							gui.CRun.setBackgroundDrawable(null);
							gui.CRun.setText("");
							gui.infoText.setText("");
						}
					}else{
						GUI.OpenWrenchWin();
					}
				}else if(gui.WrenchGUI){
					GUI.CloseWrenchWin();
				}
			}catch(e){
				//clientMessage("GUI.OpenWrenchWin: "+e);
			}
		}
	}));
}

GUI.CloseWrenchWin = function(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			if(gui.WrenchGUI){
				gui.WrenchGUI.dismiss();
				gui = {};
			}
		}
	}));
}

GUI.OpenWrenchWin = function(){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				if(display.widthPixels>display.heightPixels){var width=display.widthPixels;var height=display.heightPixels;}
				else{var width=display.heightPixels;var height=display.widthPixels;}
				gui.WrenchGUI=new android.widget.PopupWindow(display.widthPixels,display.heightPixels);
				gui.WrenchGUI.setWidth(display.widthPixels*(1/2));
				gui.WrenchGUI.setHeight(display.heightPixels*(1/10));
				var window=new android.widget.LinearLayout(activity);
				window.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				var left = new android.widget.LinearLayout(activity);
				left.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				left.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels*(3/8),display.heightPixels*(1/10)));
				left.setGravity(android.view.Gravity.RIGHT);
				var right = new android.widget.LinearLayout(activity);
				right.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				right.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels*(1/8),display.heightPixels*(1/10)));
				gui.CRun=new android.widget.Button(activity);
				gui.CRun.setText("");
				gui.CRun.setTextColor(android.graphics.Color.parseColor("#FFFFFF"));
				gui.CRun.setTypeface(font);
				gui.CRun.setPaintFlags(gui.CRun.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
				if(android.os.Build.VERSION.SDK_INT>=19) gui.CRun.setShadowLayer(1,Math.round((gui.CRun.getLineHeight()-4*display.density)/8),Math.round((gui.CRun.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				else gui.CRun.setShadowLayer(0.0001,Math.round((gui.CRun.getLineHeight()-4*display.density)/8),Math.round((gui.CRun.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				gui.CRun.setBackgroundDrawable(null);
				gui.infoText=new android.widget.TextView(activity);
				gui.infoText.setText("INFO");
				gui.infoText.setTextSize(16);
				gui.infoText.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
				gui.infoText.setTypeface(font);
				gui.infoText.setPaintFlags(gui.infoText.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
				if(android.os.Build.VERSION.SDK_INT>=19) gui.infoText.setShadowLayer(1,Math.round((gui.infoText.getLineHeight()-4*display.density)/8),Math.round((gui.infoText.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				else gui.infoText.setShadowLayer(0.0001,Math.round((gui.infoText.getLineHeight()-4*display.density)/8),Math.round((gui.infoText.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				window.addView(left);
				window.addView(right);
				left.addView(gui.infoText);
				right.addView(gui.CRun);
				gui.WrenchGUI.setContentView(window);
				gui.WrenchGUI.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,display.heightPixels*(1/10));
			}catch(e){
					//clientMessage("GUI.OpenWrenchWin: "+e);
			}
		}
	}));
}