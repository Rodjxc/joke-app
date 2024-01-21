import { useQuery } from "react-query";
import axios from "axios";
import { Table } from "antd";

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

const retrieveJokes = async () => {
  const response = await axios.get(
    "https://v2.jokeapi.dev/joke/Any?type=single&idRange=0-319&amount=10"
  );
  return response.data.jokes.map((joke: Joke) => ({
    key: joke.id,
    category: joke.category,
    joke: joke.joke,
    flags: joke.flags,
  }));
};

const DisplayJokes = () => {
  const { data: jokes, error, isLoading } = useQuery("jokesData", retrieveJokes);

  const columns = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Joke",
      dataIndex: "joke",
      key: "joke",
    },
    {
      title: "Flags",
      dataIndex: "flags",
      key: "flags",
      render: (flags: Joke["flags"]) => (
        <ul>
          {Object.entries(flags).map(([flag, value]) => (
            <li key={flag}>
              {flag}: {value ? "Yes" : "No"}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  if (isLoading) return <div>Fetching jokes...</div>;
  if (error) return <div>An error occurred</div>;

  return <Table dataSource={jokes} columns={columns} />;
};

export default DisplayJokes;
