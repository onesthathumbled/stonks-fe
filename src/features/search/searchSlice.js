import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchService from "./searchService";

const initialState = {
  search: "AAPL",
  stocks: [],
  quote: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const quote = createAsyncThunk(
  "search/quote",
  async (symbol, thunkAPI) => {
    try {
      return await searchService.quote(symbol);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(quote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(quote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.quote = action.payload;
      })
      .addCase(quote.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.quote = null;
      });
  },
});

export const { setSearch } = searchSlice.actions;

export const selectSearch = (state) => state.search.search;

export default searchSlice.reducer;
