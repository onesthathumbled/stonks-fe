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

const portfolio = async () => {
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
    const response = await axios.get(`${API_URL}/trader/portfolio`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching stock quote:", error);
    return null;
  }
};

const transactions = async () => {
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
    const response = await axios.get(`${API_URL}/trader/transactions`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching stock quote:", error);
    return null;
  }
};

const allTransactions = async () => {
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
    const response = await axios.get(
      `${API_URL}/admin/show_transactions`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching all transactions:", error);
    return null;
  }
};

const pendingUser = async () => {
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
    const response = await axios.get(
      `${API_URL}/admin/show_pending_traders`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching pending users:", error);
    return null;
  }
};

const currentUsers = async () => {
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
    const response = await axios.get(`${API_URL}/admin/show_traders`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching pending users:", error);
    return null;
  }
};

const addNewUser = async (user) => {
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
    const response = await axios.post(
      `${API_URL}/admin/create_new_trader`,
      { user },
      config
    );
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error creating new user:", error);
    return null;
  }
};

const getPendingUserInfo = async (user_id) => {
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
    const response = await axios.get(
      `${API_URL}/admin/show_trader/${user_id}`,
      config
    );
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error creating new user:", error);
    return null;
  }
};

const showTheUserInfo = {
  UserInfoShowStatus: null,
};

const authenticateTrader = async (user_id) => {
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

  // Assuming you want to send user status in params
  const params = {
    user: {
      status: true,
    },
  };

  try {
    const response = await axios.patch(
      `${API_URL}/admin/approve_trader/${user_id}`,
      params,
      config
    );
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error authenticating user:", error);
    return null;
  }
};

const updateTrader = async (userId, userData) => {
  try {
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
      user: {
        ...userData,
      },
    };

    const response = await axios.patch(
      `${API_URL}/admin/update_trader/${userId}`,
      params,
      config
    );
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error updating trader:", error);
    return null;
  }
};

const updateTraderPassword = async (userId, userPass) => {
  try {
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
      user: {
        password: userPass,
      },
    };

    const response = await axios.patch(
      `${API_URL}/admin/update_trader/${userId}`,
      params,
      config
    );
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error updating trader:", error);
    return null;
  }
};

const topup = async (amount) => {
  try {
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
      amount: amount,
    };

    const response = await axios.post(
      `${API_URL}/trader/topup`,
      params,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error topping up wallet:", error);
    throw error;
  }
};

const authService = {
  login,
  register,
  wallet,
  stock,
  portfolio,
  transactions,
  allTransactions,
  pendingUser,
  currentUsers,
  addNewUser,
  getPendingUserInfo,
  showTheUserInfo,
  authenticateTrader,
  updateTrader,
  updateTraderPassword,
  topup,
};

export default authService;
