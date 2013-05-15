/**
 *wu0wu
 * 功能:获取应用列表
 *
 * @param _callback 回调对象
 *
 * 命令字： getApks
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 * {
 * 	"content":
 *		{"apks":
 * 			[
 *			  {"type":"sys","packageName":"com.google.android.location"},
 *			  {"type":"sys","packageName":"com.google.android.backup"}
 *			]
 *	},
 *	"command":"getApks",
 *	"region":"app",
 *	"success":true
 * }
 *
 * JSON格式说明：
 * 		type：标记软件是否为系统程序；sys为系统；user为用户安装
 * 		packageName：软件apk包名
 *       success：请求成功标记
 * */
function getApks(_callback) {
	var content = new Object();
	var request = getRequestMsgAsString("app", "getApks", content);
	extendPOST(request, _callback);
}

/**
 *wu0wu
 * 功能:获取应用名称（软件名）
 *
 * @param _callback 回调对象
 *
 *        _packageName 软件包名String数组
 *
 * 命令字： getApkLabels
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"labels":
 *		[
 *			{"packageName":"com.android.browser","label":"互联网"},
 *			{"packageName":"com.android.phone","label":"电话"}
 *		]
 *	},
 *	"command":"getApkLabels",
 *	"region":"app",
 *	"success":true
 *}
 *
 * JSON格式说明：
 * 		packageName：软件apk包名
 * 		label：软件名
 *       success：请求成功标记
 * */
function getApkLabels(_packageName,_callback) {
	var content = new Object();
	content.packageNames =_packageName;
	var request = getRequestMsgAsString("app", "getApkLabels", content);
	extendPOST(request, _callback);
}

/**
 *wu0wu
 * 功能:获取应用信息:包名、名称、大小、版本
 *
 * @param _callback 回调对象
 *
 *        _packageNames 软件包名String数组
 *
 * 命令字： getApkInfo
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"apkInfos":
 *		[
 *			["com.android.phone","电话","4.1.0","2.90M"],
 *			["com.android.settings","设置","Gingerbread","6.73M"]
 *		]
 *	},
 *	"command":"getApkInfo",
 *	"region":"app",
 *	"success":true
 *}
 *
 * JSON格式说明：
 * 		apkInfos[][0]：软件apk包名
 * 		apkInfos[][1]：软件名
 * 	    apkInfos[][2]：版本号
 * 		apkInfos[][3]：大小
 *       success：请求成功标记
 * */
function getApkInfo(_packageNames,_callback) {
	var content = new Object();
	content.packageNames =_packageNames;
	var request = getRequestMsgAsString("app", "getApkInfo", content);
	extendPOST(request, _callback);
}

/**
 *wu0wu
 * 功能:根据文件路径安装应用
 *
 * @param _callback 回调对象
 *
 *        _fileName string完整文件路径，如：/mnt/sdcard/testInsertOneContacts.apk
 *
 * 命令字： installApk
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"ok":"ok"
 *	},
 *	"command":"installApk",
 *	"region":"app",
 *	"success":true
 *}
 *
 * JSON格式说明：
 *       success：请求成功标记
 * */
function installApk(_fileName,_callback) {
	var content = new Object();
	content.fileName = _fileName;
	var request = getRequestMsgAsString("app","installApk",content);
	extendPOST(request,_callback);
}

/**
 *wu0wu
 * 功能:根据包名列表，删除应用
 *
 * @param _callback 回调对象
 *
 *        _packageName string包名
 *
 * 命令字： uninstallApk
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"ok":"ok"
 *	},
 *	"command":"uninstallApk",
 *	"region":"app",
 *	"success":true
 *}
 *
 * JSON格式说明：
 *       success：请求成功标记
 * */
function uninstallApk (_packageName,_callback) {
	var content = new Object();
	content.packageName = _packageName;
	var request = getRequestMsgAsString("app","uninstallApk",content);
	extendPOST(request,_callback);
}

/**
 *wu0wu
 * 功能:根据包名启动应用
 *
 * @param _callback 回调对象
 *
 *        _packageName String软件包名，android手机的唯一标识
 *
 * 命令字： startApk
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"ok":"ok"
 *	},
 *	"command":"startApk",
 *	"region":"app",
 *	"success":true
 *}
 *
 * JSON格式说明：
 *       success：请求成功标记
 * */
function startApk(_packageName, _callback) {
	var content = new Object();
	content.packageName = _packageName;
	var request = getRequestMsgAsString("app", "startApk", content);
	extendPOST(request, _callback);
}

/**
 *wu0wu
 * 功能:获取Activity列表
 *
 * @param _callback 回调对象
 *
 *
 * 命令字： getActivitys
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"activitys":
 *		[
 *			{"packageName":"com.qihoo360.mobilesafe","activityName":"com.qihoo360.mobilesafe.ui.index.AppEnterActivity"},
 *			{"packageName":"com.android.browser","activityName":"com.android.browser.BrowserActivity"}
 *		]
 *	},
 *	"command":"getActivitys",
 *	"region":"app",
 *	"success":true
 *}
 *
 * JSON格式说明：
 * 		packageName：软件apk包名
 * 		activityName：activity名
 *       success：请求成功标记
 * */
function getActivitys (_callback) {
	var content = new Object();
	var request = getRequestMsgAsString("app","getActivitys",content);
	extendPOST(request,_callback);
}

/**
 *wu0wu
 * 功能:获取Activity名称
 *
 * @param _callback 回调对象
 *
 *
 * 命令字： getActivityLabels
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *		{
 *			"labels":
 *			[
 *				{"activityName":"com.qihoo360.mobilesafe.ui.index.AppEnterActivity","label":" 360手机卫士"}
 *			]
 *		},
 *	"command":"getActivityLabels",
 *	"region":"app",
 *	"success":true
 *}
 *
 * JSON格式说明：
 * 		label：软件apk名
 * 		activityName：activity名
 *       success：请求成功标记
 * */
function getActivityLabels(_activityInfos,_callback) {
	var content = new Object();
	content.activityInfos = _activityInfos;
	var request = getRequestMsgAsString("app", "getActivityLabels", content);
	extendPOST(request, _callback);
}

//wu0wu
function getApkPermission(_packageName,_callback) {
	var content = new Object();
	content.packageName = _packageName;
	var request = getRequestMsgAsString("app","getApkPermission",content);
	extendPOST(request,_callback);
}