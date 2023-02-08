import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import Cookies from "js-cookie"

const initialState = {
  loading: false,
  userToken: Cookies.get("userToken") ?? null,
  error: null,
  success: false,
}

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `/api/login`,
        { email, password },
        config
      )
      Cookies.set("userToken", data.entity.access_token);

      return fulfillWithValue(data.entity.access_token);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      Cookies.remove('userToken') 
      state.loading = false
      state.userToken = null
      state.error = null
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userToken = payload;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // register user reducer...
  },
});

export const { logout } = authSlice.actions
export default authSlice.reducer