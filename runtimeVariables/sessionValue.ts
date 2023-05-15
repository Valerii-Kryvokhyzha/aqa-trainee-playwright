import randomstring from 'randomstring';
import randomYear from 'random-year';

class SessionValue {
	public stringValue: string = randomstring
		.generate({length: 6, charset: 'alphabetic'})
		.toLowerCase();

	public numberValue: string = randomstring.generate({
		length: 5,
		charset: 'numeric',
	});

	public validYear: string = randomYear({min: 1900, max: 2004}).toString();
}

const sessionValue = new SessionValue();

export {sessionValue};
