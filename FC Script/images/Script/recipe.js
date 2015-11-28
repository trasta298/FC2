function addrecipe(){
Item.addFurnaceRecipe(179,501,0);
Item.addFurnaceRecipe(178,502,0);
Item.addFurnaceRecipe(190,504,0);
Item.addFurnaceRecipe(189,505,0);
Item.addShapedRecipe(506,1,0,["   ","  a","  b"],["a",501,0,"b",504,0]);
Item.addShapedRecipe(507,1,0,["   ","  a","  b"],["a",265,0,"b",502,0]);
Item.addShapedRecipe(193,1,0,["bab","aba","bab"],["a",506,0,"b",507,0]);
Item.addShapedRecipe(508,1,0,["bab","dcd","bab"],["a",331,0,"b",504,0,"c",505,0,"d",266,0]);
Item.addShapedRecipe(182,1,0,["aaa","a a","aaa"],["a",102,0]);
Item.addShapedRecipe(180,1,0,[" a ","aba"," a "],["a",266,0,"b",182,0]);
Item.addShapedRecipe(183,1,0,[" a ","aba"," a "],["a",182,0,"b",508,0]);
Item.addShapedRecipe(176,1,0,[" c "," b "," a "],["a",193,0,"b",331,0,"c",20,0]);
}