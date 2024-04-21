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

const wallet = async () => {
  const token = JSON.parse(localStorage.getItem("authToken"));

  if (!token) {
    console.error("Token not found in localStorage");
    return null;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(`${API_URL}/trader/wallet`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching stock quote:", error);
    return null;
  }
};

const stock = async (symbol) => {
  const token = JSON.parse(localStorage.getItem("authToken"));

  if (!token) {
    console.error("Token not found in localStorage");
    return null;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const params = {
    symbol: symbol,
  };

  try {
    const response = await axios.get(`${API_URL}/trader/stock`, {
      params: params,
      headers: config.headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stock quote:", error);
    return null;
  }
};

const authService = {
  login,
  register,
  wallet,
  stock,
};

export default authService;
