import { Table, Button } from "antd";
import { useTranslation } from "react-i18next";
import { JokeFlags } from "./JokeFlags";
import type { Joke } from "../../client/apiTypes";

interface JokeTableProps {
	jokes: Joke[];
	currentPage: number;
	pageSize: number;
	totalJokes: number;
	loading: boolean;
	onPageChange: (page: number, pageSize?: number) => void;
	onEdit: (joke: Joke) => void;
	darkMode: boolean;
}

export const JokeTable: React.FC<JokeTableProps> = ({
	jokes,
	currentPage,
	pageSize,
	totalJokes,
	loading,
	onPageChange,
	onEdit,
	darkMode,
}) => {
	const { t } = useTranslation();

	const columns = [
		{
			title: t("tableHeaders.category"),
			dataIndex: "category",
			key: "category",
		},
		{
			title: t("tableHeaders.joke"),
			dataIndex: "joke",
			key: "joke",
		},
		{
			title: t("tableHeaders.flag"),
			dataIndex: "flags",
			key: "flags",
			render: (flags: Joke["flags"]) => <JokeFlags flags={flags} />,
		},
		{
			title: "Action",
			key: "action",
			render: (record: Joke) => (
				<Button onClick={() => onEdit(record)}>Edit</Button>
			),
		},
	];

	return (
		<>
			{loading && <p>Loading Jokes...</p>}
			<Table
				rowKey="id"
				columns={columns}
				dataSource={jokes}
				pagination={{
					current: currentPage,
					pageSize: pageSize,
					total: totalJokes,
					showSizeChanger: false,
				}}
				onChange={(pagination) =>
					onPageChange(pagination.current || 1, pagination.pageSize)
				}
				style={{
					background: darkMode ? "#333" : "white",
					color: darkMode ? "white" : "black",
				}}
			/>
		</>
	);
};
