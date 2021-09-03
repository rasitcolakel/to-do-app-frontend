import { authActions } from "./auth";
import { snackbarActions } from "./snackbar";
import { todosActions } from "./todos";
import axios from "axios";
import store from "./index";

let API_URL = "http://localhost:3003/";
let auth = store.getState().auth;
let todos = store.getState().todos;

export const login = (params) => {
  return async (dispatch) => {
    dispatch(snackbarActions.open({ message: "Logging in...", type: "info" }));
    try {
      const res = await axios.post(API_URL + "login", params);
      console.log(res.data.token);
      await dispatch(
        snackbarActions.open({
          message: res.data.message,
          type: "success",
        })
      );
      await dispatch(
        authActions.login({
          token: res.data.token,
          isAuth: true,
        })
      );
    } catch (e) {
      dispatch(
        snackbarActions.open({
          message: e.response.data.message,
          type: "error",
        })
      );
    }
  };
};

export const register = (params) => {
  return async (dispatch) => {
    dispatch(snackbarActions.open({ message: "Registering...", type: "info" }));
    try {
      const res = await axios.post(API_URL + "register", params);
      dispatch(
        snackbarActions.open({
          message: res.data.message,
          type: "success",
        })
      );
    } catch (e) {
      dispatch(
        snackbarActions.open({
          message: e.response.data.message,
          type: "error",
        })
      );
    }
  };
};

export const getTodos = (params) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API_URL + "todos", {
        headers: {
          "x-auth-token": auth.token,
        },
      });
      dispatch(todosActions.setTodos({ data: res.data }));
    } catch (e) {
      dispatch(
        snackbarActions.open({
          message: e.response.data.message,
          type: "error",
        })
      );
    }
  };
};

export const updateTodos = (params) => {
  return async (dispatch) => {
    try {
      const { _id } = params;
      delete params._id;
      const res = await axios.put(API_URL + "todos/" + _id, params, {
        headers: {
          "x-auth-token": auth.token,
        },
      });
      await dispatch(todosActions.updateTodos({ data: res.data }));
    } catch (e) {
      dispatch(
        snackbarActions.open({
          message: e.response.data.message,
          type: "error",
        })
      );
    }
  };
};
export const deleteTodos = (params) => {
  return async (dispatch) => {
    try {
      const { _id } = params;
      const res = await axios.delete(API_URL + "todos/" + _id, {
        headers: {
          "x-auth-token": auth.token,
        },
      });
      await dispatch(todosActions.deleteTodo({ data: res.data }));
    } catch (e) {
      dispatch(
        snackbarActions.open({
          message: e.response.data.message,
          type: "error",
        })
      );
    }
  };
};
export const newTodo = (params) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(API_URL + "todos", params, {
        headers: {
          "x-auth-token": auth.token,
        },
      });
      await dispatch(todosActions.newTodo({ data: res.data }));
    } catch (e) {
      dispatch(
        snackbarActions.open({
          message: e.response.data.message,
          type: "error",
        })
      );
    }
  };
};
