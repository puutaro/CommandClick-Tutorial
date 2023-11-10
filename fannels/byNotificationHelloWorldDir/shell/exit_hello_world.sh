#!/bin/bash

set -ue

readonly REPLACE_VARS_CON="$(get_rvar "${0}")"
readonly HELLO_WORLD_CHANNEL_NUM="$(\
	get_rvar "${REPLACE_VARS_CON}" HELLO_WORLD_CHANNEL_NUM \
)"

noti \
	--notification-type exit \
	-cn ${HELLO_WORLD_CHANNEL_NUM} 
