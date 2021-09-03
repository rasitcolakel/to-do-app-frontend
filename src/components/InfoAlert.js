import React from "react";
import { snackbarActions } from "store/snackbar";
import { useDispatch, useSelector } from "react-redux";
export default function InfoAlert() {
  const dispatch = useDispatch();
  const snackbarMessage = useSelector(
    (state) => state.snackbar.snackbarMessage
  );
  return (
    <div
      className={`flex-1 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative my-2`}
      role="alert"
    >
      <span class={`block sm:inline text-blue-900`}>{snackbarMessage}</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          class={`fill-current h-6 w-6 text-bg-blue-500`}
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={() => dispatch(snackbarActions.close())}
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
}
