'use strict';

var _sfpay = require('../sfpay');

var _sfpay2 = _interopRequireDefault(_sfpay);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by TrevionHuang on 2017/1/1 0001.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


describe('sfpay', function () {
	describe.skip('sPay', function () {
		it('sPay should ok', _asyncToGenerator(function* () {
			let result = false;
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
			const sfPay = new _sfpay2.default({ key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx' });
			const qrPayRes = yield sfPay.sPay({ params: Param });
			console.log(`The value of qrPayRes is ${ JSON.stringify(qrPayRes) }`);
			if (qrPayRes) result = true;
			(0, _chai.expect)(result).to.equal(true);
		}));
	});

	describe.skip('jPay', function () {
		it('jPay should ok', _asyncToGenerator(function* () {
			let result = false;
			const param = {
				out_trade_no: `20170103${ Math.random().toString().substr(2, 10) }`,
				wx_appid: 'xxxxxxxxxxxxxxxx',
				openid: 'xxxxxxxxxxxxxxxxxxxxx',
				body: '测试jsAPI支付',
				total_fee: 100,
				mch_create_ip: '127.0.0.1',
				notify_url: 'http://xxxxxxxxxxxxx/order/api/notify',
				goods_tag: 'mj' // 例如：满减
			};
			const sfPay = new _sfpay2.default({ key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx' });
			const jPayRes = yield sfPay.jPay({ params: param });
			console.log(`The value of jPayRes is ${ JSON.stringify(jPayRes) }`);
			if (jPayRes) result = true;
			(0, _chai.expect)(result).to.equal(true);
		}));
	});

	describe.skip('tradeQry', function () {
		it('tradeQry should ok', _asyncToGenerator(function* () {
			let result = false;
			const Param = {
				out_trade_no: 'xxxxxxxxxxxxxxxxxxxx'
			};
			const sfPay = new _sfpay2.default({ key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx' });
			const tradeQryRes = yield sfPay.tradeQry({ params: Param });
			console.log(`The value of tradeQryRes is ${ JSON.stringify(tradeQryRes) }`);
			if (tradeQryRes) result = true;
			(0, _chai.expect)(result).to.equal(true);
		}));
	});

	describe.skip('rfd', function () {
		it('rfd should ok', _asyncToGenerator(function* () {
			let result = false;
			const Param = {
				out_trade_no: 'xxxxxxxxxxxxxxxxxxxx', // 商户订单号
				out_refund_no: 'xxxxxxxxxxxxxxxxxxxx', // 商户退款单号，32 个字符内
				total_fee: 100, // 订单总金额，单位为分
				refund_fee: 100, // 退款总金额,单位为分,可以做部分退款
				refund_channel: 'BALANCE' // ORIGINAL-原路退款，默认BALANCE-余额
			};
			const sfPay = new _sfpay2.default({ key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx' });
			const rfdRes = yield sfPay.rfd({ params: Param });
			console.log(`The value of rfdRes is ${ JSON.stringify(rfdRes) }`);
			if (rfdRes) result = true;
			(0, _chai.expect)(result).to.equal(true);
		}));
	});

	describe.skip('rfdq', function () {
		it('rfdq should ok', _asyncToGenerator(function* () {
			let result = false;
			const Param = {
				out_trade_no: 'xxxxxxxxxxxxxxxxxxxx'
			};
			const sfPay = new _sfpay2.default({ key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx' });
			const rfdqRes = yield sfPay.rfdq({ params: Param });
			console.log(`The value of rfdqRes is ${ JSON.stringify(rfdqRes) }`);
			if (rfdqRes) result = true;
			(0, _chai.expect)(result).to.equal(true);
		}));
	});

	describe.skip('mpay', function () {
		it('mpay should ok', _asyncToGenerator(function* () {
			let result = false;
			const Param = {
				out_trade_no: `20170103${ Math.random().toString().substr(2, 10) }`,
				body: '测试扫码支付',
				total_fee: 1,
				mch_create_ip: '127.0.0.1',
				auth_code: 'xxxxxx', // 扫码支付授权码， 设备读取用户展示的条码或者二维码信息
				time_start: '20170103104500', // yyyyMMddhhmmss
				time_expire: '20170103160000', // yyyyMMddhhmmss
				goods_tag: 'coupon'
			};
			const sfPay = new _sfpay2.default({ key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx' });
			const mpayRes = yield sfPay.mpay({ params: Param });
			console.log(`The value of mpayRes is ${ JSON.stringify(mpayRes) }`);
			if (mpayRes) result = true;
			(0, _chai.expect)(result).to.equal(true);
		}));
	});

	describe('reg', function () {
		it('reg should ok', _asyncToGenerator(function* () {
			let result = false;
			const Param = {
				mcht_name: '重庆诺亚大陆科技有限公司', // 1304700301
				mcht_short_name: '重庆诺亚大陆',
				address: '重庆市渝北区光电园麒麟C座12-3', // wx02da95761cb1c55e
				leg_name: '喻华锋',
				leg_phone: '18605812888',
				leg_email: 'walteryu@163.com',
				acc_no: '6212263602037760493', // 6212263602037760493
				acc_bank_name: '中国工商银行股份有限公司广州枫叶路支行',
				acc_bank_no: '102581002302',
				service_tel: '18605812888',
				id_type: '01',
				id_no: '422121197010125632', // 422121197010125632
				settle_cycle: '0',
				settle_type: 'REAL_PAY', // REAL_PAY BALANCE
				settle_rate: 0.0022,
				extra_rate_type: 'AMOUNT',
				extra_rate: 0
			};
			const sfPay = new _sfpay2.default({ key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx' });
			const regRes = yield sfPay.reg({ params: Param });
			console.log(`The value of regRes is ${ JSON.stringify(regRes) }`);
			if (regRes) result = true;
			(0, _chai.expect)(result).to.equal(true);
		}));
	});
});