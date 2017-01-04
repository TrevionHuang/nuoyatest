/**
 * Created by TrevionHuang on 2017/1/1 0001.
 */
import SFPay from '../sfpay';
import { expect } from 'chai';

describe('sfpay', () => {
	describe.skip('sPay', () => {
		it('sPay should ok', async () => {
			let result = false;
			const params = {
				out_trade_no: `20170103${Math.random().toString().substr(2, 10)}`,
				body: '测试扫码支付',
				total_fee: 1,
				mch_create_ip: '127.0.0.1',
				notify_url: 'http://wx.nuoyadalu.com/order/api/notify',
				time_start: '20170103104500', // yyyyMMddhhmmss
				time_expire: '20170103160000', // yyyyMMddhhmmss
				goods_tag: 'mj',
				product_id: 'qr1001'
			};
			const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx'});
			const qrPayRes = await sfPay.sPay(params);
			console.log(`The value of qrPayRes is ${JSON.stringify(qrPayRes)}`);
			if (qrPayRes) result = true;
			expect(result).to.equal(true);
		});
	});

	describe.skip('jPay', () => {
		it('jPay should ok', async () => {
			let result = false;
			const params = {
				out_trade_no: `20170103${Math.random().toString().substr(2, 10)}`,
				wx_appid: 'xxxxxxxxxxxxxxxx',
				openid: 'xxxxxxxxxxxxxxxxxxxxx',
				body: '测试jsAPI支付',
				total_fee: 100,
				mch_create_ip: '127.0.0.1',
				notify_url: 'http://xxxxxxxxxxxxx/order/api/notify',
				goods_tag: 'mj' // 例如：满减
			};
			const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx'});
			const jPayRes = await sfPay.jPay(params);
			console.log(`The value of jPayRes is ${JSON.stringify(jPayRes)}`);
			if (jPayRes) result = true;
			expect(result).to.equal(true);
		});
	});

	describe.skip('tradeQry', () => {
		it('tradeQry should ok', async () => {
			let result = false;
			const params = {
				out_trade_no: 'xxxxxxxxxxxxxxxxxxxx'
			};
			const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx'});
			const tradeQryRes = await sfPay.tradeQry(params);
			console.log(`The value of tradeQryRes is ${JSON.stringify(tradeQryRes)}`);
			if (tradeQryRes) result = true;
			expect(result).to.equal(true);
		});
	});

	describe.skip('rfd', () => {
		it('rfd should ok', async () => {
			let result = false;
			const params = {
				out_trade_no: 'xxxxxxxxxxxxxxxxxxxx', // 商户订单号
				out_refund_no: 'xxxxxxxxxxxxxxxxxxxx', // 商户退款单号，32 个字符内
				total_fee: 100, // 订单总金额，单位为分
				refund_fee: 100, // 退款总金额,单位为分,可以做部分退款
				refund_channel: 'BALANCE' // ORIGINAL-原路退款，默认BALANCE-余额
			};
			const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx'});
			const rfdRes = await sfPay.rfd(params);
			console.log(`The value of rfdRes is ${JSON.stringify(rfdRes)}`);
			if (rfdRes) result = true;
			expect(result).to.equal(true);
		});
	});

	describe.skip('rfdq', () => {
		it('rfdq should ok', async () => {
			let result = false;
			const params = {
				out_trade_no: 'xxxxxxxxxxxxxxxxxxxx'
			};
			const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx'});
			const rfdqRes = await sfPay.rfdq(params);
			console.log(`The value of rfdqRes is ${JSON.stringify(rfdqRes)}`);
			if (rfdqRes) result = true;
			expect(result).to.equal(true);
		});
	});

	describe.skip('mpay', () => {
		it('mpay should ok', async () => {
			let result = false;
			const params = {
				out_trade_no: `20170103${Math.random().toString().substr(2, 10)}`,
				body: '测试扫码支付',
				total_fee: 1,
				mch_create_ip: '127.0.0.1',
				auth_code: 'xxxxxx', // 扫码支付授权码， 设备读取用户展示的条码或者二维码信息
				time_start: '20170103104500', // yyyyMMddhhmmss
				time_expire: '20170103160000', // yyyyMMddhhmmss
				goods_tag: 'coupon'
			};
			const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx'});
			const mpayRes = await sfPay.mpay(params);
			console.log(`The value of mpayRes is ${JSON.stringify(mpayRes)}`);
			if (mpayRes) result = true;
			expect(result).to.equal(true);
		});
	});
});
