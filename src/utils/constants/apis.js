import axios from "axios";

function getConfig() {
  const config = {
    Headers: {
      authorization: localStorage.getItem("token"),
      "content-type": "application/json",
    },
  };
  return config;
}

// Signup
export function postSignUpDetailsApi(data) {
  const URL = "/api/auth/signup";
  return axios.post(URL, data, getConfig());
}

// Login
export function postLoginDetailsApi(data) {
  const URL = "/api/auth/login";
  return axios.post(URL, data, getConfig());
}
