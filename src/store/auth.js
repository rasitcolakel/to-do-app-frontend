import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  token: localStorage.getItem("todoToken"),
  isAuth: !!localStorage.getItem("todoToken"),
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isAuth = action.payload.isAuth;
      localStorage.setItem("todoToken", action.payload.token);
    },
    logout(state) {
      state = { ...initialState };
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
