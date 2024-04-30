import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  pendingUsers: [],
  pendingUserInfo: [],
  wallet: 0,
  stock: [],
  portfolio: [],
  transactions: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  UserInfoShowStatus: false,
  authenticateTrader: [],
  updateUser: [],
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

export const allTransactions = createAsyncThunk(
  "auth/allTransactions",
  async (thunkAPI) => {
    try {
      return await authService.allTransactions();
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const pendingUser = createAsyncThunk(
  "auth/pendingUser",
  async (thunkAPI) => {
    try {
      return await authService.pendingUser();
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const currentUsers = createAsyncThunk(
  "auth/currentUsers",
  async (thunkAPI) => {
    try {
      return await authService.currentUsers();
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addNewUser = createAsyncThunk(
  "auth/addNewUser",
  async (user, thunkAPI) => {
    try {
      return await authService.addNewUser(user);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPendingUserInfo = createAsyncThunk(
  "auth/getPendingUserInfo",
  async (user_id, thunkAPI) => {
    try {
      return await authService.getPendingUserInfo(user_id);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authenticateTrader = createAsyncThunk(
  "auth/authenticateTrader",
  async (arg, thunkAPI) => {
    try {
      return await authService.authenticateTrader(arg);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateTrader = createAsyncThunk(
  "auth/updateTrader",
  async ({ userId, userData }, thunkAPI) => {
    try {
      const response = await authService.updateTrader(userId, userData);
      return response.data;
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateTraderPassword = createAsyncThunk(
  "auth/updateTraderPassword",
  async ( userInfo, thunkAPI) => {
    try {
        const response = await authService.updateTraderPassword(userInfo.id, userInfo.password);
        return response.data;
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
    setUserInfoShowStatus: (state, action) => {
      state.UserInfoShowStatus = action.payload;
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
      })
      .addCase(allTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.transactions = action.payload;
      })
      .addCase(allTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.transactions = null;
      })
      .addCase(pendingUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(pendingUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pendingUsers = action.payload;
      })
      .addCase(pendingUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.pendingUsers = null;
      })
      .addCase(currentUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.transactions = action.payload;
      })
      .addCase(currentUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.transactions = null;
      })
      .addCase(addNewUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.transactions = action.payload;
      })
      .addCase(addNewUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.transactions = null;
      })
      .addCase(getPendingUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPendingUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pendingUserInfo = action.payload;
        // state.pendingUserInfo[action.payload.id] = action.payload;
      })
      .addCase(getPendingUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.pendingUserInfo = null;
      })
      .addCase(authenticateTrader.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authenticateTrader.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.authenticateTrader = action.payload;
        // state.pendingUserInfo[action.payload.id] = action.payload;
      })
      .addCase(authenticateTrader.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.authenticateTrader = null;
      })
      .addCase(updateTrader.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTrader.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.authenticateTrader = action.payload;
        // state.pendingUserInfo[action.payload.id] = action.payload;
      })
      .addCase(updateTrader.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.authenticateTrader = null;
      })
      .addCase(updateTraderPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTraderPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.authenticateTrader = action.payload;
        // state.pendingUserInfo[action.payload.id] = action.payload;
      })
      .addCase(updateTraderPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.authenticateTrader = null;
      });
  },
});

export const { reset } = authSlice.actions;
export const { setUserInfoShowStatus } = authSlice.actions;
export default authSlice.reducer;
