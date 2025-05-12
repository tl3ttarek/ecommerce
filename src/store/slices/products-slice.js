import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = "https://fakestoreapi.com/products";
// const apiUrl = "https://dummyjson.com/products";

export const fetchAllProducts = createAsyncThunk(
  "productsSlice/fetchAllProducts",
  async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
  }
);
export const fetchMensProducts = createAsyncThunk(
  "productsSlice/fetchMensProducts",
  async (category) => {
    const res = await fetch(`${apiUrl}/category/${category}`);
    const data = await res.json();
    return data;
  }
);
export const fetchWomensProducts = createAsyncThunk(
  "productsSlice/fetchWomensProducts",
  async (category) => {
    const res = await fetch(`${apiUrl}/category/${category}`);
    const data = await res.json();
    return data;
  }
);
export const fetchJeweleryProducts = createAsyncThunk(
  "productsSlice/fetchJeweleryProducts",
  async (category) => {
    const res = await fetch(`${apiUrl}/category/${category}`);
    const data = await res.json();
    return data;
  }
);
export const fetchElectroProducts = createAsyncThunk(
  "productsSlice/fetchElectroProducts",
  async (category) => {
    const res = await fetch(`${apiUrl}/category/${category}`);
    const data = await res.json();
    return data;
  }
);

const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchMensProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchWomensProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchJeweleryProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchElectroProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default productsSlice.reducer;
