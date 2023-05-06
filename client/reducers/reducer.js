import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  loggedIn: false
};

export const reducer = createSlice({
  name: 'reducer',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    loggedIn: (state) => {
      state.loggedIn = !state.loggedIn;
    }
  },
});

export const { loggedIn } = reducer.actions;

export default reducer.reducer;