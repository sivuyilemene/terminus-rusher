gdjs.Game_32IntroCode = {};
gdjs.Game_32IntroCode.GDBackgroundObjects1= [];
gdjs.Game_32IntroCode.GDBackgroundObjects2= [];
gdjs.Game_32IntroCode.GDTerminusObjects1= [];
gdjs.Game_32IntroCode.GDTerminusObjects2= [];
gdjs.Game_32IntroCode.GDStartGameTextObjects1= [];
gdjs.Game_32IntroCode.GDStartGameTextObjects2= [];
gdjs.Game_32IntroCode.GDMainCharacterObjects1= [];
gdjs.Game_32IntroCode.GDMainCharacterObjects2= [];


gdjs.Game_32IntroCode.asyncCallback8384484 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}
gdjs.Game_32IntroCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Game_32IntroCode.asyncCallback8384484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32IntroCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Game_32IntroCode.GDMainCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartGameText"), gdjs.Game_32IntroCode.GDStartGameTextObjects1);
{for(var i = 0, len = gdjs.Game_32IntroCode.GDStartGameTextObjects1.length ;i < len;++i) {
    gdjs.Game_32IntroCode.GDStartGameTextObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32IntroCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32IntroCode.GDMainCharacterObjects1[i].setAnimationName("Walking");
}
}{for(var i = 0, len = gdjs.Game_32IntroCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32IntroCode.GDMainCharacterObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, 1200, 242);
}
}
{ //Subevents
gdjs.Game_32IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartGameText"), gdjs.Game_32IntroCode.GDStartGameTextObjects1);
{for(var i = 0, len = gdjs.Game_32IntroCode.GDStartGameTextObjects1.length ;i < len;++i) {
    gdjs.Game_32IntroCode.GDStartGameTextObjects1[i].resetTimer("StartGameTimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartGameText"), gdjs.Game_32IntroCode.GDStartGameTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32IntroCode.GDStartGameTextObjects1.length;i<l;++i) {
    if ( gdjs.Game_32IntroCode.GDStartGameTextObjects1[i].getTimerElapsedTimeInSecondsOrNaN("StartGameTimer") > 0.4 ) {
        isConditionTrue_1 = true;
        gdjs.Game_32IntroCode.GDStartGameTextObjects1[k] = gdjs.Game_32IntroCode.GDStartGameTextObjects1[i];
        ++k;
    }
}
gdjs.Game_32IntroCode.GDStartGameTextObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32IntroCode.GDStartGameTextObjects1 */
{for(var i = 0, len = gdjs.Game_32IntroCode.GDStartGameTextObjects1.length ;i < len;++i) {
    gdjs.Game_32IntroCode.GDStartGameTextObjects1[i].setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Game_32IntroCode.GDStartGameTextObjects1.length ;i < len;++i) {
    gdjs.Game_32IntroCode.GDStartGameTextObjects1[i].resetTimer("StartGameTimer");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1.05);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartGameText"), gdjs.Game_32IntroCode.GDStartGameTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32IntroCode.GDStartGameTextObjects1.length;i<l;++i) {
    if ( gdjs.Game_32IntroCode.GDStartGameTextObjects1[i].getTimerElapsedTimeInSecondsOrNaN("StartGameTimer") > 0.4 ) {
        isConditionTrue_1 = true;
        gdjs.Game_32IntroCode.GDStartGameTextObjects1[k] = gdjs.Game_32IntroCode.GDStartGameTextObjects1[i];
        ++k;
    }
}
gdjs.Game_32IntroCode.GDStartGameTextObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1.05;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32IntroCode.GDStartGameTextObjects1 */
{for(var i = 0, len = gdjs.Game_32IntroCode.GDStartGameTextObjects1.length ;i < len;++i) {
    gdjs.Game_32IntroCode.GDStartGameTextObjects1[i].setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Game_32IntroCode.GDStartGameTextObjects1.length ;i < len;++i) {
    gdjs.Game_32IntroCode.GDStartGameTextObjects1[i].resetTimer("StartGameTimer");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
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
gdjs.Game_32IntroCode.GDMainCharacterObjects1.length = 0;
gdjs.Game_32IntroCode.GDMainCharacterObjects2.length = 0;

gdjs.Game_32IntroCode.eventsList1(runtimeScene);

return;

}

gdjs['Game_32IntroCode'] = gdjs.Game_32IntroCode;
