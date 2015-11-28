function leaveGame(){
	if(gui.WrenchGUI) GUI.CloseWrenchWin();
	SaveData();
	GUI.menubutton();
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="leaveGame") addon[key][value]();
			}
		}
	}catch(e){}
}