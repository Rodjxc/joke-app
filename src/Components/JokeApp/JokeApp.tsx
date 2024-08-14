import { useState } from "react";
import { JokeTable } from "./JokeTable";
import { EditJokeModal } from "./EditJokeModal";
import { useJokes } from "./useJokes";
import type { Joke } from "../../client/apiTypes";
import { useDarkMode } from "../../Context/useDarkMode";

export const JokeApp: React.FC = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const totalJokes = 290;
	const { jokes, loading, setJokes } = useJokes(currentPage, pageSize); // Now includes setJokes

	const { darkMode } = useDarkMode();

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [editingJoke, setEditingJoke] = useState<Joke | null>(null);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const openEditModal = (joke: Joke) => {
		setEditingJoke(joke);
		setIsModalVisible(true);
	};

	const handleSave = (values: Partial<Joke>) => {
		// Adjusted type
		if (editingJoke) {
			setJokes((prevJokes) =>
				prevJokes.map((joke) =>
					joke.id === editingJoke.id ? { ...joke, ...values } : joke,
				),
			);
		}
		setIsModalVisible(false);
	};

	return (
		<div className={darkMode ? "dark-mode" : ""}>
			<JokeTable
				jokes={jokes}
				currentPage={currentPage}
				pageSize={pageSize}
				totalJokes={totalJokes}
				loading={loading}
				onPageChange={handlePageChange}
				onEdit={openEditModal}
				darkMode={darkMode}
			/>
			<EditJokeModal
				visible={isModalVisible}
				joke={editingJoke}
				onSave={handleSave}
				onCancel={() => setIsModalVisible(false)}
			/>
		</div>
	);
};
