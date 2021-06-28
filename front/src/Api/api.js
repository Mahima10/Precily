import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080", // The API (main url for fetching data) URL
});

export default instance;
