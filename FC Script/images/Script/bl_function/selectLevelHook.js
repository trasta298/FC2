function selectLevelHook(){
	try{
		for(i=0;i<fcaddItemlist.length;i++) fcaddItemlist[i].add();
		addmachine();
	}catch(e){
		print("Not find TextureFile   "+e);
	}
	nowDid = -1;
	GUI.closemenuButton();
	reset();
	LoadData();
	for(key in apidata){
		Ee.push(apidata[key].id);
		if(!apidata[key].ss) Ec.push(apidata[key].id);
	}
	try{
		for(key in addon){
			for(value in addon[key]){
				if(value=="selectLevelHook") addon[key][value]();
			}
		}
	}catch(e){}
}

function reset(){
	grid = {};
	modtick=0;
}