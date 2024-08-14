import type { Joke } from "../../client/apiTypes";

interface JokeFlagsProps {
	flags: Joke["flags"];
}

export const JokeFlags: React.FC<JokeFlagsProps> = ({ flags }) => (
	<ul>
		{Object.entries(flags)
			.filter(([, value]) => value)
			.map(([flag]) => (
				<li key={flag}>{flag}</li>
			))}
	</ul>
);
