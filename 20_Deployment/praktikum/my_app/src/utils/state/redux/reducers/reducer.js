import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

function getItems() {
  const getItem = localStorage.getItem("products");

  if (getItem) {
    const parseProducts = JSON.parse(getItem);
    return parseProducts;
  }

  return [];
}

function getAuth() {
  const status = localStorage.getItem("isLoggedIn");

  if (status) {
    return status;
  }

  return false;
}

const initialState = {
  isLoggedIn: getAuth(),
  token: "",
  products: getItems(),
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload));
    },
    editProducts: (state, action) => {
      const products = getItems();
      const updatedProducts = products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      state.products = updatedProducts;
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    },
    deleteProducts: (state, action) => {
      const updatedProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = updatedProducts;
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    },
    handleAuth: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
      localStorage.setItem("isLoggedIn", action.payload.isLoggedIn);
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setProducts, handleAuth, editProducts, deleteProducts } =
  sliceState.actions;
export default reducer;
