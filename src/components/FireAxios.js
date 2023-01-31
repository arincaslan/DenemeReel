import axios from "axios";

export default axios.create({
  baseURL: "https://react-reelest-default-rtdb.europe-west1.firebasedatabase.app/",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    'Access-Control-Allow-Headers': '*',
  },
});
