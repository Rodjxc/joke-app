export type Joke = {
	id: number;
	category: string;
	joke: string;
	flags: {
		nsfw: boolean;
		religious: boolean;
		political: boolean;
		racist: boolean;
		sexist: boolean;
		explicit: boolean;
	};
};
