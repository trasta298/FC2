GUI.openSolar=function(x,y,z,d){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				if(display.widthPixels>display.heightPixels){var width=display.widthPixels;var height=display.heightPixels;}
				else{var width=display.heightPixels;var height=display.widthPixels;}

				gui.rightBody.setOrientation(android.widget.LinearLayout.HORIZONTAL);

				makeslotbutton(x,y,z,d,display.widthPixels/8,"0",gui.rightBody,true,true);

			}catch(e){
				clientMessage("GUI.openSolar: "+e);
			}
		}
	}));
}

