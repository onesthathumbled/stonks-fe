import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://mysite-dfcd.onrender.com"
    : "http://localhost:4000";

const buy = async (transaction) => {
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
    stock: {
      symbol: transaction.symbol,
      company_name: transaction.company_name,
      quantity: transaction.quantity,
    },
  };

  try {
    const response = await axios.post(`${API_URL}/trader/buy`, params, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching stock quote:", error);
    return null;
  }
};

const sell = async (transaction) => {
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
    stock: {
      symbol: transaction.symbol,
      company_name: transaction.company_name,
      quantity: transaction.quantity,
    },
  };

  try {
    const response = await axios.post(`${API_URL}/trader/sell`, params, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching stock quote:", error);
    return null;
  }
};

const searchService = {
  buy,
  sell,
};

export default searchService;
