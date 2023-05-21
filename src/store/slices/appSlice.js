import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    myState: 'My State',
  },
  reducers: {
    setMyState: (state, action) => {
      state.myState = action.payload;
    },
  },
});

export const { setMyState } = appSlice.actions;

export default appSlice.reducer;
