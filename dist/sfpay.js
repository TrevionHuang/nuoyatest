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

		this.options = { sp_id: spId, mch_id: muchId, partner_key: key };
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
		return (0, _MD2.default)(queryString).toUpperCase();
	}

	sPay(_ref3) {
		var _this = this;

		let params = _ref3.params;
		return _asyncToGenerator(function* () {
			const url = '/gate/wx/spay';
			return yield (0, _util.common)({ url, params, options: _this.options });
		})();
	}

	jPay(_ref4) {
		var _this2 = this;

		let params = _ref4.params;
		return _asyncToGenerator(function* () {
			const url = '/gate/wx/jpay';
			return yield (0, _util.common)({ url, params, options: _this2.options });
		})();
	}

	tradeQry(_ref5) {
		var _this3 = this;

		let params = _ref5.params;
		return _asyncToGenerator(function* () {
			const url = '/gate/spsvr/trade/qry';
			return yield (0, _util.common)({ url, params, options: _this3.options });
		})();
	}

	rfd(_ref6) {
		var _this4 = this;

		let params = _ref6.params;
		return _asyncToGenerator(function* () {
			const url = '/gate/wx/rfd';
			return yield (0, _util.common)({ url, params, options: _this4.options });
		})();
	}

	rfdq(_ref7) {
		var _this5 = this;

		let params = _ref7.params;
		return _asyncToGenerator(function* () {
			const url = '/gate/spsvr/trade/rfdq';
			return yield (0, _util.common)({ url, params, options: _this5.options });
		})();
	}

	mpay(_ref8) {
		var _this6 = this;

		let params = _ref8.params;
		return _asyncToGenerator(function* () {
			const url = '/gate/wx/mpay';
			return yield (0, _util.common)({ url, params, options: _this6.options });
		})();
	}

	reg(_ref9) {
		let params = _ref9.params;
		return _asyncToGenerator(function* () {
			const url = '/gate/msvr/reg';
			return yield (0, _util.common)({ url, params, options: { sp_id: '1029', partner_key: '3AB85B2E2B2C42DFAAA0B7440CA02A82' } });
		})();
	}
}
exports.default = SFPay;