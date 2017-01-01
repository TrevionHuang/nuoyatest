'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.postReq = exports.reqTool = undefined;

let reqTool = exports.reqTool = function () {
	var _ref2 = _asyncToGenerator(function* (_ref3) {
		let options = _ref3.options;

		let result = null;
		try {
			yield new Promise(function (resolve, reject) {
				(0, _request2.default)(options, function (err, response, body) {
					if (!err) resolve(body);else reject(err);
				});
			}).then(function (docs) {
				result = docs;
			});
		} catch (e) {
			console.log(`ERROR:${ result }`);
		}
		return result;
	});

	return function reqTool(_x) {
		return _ref2.apply(this, arguments);
	};
}();

let postReq = exports.postReq = function () {
	var _ref4 = _asyncToGenerator(function* (_ref5) {
		let url = _ref5.url,
		    params = _ref5.params;

		console.log(`params的值为：${ JSON.stringify(params) }`);
		const options = {
			headers: { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
			url: `http://api.shangfudata.com${ url }`,
			method: 'post',
			form: params,
			json: true
		};
		return yield reqTool({ options });
	});

	return function postReq(_x2) {
		return _ref4.apply(this, arguments);
	};
}();

exports.generateNonceString = generateNonceString;
exports.mix = mix;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function generateNonceString(_ref) {
	let length = _ref.length;

	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const maxPos = chars.length;
	let nonceStr = '';
	for (let i = 0; i < (length || 32); i++) {
		nonceStr += chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return nonceStr;
}

function mix() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	const root = args[0];
	args.forEach(function (element) {
		Object.keys(element).forEach(function (key) {
			if (element.hasOwnProperty(key)) root[key] = element[key];
		});
	});
	return root;
}