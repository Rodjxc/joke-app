import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import {
	Table,
	Modal,
	Button,
	Form,
	Input,
	type TablePaginationConfig,
	Checkbox,
} from "antd";
import { useTranslation } from "react-i18next";
import type { Joke } from "../../client/apiTypes";
import { useDarkMode } from "../../Context/useDarkMode";

const App: React.FC = () => {
	const [jokes, setJokes] = useState<Joke[]>([]);
	const [loading, setLoading] = useState(false);

	//in use for the pagination system
	const [currentPage, setCurrentPage] = useState(1);

	//the amount of jokes it'll show per page
	const [pageSize, setPageSize] = useState(10);
	const totalJokes = 290;

	//Dark Mode hook
	const { darkMode } = useDarkMode();

	//Translation hook
	const { t } = useTranslation();

	//Opens and closes the Edit Modal PopUp
	const [isModalVisible, setIsModalVisible] = useState(false);

	const [editingJoke, setEditingJoke] = useState<Joke | null>(null);

	const fetchJokes = useCallback(async () => {
		setLoading(true);

		// Here we tell it to fetch certain range of jokes: currentpage=(1*10-10)=1. And idEnd would be that +10 so we fetch 10 at a time
		//It will display less jokes per page because maybe on the range 10-20 there's 3 "single" jokes and so on.
		const idStart = currentPage * 10 - 10;
		const idEnd = idStart + 10;
		const response = await axios.get(
			`https://v2.jokeapi.dev/joke/Any?type=single&idRange=${idStart}-${idEnd}&amount=10`,
		);
		setLoading(false);
		setJokes(response.data.jokes);
	}, [currentPage]);

	//We fetch the jokes when the page loads
	useEffect(() => {
		fetchJokes();
	}, [fetchJokes]);

	const handleTableChange = (newPagination: TablePaginationConfig) => {
		setCurrentPage(newPagination.current || 1);
		setPageSize(newPagination.pageSize || 20);
	};

	const [form] = Form.useForm();

	//This is the hook for the save function in the modal popUp
	const handleSave = () => {
		form
			.validateFields()
			.then((values) => {
				if (editingJoke) {
					// Update the jokes array with the new joke text
					setJokes((prevJokes) =>
						prevJokes.map((joke) =>
							joke.id === editingJoke.id ? { ...joke, ...values } : joke,
						),
					);
				}
				setIsModalVisible(false);
				form.resetFields(); // Reset form after submission
			})
			.catch((error) => {
				console.log("Validating Failed:", error);
			});
	};

	const openEditModal = (joke: Joke) => {
		setEditingJoke(joke);
		form.setFieldsValue({ ...joke, flags: joke.flags }); //This sets the initial value to the selected joke and the initial flags
		setIsModalVisible(true); //This changes teh status to true, making it visible
	};

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
			render: (flags: Joke["flags"]) => (
				<ul>
					{Object.entries(flags)
						.filter(([, value]) => value)
						.map(([flag]) => (
							<li key={flag}>{flag}</li>
						))}
				</ul>
			),
		},
		{
			title: "Action",
			key: "action",
			render: (record: Joke) => (
				<Button onClick={() => openEditModal(record)}>Edit</Button>
			),
		},
	];

	return (
		<div className={darkMode ? "dark-mode" : ""}>
			{loading && <p>Loading Jokes...</p>}{" "}
			{/* It'll display a Loading messsage when fetching */}
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
				onChange={handleTableChange}
				style={{
					background: darkMode ? "#333" : "white",
					color: darkMode ? "white" : "black",
				}}
			/>
			<Modal
				title="Edit Joke"
				open={isModalVisible}
				onOk={handleSave}
				onCancel={() => setIsModalVisible(false)}
			>
				<Form
					form={form}
					initialValues={{ ...editingJoke }} //This updates the joke every time we select one with the selected one
				>
					<Form.Item name="joke" label="Joke">
						<Input />
					</Form.Item>
					<Form.Item name={["flags", "nsfw"]} valuePropName="checked">
						<Checkbox>NSFW</Checkbox>
					</Form.Item>
					<Form.Item name={["flags", "explicit"]} valuePropName="checked">
						<Checkbox>Explicit</Checkbox>
					</Form.Item>
					<Form.Item name={["flags", "racist"]} valuePropName="checked">
						<Checkbox>Racist</Checkbox>
					</Form.Item>
					<Form.Item name={["flags", "religious"]} valuePropName="checked">
						<Checkbox>Religious</Checkbox>
					</Form.Item>
					<Form.Item name={["flags", "sexist"]} valuePropName="checked">
						<Checkbox>Sexist</Checkbox>
					</Form.Item>
					{/* Add form items for each flag */}
				</Form>
			</Modal>
		</div>
	);
};

export default App;
