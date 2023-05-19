interface ChatGPTMessageFeed {
	// Adding ChatGPT registry
	role: string;
	content: string;
}

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

	messageFeed[0].message = 'Hello!';
};

export const getCurrentTimestamp = (): string => {
	return new Date().toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	});
};

// --------------- CREATE MESSAGES FEED (GPT ALSO) -------------------

let messageFeed: MessageFeed[] = [
	{
		id: 0,
		host: false,
		avatar: 24,
		name: 'Assistant',
		timestamp: `Today @ ${getCurrentTimestamp()}`,
		message: 'Hello! How can I help you with?',
		color: 'variant-soft-primary'
	}
];

// ChatGPT messages
let chatGPTMessageFeed: ChatGPTMessageFeed[] = [
	{
		role: 'system',
		content:
			'You are a helpful assistant, specialized into the financial world.'
	}
];

// --------------- GET MESSAGES FUNCTIONS -------------------

export const getMessageFeed = () => {
	return messageFeed;
};

export const getGPTMessageFeed = () => {
	return chatGPTMessageFeed;
};

// --------------- ADD MESSAGES FUNCTIONS -------------------

export const addGPTMessage = (
	chatGPT_role: string,
	chatGPT_content: string
): void => {
	const newGPTMessage: ChatGPTMessageFeed = {
		role: chatGPT_role,
		content: chatGPT_content
	};

	chatGPTMessageFeed = [...chatGPTMessageFeed, newGPTMessage];
};

export const addUserMessage = (message: string) => {
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

export const addAssistantMessage = (message: string) => {
	const newMessage: MessageFeed = {
		id: messageFeed.length,
		host: false,
		avatar: 24,
		name: 'Assistant',
		timestamp: `Today @ ${getCurrentTimestamp()}`,
		message: message,
		color: 'variant-soft-primary'
	};

	messageFeed = [...messageFeed, newMessage];

	return newMessage;
};
