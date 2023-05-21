gdjs.Level_321Code = {};
gdjs.Level_321Code.GDFloorObjects1= [];
gdjs.Level_321Code.GDFloorObjects2= [];
gdjs.Level_321Code.GDFloorObjects3= [];
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDPlayerObjects3= [];
gdjs.Level_321Code.GDAppleObjects1= [];
gdjs.Level_321Code.GDAppleObjects2= [];
gdjs.Level_321Code.GDAppleObjects3= [];
gdjs.Level_321Code.GDBananaObjects1= [];
gdjs.Level_321Code.GDBananaObjects2= [];
gdjs.Level_321Code.GDBananaObjects3= [];
gdjs.Level_321Code.GDAnaObjects1= [];
gdjs.Level_321Code.GDAnaObjects2= [];
gdjs.Level_321Code.GDAnaObjects3= [];
gdjs.Level_321Code.GDHealthBarObjects1= [];
gdjs.Level_321Code.GDHealthBarObjects2= [];
gdjs.Level_321Code.GDHealthBarObjects3= [];
gdjs.Level_321Code.GDHealthBarBoxObjects1= [];
gdjs.Level_321Code.GDHealthBarBoxObjects2= [];
gdjs.Level_321Code.GDHealthBarBoxObjects3= [];
gdjs.Level_321Code.GDRoundTimerObjects1= [];
gdjs.Level_321Code.GDRoundTimerObjects2= [];
gdjs.Level_321Code.GDRoundTimerObjects3= [];
gdjs.Level_321Code.GDRobberObjects1= [];
gdjs.Level_321Code.GDRobberObjects2= [];
gdjs.Level_321Code.GDRobberObjects3= [];
gdjs.Level_321Code.GDBlankEmoteLeftObjects1= [];
gdjs.Level_321Code.GDBlankEmoteLeftObjects2= [];
gdjs.Level_321Code.GDBlankEmoteLeftObjects3= [];
gdjs.Level_321Code.GDSpawnPointObjects1= [];
gdjs.Level_321Code.GDSpawnPointObjects2= [];
gdjs.Level_321Code.GDSpawnPointObjects3= [];
gdjs.Level_321Code.GDPlayerLifeObjects1= [];
gdjs.Level_321Code.GDPlayerLifeObjects2= [];
gdjs.Level_321Code.GDPlayerLifeObjects3= [];
gdjs.Level_321Code.GDPlayerHealthBarBoxObjects1= [];
gdjs.Level_321Code.GDPlayerHealthBarBoxObjects2= [];
gdjs.Level_321Code.GDPlayerHealthBarBoxObjects3= [];
gdjs.Level_321Code.GDPlayerHealBarObjects1= [];
gdjs.Level_321Code.GDPlayerHealBarObjects2= [];
gdjs.Level_321Code.GDPlayerHealBarObjects3= [];
gdjs.Level_321Code.GDHourGlassObjects1= [];
gdjs.Level_321Code.GDHourGlassObjects2= [];
gdjs.Level_321Code.GDHourGlassObjects3= [];


gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAppleObjects2Objects = Hashtable.newFrom({"Apple": gdjs.Level_321Code.GDAppleObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBananaObjects1Objects = Hashtable.newFrom({"Banana": gdjs.Level_321Code.GDBananaObjects1});
gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Level_321Code.GDSpawnPointObjects1, gdjs.Level_321Code.GDSpawnPointObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDSpawnPointObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDSpawnPointObjects2[i].getVariableNumber(gdjs.Level_321Code.GDSpawnPointObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDSpawnPointObjects2[k] = gdjs.Level_321Code.GDSpawnPointObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDSpawnPointObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ana"), gdjs.Level_321Code.GDAnaObjects2);
/* Reuse gdjs.Level_321Code.GDSpawnPointObjects2 */
gdjs.Level_321Code.GDAppleObjects2.length = 0;

{for(var i = 0, len = gdjs.Level_321Code.GDAnaObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAnaObjects2[i].returnVariable(gdjs.Level_321Code.GDAnaObjects2[i].getVariables().getFromIndex(0)).setString("Apple");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAppleObjects2Objects, (( gdjs.Level_321Code.GDSpawnPointObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDSpawnPointObjects2[0].getPointX("")), (( gdjs.Level_321Code.GDSpawnPointObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDSpawnPointObjects2[0].getPointY("")), " ");
}{for(var i = 0, len = gdjs.Level_321Code.GDAppleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAppleObjects2[i].setSize(35, 35);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSpawnPointObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDSpawnPointObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

/* Reuse gdjs.Level_321Code.GDSpawnPointObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDSpawnPointObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDSpawnPointObjects1[i].getVariableNumber(gdjs.Level_321Code.GDSpawnPointObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDSpawnPointObjects1[k] = gdjs.Level_321Code.GDSpawnPointObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDSpawnPointObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ana"), gdjs.Level_321Code.GDAnaObjects1);
/* Reuse gdjs.Level_321Code.GDSpawnPointObjects1 */
gdjs.Level_321Code.GDBananaObjects1.length = 0;

{for(var i = 0, len = gdjs.Level_321Code.GDAnaObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAnaObjects1[i].returnVariable(gdjs.Level_321Code.GDAnaObjects1[i].getVariables().getFromIndex(0)).setString("Banana");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBananaObjects1Objects, (( gdjs.Level_321Code.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDSpawnPointObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDSpawnPointObjects1[0].getPointY("")), " ");
}{for(var i = 0, len = gdjs.Level_321Code.GDBananaObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBananaObjects1[i].setSize(35, 35);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSpawnPointObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSpawnPointObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAppleObjects1Objects = Hashtable.newFrom({"Apple": gdjs.Level_321Code.GDAppleObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBananaObjects1Objects = Hashtable.newFrom({"Banana": gdjs.Level_321Code.GDBananaObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAppleObjects1Objects = Hashtable.newFrom({"Apple": gdjs.Level_321Code.GDAppleObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBananaObjects1Objects = Hashtable.newFrom({"Banana": gdjs.Level_321Code.GDBananaObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAppleObjects1Objects = Hashtable.newFrom({"Apple": gdjs.Level_321Code.GDAppleObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAnaObjects1Objects = Hashtable.newFrom({"Ana": gdjs.Level_321Code.GDAnaObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBananaObjects1Objects = Hashtable.newFrom({"Banana": gdjs.Level_321Code.GDBananaObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAnaObjects1Objects = Hashtable.newFrom({"Ana": gdjs.Level_321Code.GDAnaObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRobberObjects1Objects = Hashtable.newFrom({"Robber": gdjs.Level_321Code.GDRobberObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.asyncCallback8299964 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}}
gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Level_321Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Level_321Code.asyncCallback8299964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HourGlass"), gdjs.Level_321Code.GDHourGlassObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpawnPoint"), gdjs.Level_321Code.GDSpawnPointObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].resetTimer("Deadline");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSpawnPointObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSpawnPointObjects1[i].returnVariable(gdjs.Level_321Code.GDSpawnPointObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(1, 2));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHourGlassObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHourGlassObjects1[i].setOpacity(150);
}
}
{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Run Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Run");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Run Up");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Run Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Apple"), gdjs.Level_321Code.GDAppleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAppleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getVariableString(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == "Banana" ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAppleObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Banana"), gdjs.Level_321Code.GDBananaObjects1);
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDBananaObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBananaObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDAppleObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAppleObjects1[i].setPosition((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("PickUpPoint")) + 45,(( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("PickUpPoint")) + 40);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("Apple");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Banana"), gdjs.Level_321Code.GDBananaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBananaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getVariableString(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == "Apple" ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Apple"), gdjs.Level_321Code.GDAppleObjects1);
/* Reuse gdjs.Level_321Code.GDBananaObjects1 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDAppleObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAppleObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDBananaObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBananaObjects1[i].setPosition((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("PickUpPoint")) + 45,(( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("PickUpPoint")) + 40);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("Banana");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Apple"), gdjs.Level_321Code.GDAppleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAppleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAppleObjects1 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDAppleObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAppleObjects1[i].setPosition((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("PickUpPoint")) + 45,(( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("PickUpPoint")) + 45);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("Apple");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Banana"), gdjs.Level_321Code.GDBananaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBananaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDBananaObjects1 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDBananaObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBananaObjects1[i].setPosition((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("PickUpPoint")) + 45,(( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("PickUpPoint")) + 45);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("Banana");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ana"), gdjs.Level_321Code.GDAnaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Apple"), gdjs.Level_321Code.GDAppleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAnaObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAnaObjects1[i].getVariableString(gdjs.Level_321Code.GDAnaObjects1[i].getVariables().getFromIndex(0)) == "Apple" ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDAnaObjects1[k] = gdjs.Level_321Code.GDAnaObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAnaObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAppleObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAnaObjects1Objects, false, runtimeScene, true);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAppleObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDAppleObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAppleObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ana"), gdjs.Level_321Code.GDAnaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Banana"), gdjs.Level_321Code.GDBananaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAnaObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAnaObjects1[i].getVariableString(gdjs.Level_321Code.GDAnaObjects1[i].getVariables().getFromIndex(0)) == "Banana" ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDAnaObjects1[k] = gdjs.Level_321Code.GDAnaObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAnaObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBananaObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAnaObjects1Objects, false, runtimeScene, true);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDBananaObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDBananaObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBananaObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.Level_321Code.GDHealthBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Deadline") > 1 ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(1)) > -(1) ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDHealthBarObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDHealthBarObjects1[i].getWidth() > -(1) ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDHealthBarObjects1[k] = gdjs.Level_321Code.GDHealthBarObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDHealthBarObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ana"), gdjs.Level_321Code.GDAnaObjects1);
/* Reuse gdjs.Level_321Code.GDHealthBarObjects1 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RoundTimer"), gdjs.Level_321Code.GDRoundTimerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDRoundTimerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRoundTimerObjects1[i].setString(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPlayerObjects1[0].getVariables()).getFromIndex(1)))));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].resetTimer("Deadline");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHealthBarObjects1[i].setWidth(((((gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPlayerObjects1[0].getVariables()).getFromIndex(1))) - 1)) / (10)) * 30);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDAnaObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAnaObjects1[i].returnVariable(gdjs.Level_321Code.GDAnaObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Robber"), gdjs.Level_321Code.GDRobberObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDRobberObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDRobberObjects1[0].getVariables()).getFromIndex(0))) == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
/* Reuse gdjs.Level_321Code.GDRobberObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDRobberObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRobberObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("x")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("y")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Robber"), gdjs.Level_321Code.GDRobberObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRobberObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PlayerHealBar"), gdjs.Level_321Code.GDPlayerHealBarObjects1);
/* Reuse gdjs.Level_321Code.GDRobberObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDRobberObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRobberObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(2)).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(2))) / 2);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHealBarObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHealBarObjects1[i].setWidth((gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPlayerObjects1[0].getVariables()).getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(15);
}
}
{ //Subevents
gdjs.Level_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Robber"), gdjs.Level_321Code.GDRobberObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDRobberObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDRobberObjects1[i].getX() > (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDRobberObjects1[k] = gdjs.Level_321Code.GDRobberObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDRobberObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDRobberObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDRobberObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRobberObjects1[i].setAnimationName("Chasing Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Robber"), gdjs.Level_321Code.GDRobberObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDRobberObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDRobberObjects1[i].getX() < (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDRobberObjects1[k] = gdjs.Level_321Code.GDRobberObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDRobberObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDRobberObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDRobberObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRobberObjects1[i].setAnimationName("Chasing");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(1)) == -(1) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", true);
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDFloorObjects1.length = 0;
gdjs.Level_321Code.GDFloorObjects2.length = 0;
gdjs.Level_321Code.GDFloorObjects3.length = 0;
gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects3.length = 0;
gdjs.Level_321Code.GDAppleObjects1.length = 0;
gdjs.Level_321Code.GDAppleObjects2.length = 0;
gdjs.Level_321Code.GDAppleObjects3.length = 0;
gdjs.Level_321Code.GDBananaObjects1.length = 0;
gdjs.Level_321Code.GDBananaObjects2.length = 0;
gdjs.Level_321Code.GDBananaObjects3.length = 0;
gdjs.Level_321Code.GDAnaObjects1.length = 0;
gdjs.Level_321Code.GDAnaObjects2.length = 0;
gdjs.Level_321Code.GDAnaObjects3.length = 0;
gdjs.Level_321Code.GDHealthBarObjects1.length = 0;
gdjs.Level_321Code.GDHealthBarObjects2.length = 0;
gdjs.Level_321Code.GDHealthBarObjects3.length = 0;
gdjs.Level_321Code.GDHealthBarBoxObjects1.length = 0;
gdjs.Level_321Code.GDHealthBarBoxObjects2.length = 0;
gdjs.Level_321Code.GDHealthBarBoxObjects3.length = 0;
gdjs.Level_321Code.GDRoundTimerObjects1.length = 0;
gdjs.Level_321Code.GDRoundTimerObjects2.length = 0;
gdjs.Level_321Code.GDRoundTimerObjects3.length = 0;
gdjs.Level_321Code.GDRobberObjects1.length = 0;
gdjs.Level_321Code.GDRobberObjects2.length = 0;
gdjs.Level_321Code.GDRobberObjects3.length = 0;
gdjs.Level_321Code.GDBlankEmoteLeftObjects1.length = 0;
gdjs.Level_321Code.GDBlankEmoteLeftObjects2.length = 0;
gdjs.Level_321Code.GDBlankEmoteLeftObjects3.length = 0;
gdjs.Level_321Code.GDSpawnPointObjects1.length = 0;
gdjs.Level_321Code.GDSpawnPointObjects2.length = 0;
gdjs.Level_321Code.GDSpawnPointObjects3.length = 0;
gdjs.Level_321Code.GDPlayerLifeObjects1.length = 0;
gdjs.Level_321Code.GDPlayerLifeObjects2.length = 0;
gdjs.Level_321Code.GDPlayerLifeObjects3.length = 0;
gdjs.Level_321Code.GDPlayerHealthBarBoxObjects1.length = 0;
gdjs.Level_321Code.GDPlayerHealthBarBoxObjects2.length = 0;
gdjs.Level_321Code.GDPlayerHealthBarBoxObjects3.length = 0;
gdjs.Level_321Code.GDPlayerHealBarObjects1.length = 0;
gdjs.Level_321Code.GDPlayerHealBarObjects2.length = 0;
gdjs.Level_321Code.GDPlayerHealBarObjects3.length = 0;
gdjs.Level_321Code.GDHourGlassObjects1.length = 0;
gdjs.Level_321Code.GDHourGlassObjects2.length = 0;
gdjs.Level_321Code.GDHourGlassObjects3.length = 0;

gdjs.Level_321Code.eventsList2(runtimeScene);

return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
