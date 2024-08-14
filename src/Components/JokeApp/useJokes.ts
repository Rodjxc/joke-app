import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import type { Joke } from "../../client/apiTypes";

export const useJokes = (currentPage: number, pageSize: number) => {
	const [jokes, setJokes] = useState<Joke[]>([]);
	const [loading, setLoading] = useState(false);

	const fetchJokes = useCallback(async () => {
		setLoading(true);
		const idStart = currentPage * pageSize - pageSize;
		const idEnd = idStart + pageSize;
		const response = await axios.get(
			`https://v2.jokeapi.dev/joke/Any?type=single&idRange=${idStart}-${idEnd}&amount=10`,
		);
		setLoading(false);
		setJokes(response.data.jokes);
	}, [currentPage, pageSize]);

	useEffect(() => {
		fetchJokes();
	}, [fetchJokes]);

	return { jokes, loading, setJokes };
};
