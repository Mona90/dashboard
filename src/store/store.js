import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import sidebarSlice from './sidebar/sidebarSlice'
import patientsSlice from './reception/patientsSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    sidebar: sidebarSlice,
    patients: patientsSlice,
  }
})
export default store