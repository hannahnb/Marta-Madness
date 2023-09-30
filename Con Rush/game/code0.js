gdjs.Start_32AreaCode = {};
gdjs.Start_32AreaCode.GDCat4Objects1= [];
gdjs.Start_32AreaCode.GDCat4Objects2= [];
gdjs.Start_32AreaCode.GDTommyObjects1= [];
gdjs.Start_32AreaCode.GDTommyObjects2= [];
gdjs.Start_32AreaCode.GDEnemyObjects1= [];
gdjs.Start_32AreaCode.GDEnemyObjects2= [];
gdjs.Start_32AreaCode.GDWallObjects1= [];
gdjs.Start_32AreaCode.GDWallObjects2= [];
gdjs.Start_32AreaCode.GDBlueBackgroundObjects1= [];
gdjs.Start_32AreaCode.GDBlueBackgroundObjects2= [];
gdjs.Start_32AreaCode.GDForestBackgroundObjects1= [];
gdjs.Start_32AreaCode.GDForestBackgroundObjects2= [];
gdjs.Start_32AreaCode.GDGrassObjects1= [];
gdjs.Start_32AreaCode.GDGrassObjects2= [];
gdjs.Start_32AreaCode.GDPlayerHealthObjects1= [];
gdjs.Start_32AreaCode.GDPlayerHealthObjects2= [];
gdjs.Start_32AreaCode.GDRedButtonObjects1= [];
gdjs.Start_32AreaCode.GDRedButtonObjects2= [];
gdjs.Start_32AreaCode.GDAtkButtonObjects1= [];
gdjs.Start_32AreaCode.GDAtkButtonObjects2= [];
gdjs.Start_32AreaCode.GDHealButtonObjects1= [];
gdjs.Start_32AreaCode.GDHealButtonObjects2= [];
gdjs.Start_32AreaCode.GDEnemyHPObjects1= [];
gdjs.Start_32AreaCode.GDEnemyHPObjects2= [];
gdjs.Start_32AreaCode.GDTurnObjects1= [];
gdjs.Start_32AreaCode.GDTurnObjects2= [];
gdjs.Start_32AreaCode.GDTimeObjects1= [];
gdjs.Start_32AreaCode.GDTimeObjects2= [];


gdjs.Start_32AreaCode.asyncCallback10664804 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.Start_32AreaCode.GDTimeObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}{for(var i = 0, len = gdjs.Start_32AreaCode.GDTimeObjects2.length ;i < len;++i) {
    gdjs.Start_32AreaCode.GDTimeObjects2[i].returnVariable(gdjs.Start_32AreaCode.GDTimeObjects2[i].getVariables().get("Timer")).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "sec"))));
}
}}
gdjs.Start_32AreaCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Start_32AreaCode.asyncCallback10664804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Start_32AreaCode.mapOfGDgdjs_46Start_9532AreaCode_46GDAtkButtonObjects1Objects = Hashtable.newFrom({"AtkButton": gdjs.Start_32AreaCode.GDAtkButtonObjects1});
gdjs.Start_32AreaCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Start_32AreaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("AtkButton"), gdjs.Start_32AreaCode.GDAtkButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32AreaCode.GDAtkButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32AreaCode.GDAtkButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32AreaCode.GDAtkButtonObjects1[k] = gdjs.Start_32AreaCode.GDAtkButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32AreaCode.GDAtkButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32AreaCode.mapOfGDgdjs_46Start_9532AreaCode_46GDAtkButtonObjects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 0;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Start_32AreaCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Start_32AreaCode.GDTommyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Turn"), gdjs.Start_32AreaCode.GDTurnObjects1);
{for(var i = 0, len = gdjs.Start_32AreaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Start_32AreaCode.GDEnemyObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Start_32AreaCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Start_32AreaCode.GDTommyObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Start_32AreaCode.GDTurnObjects1.length ;i < len;++i) {
    gdjs.Start_32AreaCode.GDTurnObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AtkButton"), gdjs.Start_32AreaCode.GDAtkButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("HealButton"), gdjs.Start_32AreaCode.GDHealButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32AreaCode.GDAtkButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32AreaCode.GDAtkButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32AreaCode.GDAtkButtonObjects1[k] = gdjs.Start_32AreaCode.GDAtkButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32AreaCode.GDAtkButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32AreaCode.GDHealButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32AreaCode.GDHealButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32AreaCode.GDHealButtonObjects1[k] = gdjs.Start_32AreaCode.GDHealButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32AreaCode.GDHealButtonObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Tommy"), gdjs.Start_32AreaCode.GDTommyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32AreaCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Start_32AreaCode.GDTommyObjects1[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Start_32AreaCode.GDTommyObjects1[k] = gdjs.Start_32AreaCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Start_32AreaCode.GDTommyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32AreaCode.GDTommyObjects1.length;i<l;++i) {
    if ( gdjs.Start_32AreaCode.GDTommyObjects1[i].hasAnimationEnded2() ) {
        isConditionTrue_0 = true;
        gdjs.Start_32AreaCode.GDTommyObjects1[k] = gdjs.Start_32AreaCode.GDTommyObjects1[i];
        ++k;
    }
}
gdjs.Start_32AreaCode.GDTommyObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Start_32AreaCode.GDTommyObjects1 */
{for(var i = 0, len = gdjs.Start_32AreaCode.GDTommyObjects1.length ;i < len;++i) {
    gdjs.Start_32AreaCode.GDTommyObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Start_32AreaCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32AreaCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Start_32AreaCode.GDEnemyObjects1[i].hasAnimationEnded2() ) {
        isConditionTrue_0 = true;
        gdjs.Start_32AreaCode.GDEnemyObjects1[k] = gdjs.Start_32AreaCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Start_32AreaCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32AreaCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Start_32AreaCode.GDEnemyObjects1[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Start_32AreaCode.GDEnemyObjects1[k] = gdjs.Start_32AreaCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Start_32AreaCode.GDEnemyObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Start_32AreaCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Start_32AreaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Start_32AreaCode.GDEnemyObjects1[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Start_32AreaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32AreaCode.GDCat4Objects1.length = 0;
gdjs.Start_32AreaCode.GDCat4Objects2.length = 0;
gdjs.Start_32AreaCode.GDTommyObjects1.length = 0;
gdjs.Start_32AreaCode.GDTommyObjects2.length = 0;
gdjs.Start_32AreaCode.GDEnemyObjects1.length = 0;
gdjs.Start_32AreaCode.GDEnemyObjects2.length = 0;
gdjs.Start_32AreaCode.GDWallObjects1.length = 0;
gdjs.Start_32AreaCode.GDWallObjects2.length = 0;
gdjs.Start_32AreaCode.GDBlueBackgroundObjects1.length = 0;
gdjs.Start_32AreaCode.GDBlueBackgroundObjects2.length = 0;
gdjs.Start_32AreaCode.GDForestBackgroundObjects1.length = 0;
gdjs.Start_32AreaCode.GDForestBackgroundObjects2.length = 0;
gdjs.Start_32AreaCode.GDGrassObjects1.length = 0;
gdjs.Start_32AreaCode.GDGrassObjects2.length = 0;
gdjs.Start_32AreaCode.GDPlayerHealthObjects1.length = 0;
gdjs.Start_32AreaCode.GDPlayerHealthObjects2.length = 0;
gdjs.Start_32AreaCode.GDRedButtonObjects1.length = 0;
gdjs.Start_32AreaCode.GDRedButtonObjects2.length = 0;
gdjs.Start_32AreaCode.GDAtkButtonObjects1.length = 0;
gdjs.Start_32AreaCode.GDAtkButtonObjects2.length = 0;
gdjs.Start_32AreaCode.GDHealButtonObjects1.length = 0;
gdjs.Start_32AreaCode.GDHealButtonObjects2.length = 0;
gdjs.Start_32AreaCode.GDEnemyHPObjects1.length = 0;
gdjs.Start_32AreaCode.GDEnemyHPObjects2.length = 0;
gdjs.Start_32AreaCode.GDTurnObjects1.length = 0;
gdjs.Start_32AreaCode.GDTurnObjects2.length = 0;
gdjs.Start_32AreaCode.GDTimeObjects1.length = 0;
gdjs.Start_32AreaCode.GDTimeObjects2.length = 0;

gdjs.Start_32AreaCode.eventsList1(runtimeScene);

return;

}

gdjs['Start_32AreaCode'] = gdjs.Start_32AreaCode;
