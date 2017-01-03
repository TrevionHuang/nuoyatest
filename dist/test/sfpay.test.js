'use strict';

var _sfpay = require('../sfpay');

var _sfpay2 = _interopRequireDefault(_sfpay);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by TrevionHuang on 2017/1/1 0001.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


describe('sfpay', function () {
	describe('sPay', function () {
		it('sPay should ok', _asyncToGenerator(function* () {
			let mark = false;
			const Param = {
				out_trade_no: `20170103${ Math.random().toString().substr(2, 10) }`,
				body: '测试扫码支付',
				total_fee: 1,
				mch_create_ip: '127.0.0.1',
				notify_url: 'http://wx.nuoyadalu.com/order/api/notify',
				time_start: '20170103104500', // yyyyMMddhhmmss
				time_expire: '20170103160000', // yyyyMMddhhmmss
				goods_tag: 'mj',
				product_id: 'qr1001'
			};
			// const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx'});
			const sfPay = new _sfpay2.default({ key: '406847FBFCA442B8AA5157DADA73453D', spId: '1029', muchId: '102950000000002' });
			const qrPayRes = yield sfPay.sPay({ params: Param });
			console.log(`The value of qrRes is ${ JSON.stringify(qrPayRes) }`);
			if (qrPayRes) mark = true;
			(0, _chai.expect)(mark).to.equal(true);
		}));
	});

	describe.skip('jPay', function () {
		it('jPay should ok', _asyncToGenerator(function* () {
			let mark = false;
			const param = {
				out_trade_no: `20161212${ Math.random().toString().substr(2, 10) }`,
				wx_appid: 'xxxxxxxxxxxxxxxx',
				openid: 'xxxxxxxxxxxxxxxxxxxxx',
				body: '测试jsAPI支付',
				total_fee: 100,
				mch_create_ip: '127.0.0.1',
				notify_url: 'http://xxxxxxxxxxxxx/order/api/notify',
				goods_tag: 'mj' // 例如：满减
			};
			const sfPay = new _sfpay2.default({ key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx' });
			const qrPayRes = yield sfPay.jPay({ params: param });
			console.log(`The value of qrRes is ${ JSON.stringify(qrPayRes) }`);
			if (qrPayRes) mark = true;
			(0, _chai.expect)(mark).to.equal(true);
		}));
	});
});