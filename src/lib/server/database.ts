interface MessageFeed {
	id: number;
	host: boolean;
	avatar: number;
	name: string;
	timestamp: string;
	message: string;
	color: string;
}

interface UserData {
	age: number;
	civilStatus: string;
	education: string;
	currentIncome: number;
	currentSavings: number;
	retirementSpending: number;
	retirementAge: number;
	lifeExpectancy: number;
}

let userData: UserData;

export const getUserData = () => {
	return userData;
};

export const addUserData = (data: UserData) => {
	userData = data;

	console.log(`User Data: ${userData}`);

	messageFeed[0].message = String(userData.age);
};

let messageFeed: MessageFeed[] = [
	{
		id: 0,
		host: true,
		avatar: 48,
		name: 'User',
		timestamp: 'Yesterday @ 4:20pm',
		message: 'Klk de lo mio!',
		color: 'variant-soft-primary'
	}
];

export const getCurrentTimestamp = (): string => {
	return new Date().toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	});
};

export const getMessageFeed = () => {
	return messageFeed;
};

export const addMessage = (message: string): void => {
	const newMessage: MessageFeed = {
		id: messageFeed.length,
		host: true,
		avatar: 48,
		name: 'User',
		timestamp: `Today @ ${getCurrentTimestamp()}`,
		message: message,
		color: 'variant-soft-primary'
	};

	messageFeed = [...messageFeed, newMessage];
};
