import {ReadStream} from 'fs';

export default class Request_Options {
	data?: string | Buffer | any;
	failOnStatusCode?: boolean;
	form?: {[key: string]: string | number | boolean};
	headers?: {[key: string]: string};
	ignoreHTTPSErrors?: boolean;
	maxRedirects?: number;
	method?: string;
	multipart?: {
		[key: string]:
			| string
			| number
			| boolean
			| ReadStream
			| {
					name: string;
					mimeType: string;
					buffer: Buffer;
			  };
	};
	params?: {[key: string]: string | number | boolean};
	timeout?: number;
}

const requestOptions = new Request_Options();

export {requestOptions};
