export default interface IEmail {
	emailAddress: {
		value: string;
		valid: boolean;
	};
	subject: {
		value: string;
		valid: true;
	};
	body: {
		value: string;
		valid: boolean;
	};
}
