
jsimport "${HELLO_WORLD_SAVE_ARGS_TSV_JS_PATH}";
jsimport "${HELLO_WORLD_READ_MESSAGE_JS_PATH}";


const message = readMessage();
if(!message) exitZero();
jsListSelect.updateListFileCon(
	"${HELLO_WORLD_MESSAGE_LIST_PATH}",
	message,
);

saveArgsTsv(message);

jsUbuntu.execScriptByBackground(
	"${HELLO_WORLD_LAUNCH_SHELL_PATH}",
	"",
	1,
);
