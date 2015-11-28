var activity=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var display=new android.util.DisplayMetrics();
com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);

var grid = {};
var FC = {};
var gui = {};
var GUI = {};
var addon = {};

var setgrid = false;
var addonScripts=[];
var fcaddItemlist=[];