import md5 from 'MD5';
import {generateNonceString, mix, postReq} from './util';

export default class SFPay {
	constructor({key, spId, muchId}) {
		this.options = {sp_id: spId, much_id: muchId, partner_key: key};
	}

	static sign({params, partnerKey}) {
		let queryString = Object.keys(params)
			.filter(key => params[key] !== undefined && params[key] !== '' &&
			['partner_key', 'sign', 'key']
				.indexOf(key) < 0)
			.sort()
			.map(key => `${key}=${params[key]}`)
			.join('&');
		queryString = `${queryString}&key=${partnerKey}`;
		return md5(queryString).toUpperCase();
	}

	async sPay({params}) {
		const url = '/gate/wx/spay';
		return await SFPay.common({url, params, options: this.options});
	}

	async jPay({params}) {
		const url = '/gate/wx/jpay';
		return await SFPay.common({url, params, options: this.options});
	}

	static async common({url, params, options}) {
		params.nonce_str = params.nonce_str || generateNonceString({length: 32}); // eslint-disable-line
		mix(params, options);
		params.sign = SFPay.sign({params, partnerKey: options.partner_key}); // eslint-disable-line
		return await postReq({url, params});
	}
}
