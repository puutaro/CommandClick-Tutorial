#!/bin/bash

set -ue

readonly REPLACE_VARS_CON="$(get_rvar "${0}")"
readonly HELLO_WORLD_CHANNEL_NUM="$(\
	get_rvar "${REPLACE_VARS_CON}" HELLO_WORLD_CHANNEL_NUM \
)"
readonly HELLO_WORLD_EXIT_SHELL_PATH="$(\
	get_rvar "${REPLACE_VARS_CON}" HELLO_WORLD_EXIT_SHELL_PATH \
)"
readonly HELLO_WORLD_TEMP_ARGS_TSV_PATH="$(\
	get_rvar "${REPLACE_VARS_CON}" HELLO_WORLD_TEMP_ARGS_TSV_PATH \
)"
readonly ARGS_CON="$(\
	cat "${HELLO_WORLD_TEMP_ARGS_TSV_PATH}"
)"
readonly MESSAGE=$(\
	tsvar "${ARGS_CON}" MESSAGE\
)


noti \
	--notification-type launch \
	-cn ${HELLO_WORLD_CHANNEL_NUM} \
	--icon-name play \
	--importance high \
	--title "Hello world" \
	--message "${MESSAGE}" \
	--alert-once \
	--delete "shellPath=${HELLO_WORLD_EXIT_SHELL_PATH}" \
	--button "label=CANCEL,shellPath=${HELLO_WORLD_EXIT_SHELL_PATH}" \
>/dev/null 2>&1

espeak "${MESSAGE}"