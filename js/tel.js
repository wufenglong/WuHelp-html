/**
 *wu0wu
 * 功能:根据电话号码获取通话记录，如果电话号码为空或者等于“”，则返回全部通话记录
 *
 * @param _callback 回调对象
 *
 *        _phoneNumber 电话号码,如果电话号码为空或者等于“”，则返回全部通话记录
 *
 * 命令字： getCallLogs
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"calls":
 *		[
 *			["2","13811115788","1306635063637","0","2","A"],
 *			["157","03168123513","1309094424242","106","1","D大姐Lt"]
 *		]
 *	},
 *	"command":"getCallLogs",
 *	"region":"tel",
 *	"success":true
 *}
 *
 * JSON格式说明：
 * 		calls[][0]: id
 * 		calls[][1]: 电话号码
 * 		calls[][2]: 通话时间，long型时间
 * 		calls[][3]: 持续时长，秒
 * 		calls[][4]： 通话类型，1为已接；2为打出；3为未接
 * 		calls[][5]: 联系人姓名
 *       success：请求成功标记
 * */
function getCallLogs(_phoneNumber, _callback) {
	var content = new Object();
	content.phoneNumber = _phoneNumber;
	var request = getRequestMsgAsString("tel", "getCallLogs", content);
	extendPOST(request, _callback);
}

/**
 *wu0wu
 * 功能:根据通话记录编号删除通话记录，如果编号为空或等于“”，则全部清空
 *
 * @param _callback 回调对象
 *
 *        _callLogIds 电话号码,如果电话号码为空或者等于“”，则返回全部通话记录
 *
 * 命令字： removeCallLogs
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 * {
 *	"content":
 *		{
 *			"count":2
 *		},
 *	"command":"delSmsMessage",
 *	"region":"tel",
 *	"success":true
 *}
 * JSON格式说明：
 * 		count:返回删除的通话记录数
 *       success：请求成功标记
 * */
function removeCallLogs(_callLogIds, _callback) {
	var content = new Object();
	content.ids = _callLogIds;
	var request = getRequestMsgAsString("tel", "removeCallLogs", content);
	extendPOST(request, _callback);
}

/**
 *wu0wu
 * 功能:获取会话列表
 *
 * 提示：conversations会话数组中每条对应指定联系人的对话，conversations[4]好像是每后一条短信对话
 *
 * @param _callback 回调对象
 *
 * 命令字： getConversations
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"conversations":
 *		[
 *			{
 *				"contactInfos":[["+8613833680099","26","D大姐",""]],
 *				"infos":["14","1310901108000","57","11","到家了吗？","0","1"]
 *			},
 *			{
 *				"contactInfos":[["13261534982","181","L李聪",""]],
 *				"infos":["138","1310892786707","10","118","我才下车。去。晚点到","0","1"]
 *			}
 *		]
 *	},
 *	"command":"getConversations",
 *	"region":"tel",
 *	"success":true
 *}
 *
 * JSON格式说明：
 * 		contactInfos是个二维数组，即一个会话有多个号码（群发）
 * 		conversations[].contactInfos[][0]:电话号
 * 		conversations[].contactInfos[][1]: rowid
 * 		conversations[].contactInfos[][2]: 联系人姓名
 * 		conversations[].contactInfos[][3]: 联系人photoId
 * 		conversations[].infos[0]: conversations id 用于查询详细对话内容（getMessages（）方法用这个为参数）
 * 		conversations[].infos[1]: 对话时间，long型时间
 * 		conversations[].infos[2]:
 * 		conversations[].infos[3]:
 * 		conversations[].infos[4]： 最后一条对话内容
 * 		conversations[].infos[5]:
 * 		conversations[].infos[6]: 短信类型，是否已读等
 *      success：请求成功标记
 * */
function getConversations(_callback) {
	var content = new Object();
	var request = getRequestMsgAsString("tel", "getConversations", content);
	extendPOST(request, _callback);
}

/**
 *wu0wu
 * 功能:根据会话编号conversationId获取全部对话
 *
 * 提示：和getConversations（）关联使用
 *
 * @param _callback 回调对象
 *
 * 		  _conversationId 会话ID
 *
 * 命令字： getMessages
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"messages":
 *		[
 *			["362","131","2",null,"京东网城是4098 国美是3999","1308978543319","1","sms"],
 *			["355","131","2",null,"恩","1308922846271","1","sms"],
 *		]
 *	},
 *	"command":"getMessages",
 *	"region":"tel",
 *	"success":true
 *}
 *
 * JSON格式说明：
 * 		conversations[0]: 短信 id 单条短信的id
 * 		conversations[1]: conversations id 会话id
 * 		conversations[2]: 类型，1=收件箱；2=已发送；3=草稿箱；4=发件箱；5=发送失败
 * 		conversations[3]:
 * 		conversations[4]： 短信内容
 * 		conversations[5]: 电话号
 * 		conversations[6]: 短信类型，1=已读；0=未读
 * 		conversations[7]:
 *      success：请求成功标记
 * */
function getMessages(_conversationId, _callback) {
	var content = new Object();
	content.conversationId = _conversationId;
	var request = getRequestMsgAsString("tel", "getMessages", content);
	extendPOST(request, _callback);
}

/**
 *wu0wu
 * 功能:获得联系人列表
 *
 * @param _callback 回调对象
 *
 * 命令字： getContacts
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"contacts":
 *		[
 *			{"phones":[["66","35","13167503362","2",null]],"info":["35",null,"1","1","F房建","content:\/\/settings\/system\/ringtone","33"]},
 *			{"phones":[["72","26","15831617888","2",null]],"info":["36",null,"1","1","G高猛","content:\/\/settings\/system\/ringtone","33"]},
 *		]
 *	},
 *	"command":"getContacts",
 *	"region":"tel",
 *	"success":true
 *}
 *
 *  JSON格式说明：
 *       phones[][0]: Data._id
 *       phones[][1]: Contactid
 * 	     phones[][2]: 号码
 *       phones[][3]: 类型，1=TYPE_HOME；2=TYPE_MOBILE；3=TYPE_WORK；4=TYPE_FAX_WORK；5=TYPE_FAX_HOME；6=TYPE_PAGER；7=TYPE_OTHER
 *       phones[][4]: 自定义label
 * 		 info[0]: Contacts._ID
 *       info[1]: Contacts.PHOTO_ID
 *       info[2]: Contacts.IN_VISIBLE_GROUP
 *       info[3]: Contacts.HAS_PHONE_NUMBER 是否有电话号码  1=有；0=无
 *       info[4]: 姓名
 *       info[5]: 铃声
 * 		 info[6]: RawContactId
 * */
function getContacts(_callback) {
	var content = new Object();
	var request = getRequestMsgAsString("tel", "getContacts", content);
	extendPOST(request, _callback);
}

/**
 *wu0wu
 * 功能:按电话号码查询联系人
 *
 * @param _callback 回调对象
 *
 *        _phoneNumber 电话号码
 *
 * 命令字： getContactsByPhoneNumber
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"contactsByPhoneNumber":
 *		[
 *			["2","A",null]
 *		]
 *	},
 *	"command":"getContactsByPhoneNumber",
 *	"region":"tel",
 *	"success":true
 *}
 * JSON格式说明：
 * 		 contactsByPhoneNumber[0] PhoneLookup._ID
 * 		 contactsByPhoneNumber[1] 联系人姓名
 * 		 contactsByPhoneNumber[2] 图片id PHOTO_ID
 *       success：请求成功标记
 * */
function getContactsByPhoneNumber(_phoneNumber,_callback) {
	var content = new Object();
	content.phoneNumber = _phoneNumber;
	var request = getRequestMsgAsString("tel","getContactsByPhoneNumber",content);
	extendPOST(request,_callback);
}

/**
 *wu0wu
 * 功能:根据会话编号conversionId删除短信会话
 *
 * @param _callback 回调对象
 *
 *        _conversationId String 会话id
 *
 * 命令字： delConversations
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"count":1
 *	},
 *	"command":"delConversations",
 *	"region":"tel",
 *	"success":true
 *}
 * JSON格式说明：
 * 		count:返回删除的短信会话数
 *       success：请求成功标记
 * */
function delConversations (_conversationId,_callback) {
	var content = new Object();
	content.conversationId=_conversationId;
	var request = getRequestMsgAsString("tel","delConversations",content);
	extendPOST(request,_callback);
}

/**
 *wu0wu
 * 功能:根据会话编号conversionId删除短信会话
 *
 * @param _callback 回调对象
 *
 *        _rawIds String RawContactId
 *
 * 命令字： delConversations
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{"content":{"deleted":1},"command":"delContacts","region":"tel","success":true}
 * JSON格式说明：
 * 		deleted:返回删除的联系人数
 *       success：请求成功标记
 * */
function delContacts (_rawIds,_callback) {
	var content = new Object();
	content.rawIds=_rawIds;
	var request = getRequestMsgAsString("tel","delContacts",content);
	extendPOST(request,_callback);
}

//wu0wu
function getMmsPart (_mmsId,_callback) {
	var content = new Object();
	content.mmsId = _mmsId;
	var request = getRequestMsgAsString("tel","getMmsPart",content);
	extentPOST(request,_callback);
}

/**
 *wu0wu
 * 功能:发送短信
 *
 * @param _callback 回调对象
 *
 *        _numbers String[] 多个电话号码，用分号隔开
 *
 * 	      _body   String 内容
 *
 * 命令字： sendSmsMessage
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":{},
 *	"command":"sendSmsMessage",
 *	"region":"tel",
 *	"success":true
 *}
 * JSON格式说明：
 *       success：请求成功标记
 * */
function sendSmsMessage(_numbers,_body,_callback) {
	var content = new Object();
	content.numbers = _numbers;
	content.body = _body;
	var request = getRequestMsgAsString("tel", "sendSmsMessage", content);
	extendPOST(request, _callback);
}

/**
 *wu0wu
 * 功能:根据会话编号conversionId删除短信会话
 *
 * @param _callback 回调对象
 *
 *        _smsIds String[] 要删除的id数组
 *
 * 命令字： delSmsMessage
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"count":1
 *	},
 *	"command":"delSmsMessage",
 *	"region":"tel",
 *	"success":true
 *}
 * JSON格式说明：
 * 		count:返回删除的短信数
 *       success：请求成功标记
 * */
function delSmsMessage(_smsIds,_callback) {
	var content = new Object();
	content.smsIds = _smsIds;
	var request = getRequestMsgAsString("tel", "delSmsMessage", content);
	extendPOST(request, _callback);
}

/**
 *wu0wu
 * 功能:根据ContactId获取联系人详细信息
 *
 * @param _callback 回调对象
 *
 *        _contactId String contactId
 *
 * 命令字： getContactByContactId
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"contact":
 *		{
 *			"displayName":"F房建",
 *			"email":
 *			[
 *				["fangjian@163.com","",""],
 *				["fangjian1@163.com","",""]
 *			],
 *		}
 *	},
 *	"command":"getContactByContactId",
 *	"region":"tel",
 *	"success":true
 *}
 * JSON格式说明：
 * 		 数据都有可能为空	
 * 		 email[][0]: email地址
 *       email[][1]: 类型：1=TYPE_HOME；2=TYPE_WORK；3=TYPE_OTHER；4=TYPE_MOBILE；(有些手机可能为空)
 *       email[][2]: 自定义email的标签Label,可能为空
 *       success：请求成功标记
 * */
function getContactByContactId(_contactId,_callback) {
	var content = new Object();
	content.contactId = _contactId;
	var request = getRequestMsgAsString("tel", "getContactByContactId", content);
	extendPOST(request, _callback);
}

/**
 *wu0wu
 * 功能:快速新建联系人
 *
 * @param _callback 回调对象
 *
 *        _displayName String 姓名
 *
 * 		  _mobilePhone String 手机号
 *
 * 命令字： flashInsertContact
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"contactId":"191"
 *	},
 *	"command":"flashInsertContact",
 *	"region":"tel",
 *	"success":true
 *}
 * JSON格式说明：
 *       contactId ：contactId
 *       success：请求成功标记
 * */
function flashInsertContact(_displayName,_mobilePhone,_callback) {
	var content = new Object();
	content.displayName = _displayName;
	content.mobilePhone = _mobilePhone;
	var request = getRequestMsgAsString("tel", "flashInsertContact", content);
	extendPOST(request, _callback);
}