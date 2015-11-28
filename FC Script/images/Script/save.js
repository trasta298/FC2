var modname = "FC2";

function SaveData(){
	var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/";
	java.io.File(path).mkdirs();
	var newFile=new java.io.File(path,modname+".sv");
	newFile.createNewFile();
	var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
	for(key in FC){
	var temp = "";
	temp += key;
	temp += "=";
		for(sent in FC[key]){
			temp += sent;
			temp += ":";
			temp += FC[key][sent];
			temp += ",";
		}
		temp = temp.substr(0,(temp.length-1));
		temp += ";";
		outWrite.append(temp);
	}
	outWrite.append("/");
	for(key in grid){
		outWrite.append(key+";");
	}
	outWrite.append("/");
	for(var i=0;i<flowitem.length;i++){
		var temp = "";
		temp+="x:";
		temp+=flowitem[i].x;
		temp+=",";
		temp+="y:";
		temp+=flowitem[i].y;
		temp+=",";
		temp+="z:";
		temp+=flowitem[i].z;
		temp+=",";
		temp+="id:";
		temp+=flowitem[i].id;
		temp+=",";
		temp+="data:";
		temp+=flowitem[i].data;
		temp+=",";
		temp+="dimension:";
		temp+=flowitem[i].dimension;
		temp+=",";
		temp+="yaw:";
		temp+=flowitem[i].yaw;
		temp+=",";
		temp+="tick:";
		temp+=flowitem[i].tick;
		temp+=",";
		temp+="max:";
		temp+=flowitem[i].max;
		temp += ";";
		outWrite.append(temp);
	}
	outWrite.append("/");
	outWrite.close();
}

function LoadData(){
	try{
		var savefile="";
		var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/";
		if(java.io.File(path+modname+".sv").exists()){
			var file=new java.io.File(path+modname+".sv");
			var fst=new java.io.FileInputStream(file);
			var str=new java.lang.StringBuilder();
			var ch;
			while((ch=fst.read())!=-1){
				str.append(java.lang.Character(ch));
				savefile=String(str.toString());
			}
			for(var i=0;i<savefile.split("/")[1].split(";").length-1;i++){
				grid[savefile.split("/")[1].split(";")[i]]=[];
			}
			FC = {};
			for(var i=0;i<savefile.split("/")[0].split(";").length-1;i++){
				var key = savefile.split("/")[0].split(";")[i].split("=")[0];
				FC[key] = {};
				for(var l=0;l<savefile.split("/")[0].split(";")[i].split("=")[1].split(",").length;l++){
					FC[key][savefile.split("/")[0].split(";")[i].split("=")[1].split(",")[l].split(":")[0]] = parseInt(savefile.split("/")[0].split(";")[i].split("=")[1].split(",")[l].split(":")[1]);
				}
			}
			flowitem = [];
			for(var i=0;i<savefile.split("/")[2].split(";").length-1;i++){
				var temp = {};
				for(var l=0;l<savefile.split("/")[2].split(";")[i].split(",").length;l++){
					temp[savefile.split("/")[2].split(";")[i].split(",")[l].split(":")[0]] = parseInt(savefile.split("/")[2].split(";")[i].split(",")[l].split(":")[1]);
				}
				flowitem.push(temp);
			}
			fst.close();
		}else{
			SaveData();
		}
	}catch(e){
		print(e);
	}
}
