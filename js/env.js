function heartbeat(_callback) {
	var content = new Object();
	var request = getRequestMsgAsString("env", "heartbeat", content);
	extendPOST(request, _callback);
}