/**
 * wu0wu
 *功能：获得首页广告信息
 *
 * @param _callback 回调对象
 *
 *
 * 命令字： getHomepageAD
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"homepageAD":
 *		[
 *			{"url":"img/homepage/home_ad.jpg","name":"机锋市场","id":"1000"}
 *		]
 *	},
 *	"command":"getHomepageAD",
 *	"region":"home",
 *	"success":true
 *}
 * JSON格式说明：
 * 		url:  网络地址
 * 		name：名字
 * 		id:   数据库id
 *      success：请求成功标记
 *
 * warning:假数据
 * */
function getHomepageAD (_callback) {
	_callback.success(falseData_getHomepageAD);
}

var falseData_getHomepageAD='{"content":{"homepageAD":[{"url":"img/homepage/home_ad.jpg","name":"机锋市场","id":"1000"}]},"command":"getHomepageAD","region":"home","success":true}';
/**
 * wu0wu
 *功能：获得首页应用排行
 *
 * @param _callback 回调对象
 *
 *
 * 命令字： homepageAppRank
 *
 *
 * @return
 *
 * 应答内容(JSON格式):
 *{
 *	"content":
 *	{
 *		"homepageAppRank":
 *		[
 *			{"url":"img/homepage/home_ad.jpg","name":"机锋市场","id":"1000"}
 *		]
 *	},
 *	"command":"getHomepageAD",
 *	"region":"home",
 *	"success":true
 *}
 * JSON格式说明：
 * 		url:  网络地址
 * 		name：名字
 * 		id:   数据库id
 *      success：请求成功标记
 *
 * warning:假数据
 * */
function getHomepageAppRank (_callback) {
  _callback.success(falseData_getHomepageAppRank);
}

var falseData_getHomepageAppRank='{"content":{"homepageAppRank":[{"url":"img/homepage/apprank/birthday.png","name":"Ani生日备忘","id":"1001"},{"url":"img/homepage/apprank/liuliang.png","name":"流量监测仪","id":"1002"},{"url":"img/homepage/apprank/moji.png","name":"墨迹天气","id":"1003"},{"url":"img/homepage/apprank/quick.png","name":"快拍二维码","id":"1004"},{"url":"img/homepage/apprank/xiaoliao.png","name":"愤怒的小鸟","id":"1005"},{"url":"img/homepage/apprank/xiaomi.png","name":"小米分享","id":"1006"}]},"command":"getHomepageAppRank","region":"home","success":true}';