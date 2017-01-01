'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MD = require('MD5');

var _MD2 = _interopRequireDefault(_MD);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class SFPay {
	constructor(_ref) {
		let key = _ref.key,
		    spId = _ref.spId,
		    muchId = _ref.muchId;

		this.options = { sp_id: spId, much_id: muchId, partner_key: key };
	}

	static sign(_ref2) {
		let params = _ref2.params,
		    partnerKey = _ref2.partnerKey;

		let queryString = Object.keys(params).filter(function (key) {
			return params[key] !== undefined && params[key] !== '' && ['partner_key', 'sign', 'key'].indexOf(key) < 0;
		}).sort().map(function (key) {
			return `${ key }=${ params[key] }`;
		}).join('&');
		queryString = `${ queryString }&key=${ partnerKey }`;
		console.log(`queryString 的值为： ${ JSON.stringify(queryString) }`);
		return (0, _MD2.default)(queryString).toUpperCase();
	}

	sPay(_ref3) {
		var _this = this;

		let params = _ref3.params;
		return _asyncToGenerator(function* () {
			const url = '/gate/wx/spay';
			console.log(`options的值为：${ JSON.stringify(_this.options) } params的值为：${ JSON.stringify(params) }`);
			return yield SFPay.common({ url, params, options: _this.options });
		})();
	}

	jPay(_ref4) {
		var _this2 = this;

		let params = _ref4.params;
		return _asyncToGenerator(function* () {
			const url = '/gate/wx/jpay';
			console.log(`options的值为：${ JSON.stringify(_this2.options) } params的值为：${ JSON.stringify(params) }`);
			return yield SFPay.common({ url, params, options: _this2.options });
		})();
	}

	static common(_ref5) {
		let url = _ref5.url,
		    params = _ref5.params,
		    options = _ref5.options;
		return _asyncToGenerator(function* () {
			params.nonce_str = params.nonce_str || (0, _util.generateNonceString)({ length: 32 }); // eslint-disable-line
			(0, _util.mix)(params, options);
			params.sign = SFPay.sign({ params, partnerKey: options.partner_key }); // eslint-disable-line
			return yield (0, _util.postReq)({ url, params });
		})();
	}
}
exports.default = SFPay;