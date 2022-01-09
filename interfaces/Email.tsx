export interface IEmail {
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

export interface IEmailStatus {
	sentToBrandon: boolean;
	sentToSubmitter: boolean;
}
