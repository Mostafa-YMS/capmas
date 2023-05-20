import { createReducer } from "@reduxjs/toolkit";
import {
  BIRTH_NUMBERS_LOADING,
  GET_BIRTH_NUMBERS,
  BIRTH_NUMBERS_ERROR,
} from "../actions/types";

const initialState = {
  error: "",
  loading: false,
  data: {},
};

const birthNumbersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(BIRTH_NUMBERS_LOADING, (state) => {
      state.loading = true;
    })
    .addCase(BIRTH_NUMBERS_ERROR, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    })
    .addCase(GET_BIRTH_NUMBERS, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });
});

export default birthNumbersReducer;
