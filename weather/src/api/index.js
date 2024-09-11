import Axios from "axios";

export default class api {
	constructor() {
		const headers = {
			"Content-Type": "application/json; charset=UTF8",
		};
		this.time_out = 10000;
		this.maxRedirects = 2;
		this.baseURL = "https://api.open-meteo.com/v1";
		this.xhr = Axios.create({
			baseURL: this.baseURL,
			headers,
			responseType: "json",
		});
	}

	handleErr = (err) => {
		// Handle all errors here..
	};

	handleRes = (res) => {
		// Handle all responses here..
	};

	Get(url, params) {
		return new Promise((resolve, reject) => {
			const data = { method: "get" };
			if (params) data.params = params;
			this.xhr
				.request(url, data)
				.then((res) => {
					this.handleRes(res);
					resolve(res);
				})
				.catch((err) => {
					this.handleErr(err);
					reject(err);
				});
		});
	}

	Put(url, params) {
		return new Promise((resolve, reject) => {
			this.xhr
				.put(url, params)
				.then((res) => {
					this.handleRes(res);
					resolve(res);
				})
				.catch((err) => {
					this.handleErr(err);
					reject(err);
				});
		});
	}

	Post(url, params) {
		return new Promise((resolve, reject) => {
			this.xhr
				.post(url, params ? params : null)
				.then((res) => {
					this.handleRes(res);
					resolve(res);
				})
				.catch((err) => {
					this.handleErr(err);
					reject(err);
				});
		});
	}

	Delete(url, data) {
		return new Promise((resolve, reject) => {
			this.xhr
				.delete(url, data ? { data } : null)
				.then((res) => {
					this.handleRes(res);
					resolve(res);
				})
				.catch((err) => {
					this.handleErr(err);
					reject(err);
				});
		});
	}
}
