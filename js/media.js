function getImageThumbs(_type, _callback){
    var content = new Object();
    content.type = _type;
    var request = getRequestMsgAsString("media", "getImageThumbs", content);
    extendPOST(request, _callback);
}
