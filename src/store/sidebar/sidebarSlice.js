import { createSlice } from '@reduxjs/toolkit';


const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { isActive: false },
  reducers: {
    toggleSidebar: (state) => {
      state.isActive = !state.isActive
    }
  }
});

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;