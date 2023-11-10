
// [1]
/// LABELING_SECTION_START
// file://${01}/${001}/textToSpeechTutorial2.md
/// LABELING_SECTION_END

// [2]
/// SETTING_SECTION_START
// [3]
scriptFileName="textToSpeechTutorial2.js"
// [4]
editExecute="ALWAYS"
// [5]
setReplaceVariables="file://TXT_LABEL=label"
// [6]
setVariableTypes="file://"
// [7]
hideSettingVariables="file://"
/// SETTING_SECTION_END

// [8]
/// CMD_VARIABLE_SECTION_START
speechText="hello world"
pitch="50"
/// CMD_VARIABLE_SECTION_END

// [9]
let args = jsArgs.get().split("\t");
var FIRST_ARGS = args.at(0);

// [10]
switch(FIRST_ARGS){
    case "":
        execTextToSpeech();
        break;
    // [11]
    case "${PICH_INIT_MODE}":
        // [12]
        jsEdit.updateByVariable(
            "${FANNEL_PATH}",
            "pitch",
            "50"
        );
        break;
};

function execTextToSpeech(){
    // [13]
    jsFileSystem.createDir("${FANNEL_DIR_PATH}");
    // [14]
    jsFileSystem.writeLocalFile(
        "${PLAY_TXT_PATH}",
        speechText
    );

    jsFileSystem.writeLocalFile(
        "${PLAY_LIST_TSV_PATH}",
       "${PLAY_TXT_PATH}"
    );
    // [15]
    let extraSettingMapStr = [
        `importance=low`,
        `pitch=${pitch}`,
    ].join("|");
    jsTextToSpeech.speech(
        "${PLAY_LIST_TSV_PATH}",
        extraSettingMapStr,
    );
};
