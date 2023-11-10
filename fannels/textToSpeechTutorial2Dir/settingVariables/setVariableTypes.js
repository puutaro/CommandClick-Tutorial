
speechText:
	TXT:LBL=
		${TXT_LABEL}=this,

pitch:
	LBL:TXT:NUM:BTN=
		${TXT_LABEL}=this
		|
			!1..500!1
		|
			${BTN_CMD}=jsf '${0}' ${PICH_INIT_MODE}
				!${BTN_LABEL}=INIT,