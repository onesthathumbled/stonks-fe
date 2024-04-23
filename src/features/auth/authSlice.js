import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  wallet: 0,
  stock: [],
  portfolio: [],
  transactions: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (thunkAPI) => {
  try {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
  } catch (error) {
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const wallet = createAsyncThunk("auth/wallet", async (thunkAPI) => {
  try {
    return await authService.wallet();
  } catch (error) {
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const stock = createAsyncThunk(
  "auth/stock",
  async (symbol, thunkAPI) => {
    try {
      return await authService.stock(symbol);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const portfolio = createAsyncThunk(
  "auth/portfolio",
  async (thunkAPI) => {
    try {
      return await authService.portfolio();
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const transactions = createAsyncThunk(
  "auth/transactions",
  async (thunkAPI) => {
    try {
      return await authService.transactions();
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(wallet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(wallet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wallet = action.payload;
      })
      .addCase(wallet.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.wallet = null;
      })
      .addCase(stock.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(stock.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.stock = action.payload;
      })
      .addCase(stock.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.stock = null;
      })
      .addCase(portfolio.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(portfolio.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.portfolio = action.payload;
      })
      .addCase(portfolio.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.portfolio = null;
      })
      .addCase(transactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(transactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.transactions = action.payload;
      })
      .addCase(transactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.transactions = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
