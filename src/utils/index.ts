import * as yup from "yup";

export const addTaskSchema = yup.object().shape({
  task: yup.string().required("Please enter your task for the day").max(100),
});


