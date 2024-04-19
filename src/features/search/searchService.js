import axios from "axios";

const API_URL = "http://localhost:4000";

const quote = async (symbol) => {
  const token = JSON.parse(localStorage.getItem("authToken"));

  if (!token) {
    console.error("Token not found in localStorage");
    return null;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      params: {
        symbol: symbol,
      },
    },
  };

  try {
    const response = await axios.get(`${API_URL}/stocks/quote`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching stock quote:", error);
    return null;
  }
};

const searchService = {
  quote,
};

export default searchService;
