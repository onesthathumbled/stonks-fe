import axios from "axios";

const API_URL = "http://localhost:4000";

const login = async (user) => {
  const response = await axios.post(`${API_URL}/user/login`, { user });

  const authToken = response.headers.authorization;

  if (authToken) {
    const tokenWithoutBearer = authToken.replace(/^Bearer\s+/i, "");

    localStorage.setItem("authToken", JSON.stringify(tokenWithoutBearer));
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const register = async (user) => {
  const response = await axios.post(`${API_URL}/user/register`, { user });

  const authToken = response.headers.authorization;

  if (authToken) {
    const tokenWithoutBearer = authToken.replace(/^Bearer\s+/i, "");

    localStorage.setItem("authToken", JSON.stringify(tokenWithoutBearer));
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  login,
  register,
};

export default authService;
