// © 2015 trasta298

// FC-2 mod by trasta298

//無断転載、転用は禁止です

// Twitter @trasta298

// This mod use BetterStorage Mod by DAW330073


var loadedScripts =[
	"version.js",
	"var.js",
	"main.js",
	"mob/drone.js",
	"mob/Engine_mob.js",
	"Energy/Energy.js",
	"Energy/solar.js",
	"Energy/Automatic.js",
	"Energy/Generate.js",
	"Energy/EL.js",
	"bl_function/newLevel.js",
	"bl_function/useItem.js",
	"bl_function/explodeHook.js",
	"bl_function/leaveGame.js",
	"bl_function/modTick.js",
	"bl_function/selectLevelHook.js",
	"bl_function/entityRemovedHook.js",
	"bl_function/entityAddedHook.js",
	"bl_function/destroyBlock.js",
	"bl_function/startDestroyBlock.js",
	"bl_function/attackHook.js",
	"bl_function/chatHook.js",
	"bl_function/deathHook.js",
	"bl_function/levelEventHook.js",
	"bl_function/blockEventHook.js",
	"bl_function/chatReceiveHook.js",
	"bl_function/eatHook.js",
	"fcBlock/fcBlock.js",
	"fcBlock/Solar.js",
	"fcBlock/Pipe.js",
	"fcBlock/Ponp.js",
	"fcBlock/goldPipe.js",
	"fcBlock/wire.js",
	"fcBlock/digitalminner.js",
	"fcBlock/TinOre.js",
	"fcBlock/Nickelore.js",
	"fcBlock/AutomaticCrafting.js",
	"fcBlock/CopperOre.js",
	"fcBlock/QuartzOre.js",
	"fcBlock/ApatiteOre.js",
	"fcBlock/Generator.js",
	"fcBlock/IndustrialBlock.js",
	"fcBlock/Marker.js",
	"fcBlock/WoodEngine.js",
	"fcItem/fcItem.js",
	"fcItem/wrench.js",
	"fcItem/Nickel.js",
	"fcItem/Tin.js",
	"fcItem/Apatite.js",
	"fcItem/Copper.js",
	"fcItem/Quartz.js",
	"fcItem/Cupronickel.js",
	"fcItem/Tinplate.js",
	"fcItem/Icchip.js",
	"fpi/flowItem.js",
	"Gui/GUI.js",
	"Gui/WrenchWin.js",
	"Gui/maingui.js",
	"Gui/SolarGui.js",
	"Gui/slotbutton.js",
	"Gui/Autogui.js",
	"Gui/Generatorgui.js",
	"Gui/tempgui.js",
	"API/api.js",
	"fc2_main.js",
	"recipe.js",
	"geneore.js",
	"save.js",
	"FC.js",
	"Chest.js",
	"font.js"
];

var dir = "/data/data/net.zhuoweizhang.mcpelauncher.pro/app_modscripts/";
var dir2 = "/data/data/net.zhuoweizhang.mcpelauncher/app_modscripts/";

var codescript="";

var fileScriptname = "fc2_main.js";

function scriptTostring(is){
	var br = null;
	var sb = new java.lang.StringBuilder();
	var line;
	try{
		br = new java.io.BufferedReader(new java.io.InputStreamReader(is));
		while((line=br.readLine()) != null){
			sb.append(line+"\n");
		}
	}catch(e){
		//print(e);
	}finally{
		if (br != null){
			try {
				br.close();
			}catch (e){
				//print(e);
			}
		}
		return sb.toString();
	}
}

function loadjs(filename){
	try{
		var s=ModPE.openInputStreamFromTexturePack("images/Script/"+filename);
		if(s==null){
			print("no file: "+filename);
			return false;
		}
		var e=scriptTostring(s);
		codescript+=e;
		//print("add: "+filename);
		return true;
	}catch(e){
			return false;
	}
}


var addons=[];
function loadaddon(){
	var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/FCAddon";
	if(!java.io.File(path).exists()) java.io.File(path).mkdirs();
	var file = new java.io.File(path).listFiles();
	for(var i = 0; i < file.length; i++){
		if(file[i].isDirectory()){
			var custom=file[i].listFiles();
			addons.push(custom);
		}
	}
	loading();
}

function loading(){
	for(var i = 0; i < addons.length; i++){
		for(var t = 0; t < addons[i].length; t++){
			if(addons[i][t].isFile()&&addons[i][t].getName().endsWith(".js")) Loadaddon(addons[i][t]);
			if(addons[i][t].isFile()&&addons[i][t].getName().endsWith(".fcdata")) Loaddata(addons[i][t]);
		}
	}
}

function Loaddata(file){
	try{
			var savefile="";
			var fst=new java.io.FileInputStream(file);
			var str=new java.lang.StringBuilder();
			var ch;
			while((ch=fst.read())!=-1){
				str.append(java.lang.Character(ch));
				savefile=String(str.toString());
			}
		var version="'";
		version+=savefile.split("\n")[0].split(":")[1]+"'";
		var name="'";
		name+=savefile.split("\n")[1].split(":")[1]+"'";
		var creator="'";
		creator+=savefile.split("\n")[2].split(":")[1]+"'";
		var description="'";
		description+=savefile.split("\n")[3].split(":")[1]+"'";
		codescript+="\naddonScripts.push({version:"+version+",name:"+name+",creator:"+creator+",description:"+description+"});\n";
	}catch(e){
		print(e);
	}
}

function Loadaddon(file){
	try{
			var savefile="";
			var fst=new java.io.FileInputStream(file);
			var str=new java.lang.StringBuilder();
			var ch;
			while((ch=fst.read())!=-1){
				str.append(java.lang.Character(ch));
				savefile=String(str.toString());
			}
		codescript+=savefile;
	}catch(e){
		print(e);
	}
}

function reloadscript(){
	var k = true;
	for(var i=0;i<loadedScripts.length;i++){
		if(!loadjs(loadedScripts[i])){
			k=false;
		}
	}
	if(k){
		loadaddon();
		if(java.io.File(dir+fileScriptname).exists()){
			try{
				var file = new java.io.File(dir+fileScriptname);
				filewriter = new java.io.FileWriter(dir+fileScriptname,false);
				filewriter.write(codescript);
				filewriter.close();
				net.zhuoweizhang.mcpelauncher.ScriptManager.reloadScript(file);
			}catch(e){}
		}
		if(java.io.File(dir2+fileScriptname).exists()){
			try{
				var file = new java.io.File(dir2+fileScriptname);
				filewriter = new java.io.FileWriter(dir2+fileScriptname,false);
				filewriter.write(codescript);
				filewriter.close();
				net.zhuoweizhang.mcpelauncher.ScriptManager.reloadScript(file);
			}catch(e){}
		}
	}else{
		print("no file scripts");
	}
}



//reloadscript();


