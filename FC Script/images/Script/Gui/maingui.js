var Inventory={};
var invItemButtons={};
var selectedLayout;
var playerInvItemButtons={};
var inventory={};
var calc=false;
var calcAmount=0;
var maxCalc=0;
var selectedSlot = {a:null,b:null,c:null,d:null,e:null,f:null,g:null};
//selectedSlot.a  アイテムの画像ボタン
//selectedSlot.b  直接アイテム投入の不可
//selectedSlot.c  選択枠のボタン
//selectedSlot.d  選択スロットのkey
//selectedSlot.e  アイテムの個数表示txt
//selectedSlot.f  開いてるguiのブロックのid
//selectedSlot.g  座標、ディメンション

GUI.modTick = function(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			try{
				if(gui.meter){
						gui.meter.setBackgroundDrawable(meter);
						var cs=android.graphics.Bitmap.createBitmap(gui.meter.getBackground().getBitmap().getWidth(),gui.meter.getBackground().getBitmap().getHeight(),android.graphics.Bitmap.Config.ARGB_8888);
						var comboImage=new android.graphics.Canvas(cs);
						var rectt=new android.graphics.Rect(0,0,gui.meter.getBackground().getBitmap().getWidth(),gui.meter.getBackground().getBitmap().getHeight()-FC[selectedSlot.g].fc*gui.meter.getBackground().getBitmap().getHeight()/FC[selectedSlot.g].max);
						var myPaint=new android.graphics.Paint();
						myPaint.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.CLEAR));
						comboImage.drawBitmap(meter.getBitmap(),0,0,null);
						myPaint.setStyle(android.graphics.Paint.Style.FILL);
						comboImage.drawRect(rectt,myPaint);
						gui.meter.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(cs));
				}
				if(gui.fire){
						gui.fire.setBackgroundDrawable(firegui);
						var cs=android.graphics.Bitmap.createBitmap(gui.fire.getBackground().getBitmap().getWidth(),gui.fire.getBackground().getBitmap().getHeight(),android.graphics.Bitmap.Config.ARGB_8888);
						var comboImage=new android.graphics.Canvas(cs);
						var rectt=new android.graphics.Rect(0,0,gui.fire.getBackground().getBitmap().getWidth(),gui.fire.getBackground().getBitmap().getHeight()-FC[selectedSlot.g].fire*gui.fire.getBackground().getBitmap().getHeight()/FC[selectedSlot.g].firemax);
						var myPaint=new android.graphics.Paint();
						myPaint.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.CLEAR));
						comboImage.drawBitmap(firegui.getBitmap(),0,0,null);
						myPaint.setStyle(android.graphics.Paint.Style.FILL);
						comboImage.drawRect(rectt,myPaint);
						gui.fire.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(cs));
				}
				if(calc&& calcAmount<maxCalc&&selectedSlot.c!=null) calcAmount++;
				if(selectedLayout && calcAmount>=4 && maxCalc>0){
					var cs=android.graphics.Bitmap.createBitmap((display.widthPixels/4)/3,(display.widthPixels/4)/3,android.graphics.Bitmap.Config.ARGB_8888);
					var comboImage=new android.graphics.Canvas(cs);
					var paint=new android.graphics.Paint();
					comboImage.drawBitmap(new android.graphics.Bitmap.createScaledBitmap(itemBg.getBitmap(),(display.widthPixels/4)/3,(display.widthPixels/4)/3,false),0,0,null);
					paint.setColor(android.graphics.Color.GREEN);
					comboImage.drawRect(0,0,((calcAmount-4)/maxCalc)*((display.widthPixels/4)/3),(display.widthPixels/4)/30,paint);
					selectedLayout.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(cs));
				}
			}catch(e){
				print(e);
			}
		}
	}));
}

function updatenew(x,y,z,d){
	if(selectedSlot.f==automaticCrafting.id){
		var re;
		re=cheakrecipe(FC[x+","+y+","+z+","+d].i9,FC[x+","+y+","+z+","+d].d9);
		if(!re){return;}
		try{
			if(re[0]!=null) GUI.itemsdv(gui.i0,re[0][0],re[0][1]);
			if(re[1]!=null) GUI.itemsdv(gui.i1,re[1][0],re[1][1]);
			if(re[2]!=null) GUI.itemsdv(gui.i2,re[2][0],re[2][1]);
			if(re[3]!=null) GUI.itemsdv(gui.i3,re[3][0],re[3][1]);
			if(re[4]!=null) GUI.itemsdv(gui.i4,re[4][0],re[4][1]);
			if(re[5]!=null) GUI.itemsdv(gui.i5,re[5][0],re[5][1]);
			if(re[6]!=null) GUI.itemsdv(gui.i6,re[6][0],re[6][1]);
			if(re[7]!=null) GUI.itemsdv(gui.i7,re[7][0],re[7][1]);
			if(re[8]!=null) GUI.itemsdv(gui.i8,re[8][0],re[8][1]);
		}catch(e){
			clientMessage("set recipe ERROR#"+e);
		}
	}
}


GUI.openInventory=function(name,x,y,z,d){
	preventDefault();
	selectedSlot.g=x+","+y+","+z+","+d;
	if(gui.inventoryGUI) return;
	invItemButtons={};
	playerInvItemButtons={};
	playerInvItemButtons.length=function(){
		var i=0;
		for(slot in playerInvItemButtons) i++;
		return i-1;
	}
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				if(display.widthPixels>display.heightPixels){var width=display.widthPixels;var height=display.heightPixels;}
				else{var width=display.heightPixels;var height=display.widthPixels;}
				gui.inventoryGUI=new android.widget.PopupWindow(display.widthPixels,display.heightPixels);
				var window=new android.widget.LinearLayout(activity);
				window.setOrientation(android.widget.LinearLayout.VERTICAL);
				var topBar=new android.widget.LinearLayout(activity);
				topBar.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				topBar.setBackgroundDrawable(topBarBackground);
				topBar.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels,display.heightPixels*(1/7)));
				var body=new android.widget.LinearLayout(activity);
				body.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				body.setBackgroundDrawable(bodyBackground);
				body.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels,display.heightPixels*(6/7)));
				var leftBody=new android.widget.LinearLayout(activity);
				leftBody.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				leftBody.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels*(11/40),display.heightPixels*(6/7)));
				leftBody.setGravity(android.view.Gravity.CENTER);
				gui.rightBody=new android.widget.LinearLayout(activity);
				gui.rightBody.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels*(29/40),display.heightPixels*(6/7)));
				gui.rightBody.setGravity(android.view.Gravity.CENTER);

				var leftScrollView=new android.widget.ScrollView(activity);
				leftScrollView.setBackgroundDrawable(invBackground);
				leftScrollView.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels/4,display.heightPixels/1.23));
				var TopBar=new android.widget.LinearLayout(activity);
				TopBar.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				TopBar.setBackgroundDrawable(topBarBackground);
				TopBar.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels,display.heightPixels*(1/7)));
				TopBar.setGravity(android.view.Gravity.CENTER);
				var TopBarText=new android.widget.TextView(activity);
				TopBarText.setText(name);
				TopBarText.setTextSize(16);
				TopBarText.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
				TopBarText.setTypeface(font);
				TopBarText.setPaintFlags(TopBarText.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
				if(android.os.Build.VERSION.SDK_INT>=19) TopBarText.setShadowLayer(1,Math.round((TopBarText.getLineHeight()-4*display.density)/8),Math.round((TopBarText.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				else TopBarText.setShadowLayer(0.0001,Math.round((TopBarText.getLineHeight()-4*display.density)/8),Math.round((TopBarText.getLineHeight()-4*display.density)/8),android.graphics.Color.parseColor("#FF292929"));
				TopBar.addView(TopBarText);
				topBar.addView(TopBar);
				window.addView(topBar);
				leftScrollView.addView(GUI.showInventory("player",36,Player.getItems(),x,y,z,d));
				leftBody.addView(leftScrollView);
				body.addView(leftBody);
				body.addView(gui.rightBody);
				window.addView(body);
				gui.inventoryGUI.setContentView(window);
				gui.inventoryGUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				gui.inventoryGUI.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.TOP | android.view.Gravity.LEFT,0,0);
			}catch(e){
				clientMessage("GUI.openInventory: "+e);
			}
		}
	}));
	GUI.closeButton();
}

Player.setInventorySlotCount=function(slot,amt){
	if(playerInvItemButtons[slot][2]+amt==0){
		for(var i=9;i<45;i++){
			if(Player.getInventorySlot(i)==playerInvItemButtons[slot][0] && Player.getInventorySlotData(i)==playerInvItemButtons[slot][1] && Player.getInventorySlotCount(i)==playerInvItemButtons[slot][2]){
				net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetInventorySlot(i,0,0,0);
				break;
			}
		}
		playerInvItemButtons[slot][0]=0;
		playerInvItemButtons[slot][1]=0;
		playerInvItemButtons[slot][2]=0;
		playerInvItemButtons[slot][3].setText("  ");
		playerInvItemButtons[slot][4].setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/items/0_0.png"))));
	}else{
		for(var i=9;i<45;i++){
			if(Player.getInventorySlot(i)==playerInvItemButtons[slot][0] && Player.getInventorySlotData(i)==playerInvItemButtons[slot][1] && Player.getInventorySlotCount(i)==playerInvItemButtons[slot][2]){
				net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetInventorySlot(i,Player.getInventorySlot(i),Player.getInventorySlotCount(i)+amt,Player.getInventorySlotData(i));
				break;
			}
		}	
		playerInvItemButtons[slot][2]=playerInvItemButtons[slot][2]+amt;
		playerInvItemButtons[slot][3].setText("  "+playerInvItemButtons[slot][2]);
	}
}

GUI.showInventory=function(invType,n,itemz,x,y,z,d){
	var items=[];
	for(i in itemz) items.push(itemz[i]);
	var mainLayout=new android.widget.LinearLayout(activity);
	mainLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
	var row=[];
	for(var i=0;i<Math.round((n/3)-0.5);i++)
		row.push(new android.widget.LinearLayout(activity));
	if(Math.round((n/3)-0.5)!=n/3)
		row.push(new android.widget.LinearLayout(activity));
	for(var i=0;i<row.length;i++){
		row[i].setOrientation(android.widget.LinearLayout.HORIZONTAL);
		row[i].setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels/4,(display.widthPixels/4)/3));
		}
	var noItmz=row.length-1;
	if(n-Math.round((n/3)-0.5)*3==0)
		noItmz++;
	for(var i=0;i<noItmz;i++){
		row[i].addView(GUI.createButton(i*3+0,items[i*3+0][0],items[i*3+0][1],items[i*3+0][2],invType,x,y,z,d));
		row[i].addView(GUI.createButton(i*3+1,items[i*3+1][0],items[i*3+1][1],items[i*3+1][2],invType,x,y,z,d));
		row[i].addView(GUI.createButton(i*3+2,items[i*3+2][0],items[i*3+2][1],items[i*3+2][2],invType,x,y,z,d));
	}
	for(var i=0;i<n-Math.round((n/3)-0.5)*3;i++)
		row[row.length-1].addView(GUI.createButton((row.length-1)*3+i,items[(row.length-1)*3+i][0],items[(row.length-1)*3+i][1],items[(row.length-1)*3+i][2],invType,x,y,z,d));
	for(var i=0;i<row.length;i++) mainLayout.addView(row[i]);
	return mainLayout;
}

GUI.itemsdv = function(where,id,dmg){
	try{where.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/items/"+id+"_"+dmg+".png"))));}
	catch(err){where.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/items/no-id.png"))));}
}


GUI.createButton=function(slot,id,dmg,amt,invType,x,y,z,d){
	var miniLayout=new android.widget.LinearLayout(activity);
	miniLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
	miniLayout.setBackgroundDrawable(itemBg);
	miniLayout.setLayoutParams(new android.widget.LinearLayout.LayoutParams((display.widthPixels/4)/3,(display.widthPixels/4)/3));
	miniLayout.setGravity(android.view.Gravity.CENTER);
	var btn=new android.widget.Button(activity);
	GUI.itemsdv(btn,id,dmg);
	btn.setLayoutParams(new android.widget.LinearLayout.LayoutParams((display.widthPixels/4)/3-(display.widthPixels/4)/12,(display.widthPixels/4)/3-(display.widthPixels/4)/12));
	btn.setOnTouchListener(new android.view.View.OnTouchListener({
		onTouch: function(v,motionEvent){
			var action=motionEvent.getActionMasked();
			if(action==android.view.MotionEvent.ACTION_DOWN){
				if(!calc && ((invType=="player" && playerInvItemButtons[slot][2]>0) || (invType=="inventory" && invItemButtons[slot][2]>0))){
					if(invType=="player") maxCalc=playerInvItemButtons[slot][2]+4;
					else maxCalc=invItemButtons[slot][2]+4;
					calcAmount=0;
					calc=true;
					selectedLayout=miniLayout;
					}
				}
			if(action==android.view.MotionEvent.ACTION_CANCEL || action==android.view.MotionEvent.ACTION_UP){
				selectedLayout=null;
				miniLayout.setBackgroundDrawable(itemBg);
				var rect=new android.graphics.Rect(v.getLeft(),v.getTop(),v.getRight(),v.getBottom());
				if(rect.contains(v.getLeft()+motionEvent.getX(),v.getTop()+motionEvent.getY())){
					if(invType=="player" && calcAmount>0){
						if(calcAmount>4) calcAmount-=4;
						else calcAmount=1;
						id=Player.getInventorySlot(slot+9);
						dmg=Player.getInventorySlotData(slot+9);
						amt=Player.getInventorySlotCount(slot+9);
						var k=InventoryaddItems(id,dmg,calcAmount,x,y,z,d);
						if(k>0) Player.setInventorySlotCount(slot,-k);
					}else if(invType=="inventory" && calcAmount>0){
						if(calcAmount>4) calcAmount-=4;
						else calcAmount=1;
						//if(Player.addItem(inventory[String(invID)].items[slot][0],inventory[String(invID)].items[slot][1],calcAmount)) Inventory.setInventorySlotCount(slot,-calcAmount);
					}
					calc=false;
					calcAmount=0;
					maxCalc=0;
					}
				calc=false;
				calcAmount=0;
				maxCalc=0;
				}
			if(action==android.view.MotionEvent.ACTION_MOVE){
				var rect=new android.graphics.Rect(v.getLeft(),v.getTop(),v.getRight(),v.getBottom());
				if(rect.contains(v.getLeft()+motionEvent.getX(),v.getTop()+motionEvent.getY())){
					if(v.getTag()==false){
						closeButton.setTag(true);
						closeButton.setBackgroundDrawable(xButtonPressed);
					}
				}else{
					if(v.getTag()==true){
						closeButton.setTag(false);
						closeButton.setBackgroundDrawable(xButton);
					}
				}
			}
			return false;
		}
	}));
	var txt=new android.widget.TextView(activity);
	if(amt>0) txt.setText("  "+amt);
	else txt.setText("   ");
	txt.setTextSize(8);
	miniLayout.addView(txt);
	miniLayout.addView(btn);
	if(invType=="player")
		playerInvItemButtons[slot]=[id,dmg,amt,txt,btn];
	else
		invItemButtons[slot]=[id,dmg,amt,txt,btn];
	return miniLayout;
}


Player.addItem=function(id,dmg,amt){
	if(Player.full(id,dmg,amt))
		return false;
	for(var slot=0;slot<playerInvItemButtons.length();slot++){
		if((playerInvItemButtons[slot][0]==id && playerInvItemButtons[slot][1]==dmg && playerInvItemButtons[slot][2]+amt<=64) || playerInvItemButtons[slot][2]==0){
			for(var i=9;i<45;i++){
				if((Player.getInventorySlot(i)==id && Player.getInventorySlotData(i)==dmg && Player.getInventorySlotCount(i)+amt<=64) || Player.getInventorySlot(i)==0){
					net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetInventorySlot(i,id,Player.getInventorySlotCount(i)+amt,dmg);
					break;
				}
			}
			playerInvItemButtons[slot][0]=id;
			playerInvItemButtons[slot][1]=dmg;
			playerInvItemButtons[slot][2]+=amt;
			playerInvItemButtons[slot][3].setText("  "+playerInvItemButtons[slot][2]);
			try{playerInvItemButtons[slot][4].setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/items/"+id+"_"+dmg+".png"))));}
			catch(err){playerInvItemButtons[slot][4].setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/items/no-id.png"))));}
			return true;
		}
	}
	return false;
}

Player.full=function(id,dmg,amt){
	var inv=Player.getItems();
	for(i in inv){
		if((inv[i][0]==id && inv[i][1]==dmg && inv[i][2]+amt<=64) || inv[i][2]==0)
			return false;
	}
	return true;
}

function InventoryaddItems(id,dmg,count,x,y,z,d){
	try{
	var r = 0;
	if(selectedSlot.d!=null){
		var cid = "i"+selectedSlot.d;
		var cdmg = "d"+selectedSlot.d;
		var ccount = "c"+selectedSlot.d;
		if(selectedSlot.b){
			if(FC[x+","+y+","+z+","+d][cid]==0||(FC[x+","+y+","+z+","+d][cid]==id&&FC[x+","+y+","+z+","+d][cdmg]==dmg)){
				if(FC[x+","+y+","+z+","+d][ccount]+count<=64){
					FC[x+","+y+","+z+","+d][cid]=id;
					FC[x+","+y+","+z+","+d][cdmg]=dmg;
					FC[x+","+y+","+z+","+d][ccount]+=count;
					r = count;
				}else if(FC[x+","+y+","+z+","+d][ccount]!=64){
					r = 64-FC[x+","+y+","+z+","+d][ccount];
					FC[x+","+y+","+z+","+d][ccount]=64;
				}else{
					r = 0;
				}
			}else{
				r=0;
			}
		}
	}
	GUI.itemsdv(selectedSlot.a,FC[x+","+y+","+z+","+d][cid],FC[x+","+y+","+z+","+d][cdmg]);
	selectedSlot.e.setText("    "+FC[x+","+y+","+z+","+d][ccount]);
	updatenew(x,y,z,d);
	return r;
	}catch(e){
		clientMessage("Inventory.addItems: "+e);
	}
}

Player.getItems=function(){
	var inv={};
	for(var i=9;i<45;i++){
		if(Player.getInventorySlot(i)!=0)
			inv[i]=[Player.getInventorySlot(i),Player.getInventorySlotData(i),Player.getInventorySlotCount(i)];
		else
			inv[i]=[0,0,0];
	}
	return inv;
}


GUI.closeButton=function(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			gui.close=new android.widget.PopupWindow(display.widthPixels/17,display.heightPixels/9.6);
			var closeButton=android.widget.Button(activity);
			closeButton.setBackgroundDrawable(xButton);
			closeButton.setOnTouchListener(new android.view.View.OnTouchListener(){
				onTouch: function(v,motionEvent){
					var action=motionEvent.getActionMasked();
					if(action==android.view.MotionEvent.ACTION_DOWN)
						closeButton.setBackgroundDrawable(xButtonPressed);
					if(action==android.view.MotionEvent.ACTION_CANCEL || action==android.view.MotionEvent.ACTION_UP){
						closeButton.setBackgroundDrawable(xButton);
						var rect=new android.graphics.Rect(v.getLeft(),v.getTop(),v.getRight(),v.getBottom());
						if(rect.contains(v.getLeft()+motionEvent.getX(),v.getTop()+motionEvent.getY()))
							Level.playSoundEnt(Player.getEntity(),"random.click",100,30);
					}
					if(action==android.view.MotionEvent.ACTION_MOVE){
						var rect=new android.graphics.Rect(v.getLeft(),v.getTop(),v.getRight(),v.getBottom());
						if(rect.contains(v.getLeft()+motionEvent.getX(),v.getTop()+motionEvent.getY())){
							if(v.getTag()==false){
								closeButton.setTag(true);
								closeButton.setBackgroundDrawable(xButtonPressed);
							}
						}else{
							if(v.getTag()==true){
								closeButton.setTag(false);
								closeButton.setBackgroundDrawable(xButton);
							}
						}
					}
					return false;
				}
			});
			closeButton.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					GUI.closeInventory();
					GUI.closeCloseButton();
				}
			}));
			gui.close.setContentView(closeButton);
			gui.close.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			gui.close.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.TOP | android.view.Gravity.RIGHT,0,display.heightPixels/120);
		}
	}));
}

GUI.closeInventory=function(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			if(gui.inventoryGUI){
				gui.inventoryGUI.dismiss();
			}
		}
	}));
}

GUI.closeCloseButton=function(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			if(gui.close){
				gui.close.dismiss();
				selectedSlot = {a:null,b:null,c:null,d:null,e:null,f:null,g:null};
				gui = {};
			}
		}
	}));
}

