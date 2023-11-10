

function saveArgsTsv(
	message
){
	const argsTsvCon = [
		`MESSAGE\t${message}`,
	].join("\n");
	jsFileSystem.writeLocalFile(
		"${HELLO_WORLD_TEMP_ARGS_TSV_PATH}",
		argsTsvCon
	);
};
