import axios from "axios";

export const getTodos = async (pageNumber: number) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?_limit=5&_page=${pageNumber}`
  );
  return data;
};

export const postTodo = async (todoData: object) => {
  const { data: response } = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    todoData
  );
  return response.data;
};
