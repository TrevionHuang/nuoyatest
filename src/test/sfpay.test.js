/**
 * Created by TrevionHuang on 2017/1/1 0001.
 */
import SFPay from '../sfpay';
import { expect } from 'chai';

describe('sfpay', () => {
	describe('sPay', () => {
		it('sPay should ok', async () => {
			let mark = false;
			const Param = {
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
			const qrPayRes = await sfPay.sPay({params: Param});
			console.log(`The value of qrRes is ${JSON.stringify(qrPayRes)}`);
			if (qrPayRes) mark = true;
			expect(mark).to.equal(true);
		});
	});

	describe.skip('jPay', () => {
		it('jPay should ok', async () => {
			let mark = false;
			const param = {
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
			const jPayRes = await sfPay.jPay({params: param});
			console.log(`The value of qrRes is ${JSON.stringify(jPayRes)}`);
			if (jPayRes) mark = true;
			expect(mark).to.equal(true);
		});
	});

	describe('tradeQry', () => {
		it('tradeQry should ok', async () => {
			let mark = false;
			const Param = {
				out_trade_no: 'xxxxxxxxxxxxxxxxxxxx'
			};
			const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx'});
			const tradeQryRes = await sfPay.tradeQry({params: Param});
			console.log(`The value of qrRes is ${JSON.stringify(tradeQryRes)}`);
			if (tradeQryRes) mark = true;
			expect(mark).to.equal(true);
		});
	});
});
