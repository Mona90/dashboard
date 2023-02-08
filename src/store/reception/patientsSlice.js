import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

let initialState = {
  isLoading: false,
  data: [],
  pages: 0,
  itemsCount: 0,
  errors: []
}

export const getPatients = createAsyncThunk(
  "patients/getPatients",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        "/api/reception/patients",
        {
          headers: {
            "Authorization": `Bearer ${thunkApi.getState().auth.userToken}`
          }
        }
      );
      return thunkApi.fulfillWithValue(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPatients.pending, (state) => {
      state.isLoading = true;
      state.errors = [];
    })
    builder.addCase(getPatients.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.errors = [];
      state.data = payload.data;
      state.pages = Math.ceil(payload.meta.total / payload.meta.per_page);
      state.itemsCount = payload.meta.total;
    })
    builder.addCase(getPatients.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    })
  }
});

export default patientsSlice.reducer