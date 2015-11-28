function tempgui(x,y,z,d,w,h,ly,type){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				if(type=="meter"){
					var mainA=new android.widget.LinearLayout(activity);
					mainA.setLayoutParams(new android.widget.LinearLayout.LayoutParams(w,h));
					mainA.setBackgroundDrawable(meter_e);
					mainA.setGravity(android.view.Gravity.CENTER);
					gui.meter=new android.widget.Button(activity);
					gui.meter.setBackgroundDrawable(meter);
					gui.meter.setLayoutParams(new android.view.ViewGroup.LayoutParams(w,h));
					ly.addView(mainA);
					mainA.addView(gui.meter);
				}
				if(type=="fire"){
					var mainA=new android.widget.LinearLayout(activity);
					mainA.setLayoutParams(new android.widget.LinearLayout.LayoutParams(w,h));
					mainA.setBackgroundDrawable(Sfiregui);
					mainA.setGravity(android.view.Gravity.CENTER);
					gui.fire=new android.widget.Button(activity);
					gui.fire.setBackgroundDrawable(firegui);
					gui.fire.setLayoutParams(new android.view.ViewGroup.LayoutParams(w,h));
					ly.addView(mainA);
					mainA.addView(gui.fire);
				}
			}catch(e){
				clientMessage("makeslotbutton: "+e);
			}
		}
	}));
}