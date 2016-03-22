
var meter=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/Meter.png")));
var meter_e=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/Meter_empty.png")));
var Srightbow=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/Srightbow.png")));
var rightbow=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/rightbow.png")));
var firegui=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/fire.png")));
var Sfiregui=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/Sfire.png")));
var Choice=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/choice.png")));
var topBarBackground=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/topBarBackground.png")));
var testbackg=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/topBarBackground.png")));
var bodyBackground=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/bodyBackground.png")));
var invBackground=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/invBackground.png")));
var itemBg=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/itemBackground.png")));
var ItemBg=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/itemsbg.png")));
var xButton=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/xButton.png")));
var xButtonPressed=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/xButton_.png")));
var pButton=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/pButton.png")));
var pButtonPressed=new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/custom-gui/pButton_.png")));

function cheakrecipe(id,dmg){
	if(id==0){
		return [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],0];
	}else if(id==22){
		return [[351,4],[351,4],[351,4],[351,4],[351,4],[351,4],[351,4],[351,4],[351,4],1];
	}else if(id==24){
		return [null,[12,0],[12,0],null,[12,0],[12,0],null,null,null,1];
	}else if(id==27){
		return [[266,0],null,[266,0],[266,0],[280,0],[266,0],[266,0],[331,0],[266,0],6];
	}else if(id==41){
		return [[266,0],[266,0],[266,0],[266,0],[266,0],[266,0],[266,0],[266,0],[266,0],1];
	}else if(id==42){
		return [[265,0],[265,0],[265,0],[265,0],[265,0],[265,0],[265,0],[265,0],[265,0],1];
	}else if(id==46){
		return [[289,0],[12,0],[289,0],[12,0],[289,0],[12,0],[289,0],[12,0],[289,0],1];
	}else if(id==47){
		return [[5,0],[5,0],[5,0],[340,0],[340,0],[340,0],[5,0],[5,0],[5,0],1];
	}else if(id==50){
		return [null,null,[263,0],null,null,[280,0],null,null,null,4];
	}else if(id==53){
		return [[50,0],null,null,[50,0],[50,0],null,[50,0],[50,0],[50,0],4];
	}else if(id==54){
		return [[5,0],[5,0],[5,0],[5,0],null,[5,0],[5,0],[5,0],[5,0],1];
	}else if(id==57){
		return [[264,0],[264,0],[264,0],[264,0],[264,0],[264,0],[264,0],[264,0],[264,0],1];
	}else if(id==58){
		return [null,[5,0],[5,0],null,[5,0],[5,0],null,[5,0],[5,0],1];
	}else if(id==61){
		return [[4,0],[4,0],[4,0],[4,0],[4,0],null,[4,0],[4,0],[4,0],[4,0],1];
	}else if(id==65){
		return [[280,0],null,[280,0],[280,0],[280,0],[280,0],[280,0],null,[280,0],2];
	}else if(id==66){
		return [[265,0],null,[265,0],[265,0],[280,0],[265,0],[265,0],null,[265,0],16];
	}else if(id==91){
		return [null,null,[86,0],null,null,[50,0],null,null,null,1];
	}else if(id==96){
		return [[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],null,null,null,2];
	}else if(id==98){
		return [null,[1,0],[1,0],null,[1,0],[1,0],null,null,null,4];
	}else if(id==101){
		return [[265,0],[265,0],[265,0],[265,0],[265,0],[265,0],null,null,null,16];
	}else if(id==102){
		return [[20,0],[20,0],[20,0],[20,0],[20,0],[20,0],null,null,null,16];
	}else if(id==103){
		return [[360,0],[360,0],[360,0],[360,0],[360,0],[360,0],[360,0],[360,0],[360,0],1];
	}else if(id==108){
		return [[45,0],null,null,[45,0],[45,0],null,[45,0],[45,0],[45,0],4];
	}else if(id==109){
		return [[98,0],null,null,[98,0],[98,0],null,[98,0],[98,0],[98,0],4];
	}else if(id==128){
		return [[24,0],null,null,[24,0],[24,0],null,[24,0],[24,0],[24,0],4];
	}else if(id==133){
		return [[388,0],[388,0],[388,0],[388,0],[388,0],[388,0],[388,0],[388,0],[388,0],1];
	}else if(id==134){
		return [[5,1],null,null,[5,1],[5,1],null,[5,1],[5,1],[5,1],4];
	}else if(id==135){
		return [[5,2],null,null,[5,2],[5,2],null,[5,2],[5,2],[5,2],4];
	}else if(id==136){
		return [[5,3],null,null,[5,3],[5,3],null,[5,3],[5,3],[5,3],4];
	}else if(id==139){
		return [[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],null,null,null,6];
	}else if(id==155){
		return [null,[406,0],[406,0],null,[406,0],[406,0],null,null,null,1];
	}else if(id==158){
		return [[5,0],[5,0],[5,0],null,null,null,null,null,null,6];
	}else if(id==163){
		return [[5,4],null,null,[5,4],[5,4],null,[5,4],[5,4],[5,4],4];
	}else if(id==164){
		return [[5,5],null,null,[5,5],[5,5],null,[5,5],[5,5],[5,5],4];
	}else if(id==170){
		return [[296,0],[296,0],[296,0],[296,0],[296,0],[296,0],[296,0],[296,0],[296,0],1];
	}else if(id==183){
		return [[280,0],[5,1],[280,0],[280,0],[5,1],[280,0],null,null,null,1];
	}else if(id==184){
		return [[280,0],[5,2],[280,0],[280,0],[5,2],[280,0],null,null,null,1];
	}else if(id==185){
		return [[280,0],[5,3],[280,0],[280,0],[5,3],[280,0],null,null,null,1];
	}else if(id==186){
		return [[280,0],[5,5],[280,0],[280,0],[5,5],[280,0],null,null,null,1];
	}else if(id==187){
		return [[280,0],[5,4],[280,0],[280,0],[5,4],[280,0],null,null,null,1];
	}else if(id==245){
		return [null,[4,0],[4,0],null,[4,0],[4,0],null,null,null,1];
	}else if(id==247){
		return [[265,0],[264,0],[265,0],[265,0],[264,0],[265,0],[265,0],[264,0],[265,0],1];
	}else if(id==256){
		return [null,[265,0],null,null,[280,0],null,null,[280,0],null,1];
	}else if(id==257){
		return [[265,0],[265,0],[265,0],null,[280,0],null,null,[280,0],null,1];
	}else if(id==258){
		return [[265,0],[265,0],null,[265,0],[280,0],null,null,[280,0],null,1];
	}else if(id==259){
		return [null,[265,0],null,null,null,[318,0],null,null,null,1];
	}else if(id==261){
		return [null,[280,0],[287,0],[280,0],null,[287,0],null,[280,0],[287,0],1];
	}else if(id==262){
		return [null,[318,0],null,null,[280,0],null,null,[288,0],null,4];
	}else if(id==267){
		return [null,[265,0],null,null,[265,0],null,null,[280,0],null,4];
	}else if(id==268){
		return [null,[5,0],null,null,[5,0],null,null,[280,0],null,4];
	}else if(id==269){
		return [null,[5,0],null,null,[280,0],null,null,[280,0],null,4];
	}else if(id==270){
		return [[5,0],[5,0],[5,0],null,[280,0],null,null,[280,0],null,1];
	}else if(id==271){
		return [[5,0],[5,0],null,[5,0],[280,0],null,null,[280,0],null,1];
	}else if(id==272){
		return [null,[4,0],null,null,[4,0],null,null,[280,0],null,4];
	}else if(id==273){
		return [null,[4,0],null,null,[280,0],null,null,[280,0],null,4];
	}else if(id==274){
		return [[4,0],[4,0],[4,0],null,[280,0],null,null,[280,0],null,1];
	}else if(id==275){
		return [[4,0],[4,0],null,[4,0],[280,0],null,null,[280,0],null,1];
	}else if(id==276){
		return [[264,0],null,null,null,[264,0],null,null,[280,0],null,1];
	}else if(id==277){
		return [[264,0],null,null,null,[280,0],null,null,[280,0],null,1];
	}else if(id==278){
		return [[264,0],[264,0],[264,0],null,[280,0],null,null,[280,0],null,1];
	}else if(id==279){
		return [[264,0],[264,0],null,[264,0],[280,0],null,null,[280,0],null,1];
	}else if(id==280){
		return [null,null,[5,0],null,null,[5,0],null,null,null,4];
	}else if(id==281){
		return [[5,0],null,[5,0],null,[5,0],null,null,null,null,4];
	}else if(id==282){
		return [null,[39,0],[40,0],null,null,[281,0],null,null,null,1];
	}else if(id==283){
		return [[266,0],null,null,null,[266,0],null,null,[280,0],null,1];
	}else if(id==284){
		return [[266,0],null,null,null,[266,0],null,null,[280,0],null,1];
	}else if(id==285){
		return [[266,0],[266,0],[266,0],null,[280,0],null,null,[280,0],null,1];
	}else if(id==286){
		return [[266,0],[266,0],null,[266,0],[280,0],null,null,[280,0],null,1];
	}else if(id==290){
		return [[5,0],[5,0],null,null,[280,0],null,null,[280,0],null,1];
	}else if(id==291){
		return [[4,0],[4,0],null,null,[280,0],null,null,[280,0],null,1];
	}else if(id==292){
		return [[265,0],[265,0],null,null,[280,0],null,null,[280,0],null,1];
	}else if(id==293){
		return [[264,0],[264,0],null,null,[280,0],null,null,[280,0],null,1];
	}else if(id==294){
		return [[266,0],[266,0],null,null,[280,0],null,null,[280,0],null,1];
	}else if(id==297){
		return [[296,0],[296,0],[296,0],null,null,null,null,null,null,1];
	}else if(id==298){
		return [[334,0],[334,0],[334,0],[334,0],null,[334,0],null,null,null,1];
	}else if(id==299){
		return [[334,0],null,[334,0],[334,0],null,[334,0],[334,0],[334,0],[334,0],1];
	}else if(id==300){
		return [[334,0],[334,0],[334,0],[334,0],null,[334,0],[334,0],null,[334,0],1];
	}else if(id==301){
		return [[334,0],null,[334,0],[334,0],null,[334,0],null,null,null,1];
	}else if(id==306){
		return [[265,0],[265,0],[265,0],[265,0],null,[265,0],null,null,null,1];
	}else if(id==307){
		return [[265,0],null,[265,0],[265,0],null,[265,0],[265,0],[265,0],[265,0],1];
	}else if(id==308){
		return [[265,0],[265,0],[265,0],[265,0],null,[265,0],[265,0],null,[265,0],1];
	}else if(id==309){
		return [[265,0],null,[265,0],[265,0],null,[265,0],null,null,null,1];
	}else if(id==310){
		return [[264,0],[264,0],[264,0],[264,0],null,[264,0],null,null,null,1];
	}else if(id==311){
		return [[264,0],null,[264,0],[264,0],null,[264,0],[264,0],[264,0],[264,0],1];
	}else if(id==312){
		return [[264,0],[264,0],[264,0],[264,0],null,[264,0],[264,0],null,[264,0],1];
	}else if(id==313){
		return [[264,0],null,[264,0],[264,0],null,[264,0],null,null,null,1];
	}else if(id==314){
		return [[266,0],[266,0],[266,0],[266,0],null,[266,0],null,null,null,1];
	}else if(id==315){
		return [[266,0],null,[266,0],[266,0],null,[266,0],[266,0],[266,0],[266,0],1];
	}else if(id==316){
		return [[266,0],[266,0],[266,0],[266,0],null,[266,0],[266,0],null,[266,0],1];
	}else if(id==317){
		return [[266,0],null,[266,0],[266,0],null,[266,0],null,null,null,1];
	}else if(id==321){
		return [[280,1],[280,1],[280,1],[280,1],[35,0],[280,1],[280,1],[280,1],[280,1],1];
	}else if(id==323){
		return [[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],null,[280,0],null,3];
	}else if(id==324){
		return [[5,0],[5,0],null,[5,0],[5,0],null,[5,0],[5,0],null,1];
	}else if(id==325&&dmg==0){
		return [[265,0],null,[265,0],null,[265,0],null,null,null,null,1];
	}else if(id==328){
		return [[265,0],null,[265,0],[265,0],[265,0],[265,0],null,null,null,1];
	}else if(id==399){
		return [[338,0],[338,0],[338,0],null,null,null,null,null,null,3];
	}else if(id==340){
		return [null,[339,0],null,null,[339,0],null,null,[339,0],null,1];
	}else if(id==345){
		return [null,[265,0],null,[265,0],[331,0],[265,0],null,[265,0],null,1];
	}else if(id==347){
		return [null,[266,0],null,[266,0],[331,0],[266,0],null,[266,0],null,1];
	}else if(id==351&&dmg==4){
		return [null,null,[22,0],null,null,null,null,null,null,9];
	}else if(id==353){
		return [null,null,[338,0],null,null,null,null,null,null,1];
	}else if(id==354){
		return [[325,1],[325,1],[325,1],[353,0],[344,0],[353,0],[296,0],[296,0],[296,0],1];
	}else if(id==355){
		return [[35,0],[35,0],[35,0],[5,0],[5,0],[5,0],null,null,null,1];
	}else if(id==357){
		return [[296,0],[351,3],[296,0],null,null,null,null,null,null,8];
	}else if(id==359){
		return [null,null,[265,0],null,[265,0],null,null,null,null,1];
	}else if(id==400){
		return [null,[86,0],[353,0],null,null,[344,0],null,null,null,1];
	}else if(id==459){
		return [[457,0],[457,0],[457,0],[457,0],[457,0],[457,0],null,null,null,1];
	}else{
		return false;
	}
}



GUI.menubutton=function(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			gui.menu=new android.widget.PopupWindow(display.widthPixels/17,display.heightPixels/9.6);
			var menubutton=new android.widget.Button(activity);
			menubutton.setText("R");
			menubutton.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					addonscroll();
				}
			}));
			gui.menu.setContentView(menubutton);
			gui.menu.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT,0,display.heightPixels/120);
		}
	}));
}

GUI.closemenuButton=function(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			try{
				if(gui.menu){
					gui.menu.dismiss();
					gui = {};
				}
			}catch(e){}
		}
	}));
}



GUI.menubutton();


function addonscroll(){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				var dya = new android.app.Dialog(activity); 
				var menu = new android.widget.LinearLayout(activity);
				var scroll = new android.widget.ScrollView(activity);
				scroll.addView(menu);
				for(i=0;i<addonScripts.length;i++){
					var txt=new android.widget.TextView(activity);
					txt.setText(addonScripts[i].version+"\n"+addonScripts[i].name+"\n"+addonScripts[i].creator+"\n"+addonScripts[i].description+"\n");
					menu.addView(txt);
				}
				var button=new android.widget.Button(activity);
				button.setText("reload");
				button.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						GUI.closemenuButton();
						reloadscript();
						print("Update");
					}
				}));
				menu.addView(button);
				dya.setTitle("Frequency Craft Addon");
				menu.setOrientation(android.widget.LinearLayout.VERTICAL);
				dya.setContentView(scroll);
				dya.show();
			}catch(emr){
				print(emr);
			}
		}
	}));
}
