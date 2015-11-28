GUI.openGeneratorgui=function(x,y,z,d){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				if(display.widthPixels>display.heightPixels){var width=display.widthPixels;var height=display.heightPixels;}
				else{var width=display.heightPixels;var height=display.widthPixels;}

				gui.rightBody.setOrientation(android.widget.LinearLayout.HORIZONTAL);

				var left=new android.widget.LinearLayout(activity);
				left.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels*(9/40),display.heightPixels*(6/7)));
				left.setGravity(android.view.Gravity.CENTER);

				var center=new android.widget.LinearLayout(activity);
				center.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels*(10/40),display.heightPixels*(6/7)));
				center.setOrientation(android.widget.LinearLayout.VERTICAL);
				center.setGravity(android.view.Gravity.CENTER);

				var right=new android.widget.LinearLayout(activity);
				right.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels*(10/40),display.heightPixels*(6/7)));
				right.setOrientation(android.widget.LinearLayout.VERTICAL);
				right.setGravity(android.view.Gravity.CENTER);

				gui.rightBody.addView(left);
				gui.rightBody.addView(center);
				gui.rightBody.addView(right);

				makeslotbutton(x,y,z,d,display.widthPixels/8,"0",center,true,true);
				tempgui(x,y,z,d,display.widthPixels/15,display.heightPixels/2,left,"meter");
				tempgui(x,y,z,d,display.widthPixels/6,display.widthPixels/6,right,"fire");

			}catch(e){
				clientMessage("GUI.openGeneratorgui: "+e);
			}
		}
	}));
}

