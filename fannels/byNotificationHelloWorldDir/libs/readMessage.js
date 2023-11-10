
function readMessage(){
	const mainFannelCon = jsFileSystem.readLocalFile(
		"${HELLO_WORLD_FANNEL_PATH}"
	);
	const cmdCon = jsScript.subCmdVars(
		mainFannelCon
	);
	return jsScript.subValOnlyValue(
		"MESSAGE",
		cmdCon,
	);
};

