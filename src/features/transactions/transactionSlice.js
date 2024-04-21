import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import transactionService from "./transactionService";

const initialState = {
  transaction: 0,
  amount: 0,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const buy = createAsyncThunk(
  "transaction/buy",
  async (transaction, thunkAPI) => {
    try {
      return await transactionService.buy(transaction);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const sell = createAsyncThunk(
  "transaction/sell",
  async (transaction, thunkAPI) => {
    try {
      return await transactionService.sell(transaction);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buy.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(buy.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.transaction = action.payload;
      })
      .addCase(buy.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.transaction = null;
      })
      .addCase(sell.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sell.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.transaction = action.payload;
      })
      .addCase(sell.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.transaction = null;
      });
  },
});

export const {} = transactionSlice.actions;
export default transactionSlice.reducer;
