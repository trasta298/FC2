GUI.openAutogui=function(x,y,z,d){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				if(display.widthPixels>display.heightPixels){var width=display.widthPixels;var height=display.heightPixels;}
				else{var width=display.heightPixels;var height=display.widthPixels;}

				gui.rightBody.setOrientation(android.widget.LinearLayout.HORIZONTAL);

				var left=new android.widget.LinearLayout(activity);
				left.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels*(9/40),display.heightPixels*(6/7)));
				left.setGravity(android.view.Gravity.CENTER);

				var right=new android.widget.LinearLayout(activity);
				right.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels*(20/40),display.heightPixels*(6/7)));
				right.setOrientation(android.widget.LinearLayout.VERTICAL);

				var topBar=new android.widget.LinearLayout(activity);
				topBar.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				topBar.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels*(20/40),display.heightPixels*(2/7)));
				topBar.setGravity(android.view.Gravity.BOTTOM|android.view.Gravity.CENTER_HORIZONTAL);

				var bodyin=new android.widget.LinearLayout(activity);
				bodyin.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				bodyin.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels*(20/40),display.heightPixels*(2/7)));
				bodyin.setGravity(android.view.Gravity.CENTER);

				var underBar=new android.widget.LinearLayout(activity);
				underBar.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				underBar.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.widthPixels*(20/40),display.heightPixels*(2/7)));
				underBar.setGravity(android.view.Gravity.TOP|android.view.Gravity.CENTER_HORIZONTAL);

				gui.rightBody.addView(left);
				gui.rightBody.addView(right);
				right.addView(topBar);
				right.addView(bodyin);
				right.addView(underBar);

				makeslotbutton(x,y,z,d,display.widthPixels/10,"0",topBar,true,false);
				makeslotbutton(x,y,z,d,display.widthPixels/10,"1",topBar,true,false);
				makeslotbutton(x,y,z,d,display.widthPixels/10,"2",topBar,true,false);
				makeslotbutton(x,y,z,d,display.widthPixels/10,"3",bodyin,true,false);
				makeslotbutton(x,y,z,d,display.widthPixels/10,"4",bodyin,true,false);
				makeslotbutton(x,y,z,d,display.widthPixels/10,"5",bodyin,true,false);
				makeslotbutton(x,y,z,d,display.widthPixels/10,"6",underBar,true,false);
				makeslotbutton(x,y,z,d,display.widthPixels/10,"7",underBar,true,false);
				makeslotbutton(x,y,z,d,display.widthPixels/10,"8",underBar,true,false);
				makeslotbutton(x,y,z,d,display.widthPixels/10,"9",left,true,true);
				updatenew(x,y,z,d);
			}catch(e){
				clientMessage("GUI.openSolar: "+e);
			}
		}
	}));
}

