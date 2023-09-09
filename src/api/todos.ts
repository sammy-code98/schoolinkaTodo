import axios from "axios";

export const getTodos = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
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
