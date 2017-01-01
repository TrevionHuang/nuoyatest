import request from 'request';

export function generateNonceString({length}) {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const maxPos = chars.length;
	let nonceStr = '';
	for (let i = 0; i < (length || 32); i++) {
		nonceStr += chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return nonceStr;
}

export async function reqTool({options}) {
	let result = null;
	try {
		await new Promise((resolve, reject) => {
			request(options, (err, response, body) => {
				if (!err) resolve(body);
				else reject(err);
			});
		}).then(docs => {
			result = docs;
		});
	} catch (e) {
		console.log(`ERROR:${result}`);
	}
	return result;
}

export function mix(...args) {
	const root = args[0];
	args.forEach(element => {
		Object.keys(element).forEach(key => {
			if (element.hasOwnProperty(key)) root[key] = element[key];
		});
	});
	return root;
}

export async function postReq({url, params}) {
	console.log(`params的值为：${JSON.stringify(params)}`);
	const options = {
		headers: {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'},
		url: `http://api.shangfudata.com${url}`,
		method: 'post',
		form: params,
		json: true
	};
	return await reqTool({options});
}
