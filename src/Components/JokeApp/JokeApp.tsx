import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Table, Modal, Button, Form, Input, TablePaginationConfig } from "antd";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useTranslation } from "react-i18next";

interface Joke {
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
}

const App: React.FC = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalJokes = 319;
  const { darkMode } = useDarkMode();
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingJoke, setEditingJoke] = useState<Joke | null>(null);

  const fetchJokes = useCallback(async () => {
    setLoading(true);
    const startIndex = (currentPage - 1) * pageSize;
    const response = await axios.get(
      `https://v2.jokeapi.dev/joke/Any?type=single&idRange=${startIndex}-319&amount=${pageSize}`
    );
    setLoading(false);
    setJokes(response.data.jokes);
  }, [currentPage, pageSize]);

  useEffect(() => {
    fetchJokes();
  }, [fetchJokes]);

  const handleSave = () => {
    if (editingJoke) {
      // Logic to update the joke in the jokes state
      // Example:
      // setJokes(prevJokes => prevJokes.map(joke => joke.id === editingJoke.id ? editingJoke : joke));
    }
    setIsModalVisible(false);
  };

  const handleTableChange = (newPagination: TablePaginationConfig) => {
    setCurrentPage(newPagination.current || 1);
    setPageSize(newPagination.pageSize || 10);
  };

  const openEditModal = (joke: Joke) => {
    setEditingJoke(joke);
    setIsModalVisible(true);
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
      title: 'Action',
      key: 'action',
      render: (_, record: Joke) => (
        <Button onClick={() => openEditModal(record)}>Edit</Button>
      ),
    },
  ];

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Table
        columns={columns}
        dataSource={jokes}
        pagination={{ current: currentPage, pageSize: pageSize, total: totalJokes }}
        loading={loading}
        onChange={handleTableChange}
        style={{ background: darkMode ? "#333" : "white", color: darkMode ? "white" : "black" }}
      />
      <Modal
        title="Edit Joke"
        visible={isModalVisible}
        onOk={handleSave}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form
          initialValues={{ ...editingJoke }}
        >
          <Form.Item name="joke" label="Joke">
            <Input />
          </Form.Item>
          {/* Add form items for each flag */}
        </Form>
      </Modal>
    </div>
  );
};

export default App;
