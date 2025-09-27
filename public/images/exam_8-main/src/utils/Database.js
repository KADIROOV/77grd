import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://my-json-server.typicode.com/kadiroov/exam-api",
});
