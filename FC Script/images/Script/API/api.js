var apidata = {};

var fcapi = {
	tick : {},
	ontouch : {},
	addmachine : function(id,name,textures,materialSourceIdSrc,opaqueSrc,renderTypeSrc,fc,w){
		apidata[name] = {id:id,tex:textures,mss:materialSourceIdSrc,os:opaqueSrc,rts:renderTypeSrc,fcdata:fc,ss:w};
	}
};

function addmachine(){
	for(key in apidata){
		Block.defineBlock(apidata[key].id,key,apidata[key].tex,apidata[key].mss,apidata[key].os,apidata[key].rts);
		Player.addItemCreativeInv(apidata[key].id,1);
	}
}