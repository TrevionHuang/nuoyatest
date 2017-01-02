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
				out_trade_no: `20170101${Math.random().toString().substr(2, 10)}`,
				body: '测试扫码支付',
				total_fee: 1,
				mch_create_ip: '127.0.0.1',
				notify_url: 'http://xxxxxxxx/order/api/notify',
				time_start: 20170101072500, // (new Date()).Format('yyyyMMddhhmmss'),
				time_expire: 20170101083000, // myDate.Format('yyyyMMddhhmmss'),
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
});