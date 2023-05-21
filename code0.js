gdjs.Game_32IntroCode = {};
gdjs.Game_32IntroCode.GDBackgroundObjects1= [];
gdjs.Game_32IntroCode.GDBackgroundObjects2= [];
gdjs.Game_32IntroCode.GDTerminusObjects1= [];
gdjs.Game_32IntroCode.GDTerminusObjects2= [];
gdjs.Game_32IntroCode.GDStartGameTextObjects1= [];
gdjs.Game_32IntroCode.GDStartGameTextObjects2= [];


gdjs.Game_32IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};

gdjs.Game_32IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32IntroCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32IntroCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32IntroCode.GDTerminusObjects1.length = 0;
gdjs.Game_32IntroCode.GDTerminusObjects2.length = 0;
gdjs.Game_32IntroCode.GDStartGameTextObjects1.length = 0;
gdjs.Game_32IntroCode.GDStartGameTextObjects2.length = 0;

gdjs.Game_32IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_32IntroCode'] = gdjs.Game_32IntroCode;
