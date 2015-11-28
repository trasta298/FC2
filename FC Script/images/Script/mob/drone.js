ModPE.overrideTexture('images/mob/drone.png', 'http://i.imgur.com/eaNvvVE.png');
var droneRenderType = Renderer.createHumanoidRenderer();
adddroneRenderType(droneRenderType);

function adddroneRenderType(renderer) 
{
var model = renderer.getModel();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();

 var rarm = model.getPart("rightArm").clear();
var larm = model.getPart("leftArm").clear();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var y=-6;
body.setTextureSize(128,128)
body.setTextureOffset(0,0, true);
body.addBox(-8,-6+16,-8,16,0,16);
body.setTextureOffset(0,16, true);
body.addBox(-1,-6+16,-1,2,4,2);
body.setTextureOffset(0,22, true);
body.addBox(-8,-2+16,-8,16,0,16);
body.setTextureOffset(0,38, true);
body.addBox(-2,-2+16,-2,4,4,4);
body.setTextureOffset(0,46, true);
body.addBox(-8,4+y+16,-1,2,2,2);
body.addBox(6,4+y+16,-1,2,2,2);
body.addBox(-1,4+y+16,-8,2,2,2);
body.addBox(-1,4+y+16,6,2,2,2);
body.addBox(-9,6+y+16,-1,2,2,2);
body.addBox(7,6+y+16,-1,2,2,2);
body.addBox(-1,6+y+16,-9,2,2,2);
body.addBox(-1,6+y+16,7,2,2,2);
body.addBox(-10,8+y+16,-1,2,2,2);
body.addBox(8,8+y+16,-1,2,2,2);
body.addBox(-1,8+y+16,-10,2,2,2);
body.addBox(-1,8+y+16,8,2,2,2);
body.addBox(-8,10+y+16,-1,2,2,2);
body.addBox(6,10+y+16,-1,2,2,2);
body.addBox(-1,10+y+16,-8,2,2,2);
body.addBox(-1,10+y+16,6,2,2,2);
body.addBox(-6,12+y+16,-1,2,2,2);
body.addBox(4,12+y+16,-1,2,2,2);
body.addBox(-1,12+y+16,-6,2,2,2);
body.addBox(-1,12+y+16,4,2,2,2);
}

//drone=Level.spawnMob(x+0.5,y+1,z+0.5,19,"mob/drone.png");
//Entity.setRenderType(drone,droneRenderType.renderType);

