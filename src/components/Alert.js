import React from "react";
import { useSelector } from "react-redux";
import ErrorAlert from "./ErrorAlert";
import InfoAlert from "./InfoAlert";
import SuccessAlert from "./SuccessAlert";
export default function Alert() {
  const toggleSnackbar = useSelector((state) => state.snackbar.toggleSnackbar);

  const type = useSelector((state) => state.snackbar.type);

  return (
    <div class="fixed bottom-0 w-full">
      <div className="flex flex-1 justify-center items-center mb-4">
        <div className="w-1/3">
          {toggleSnackbar ? (
            type === "error" ? (
              <ErrorAlert />
            ) : type === "info" ? (
              <InfoAlert />
            ) : (
              <SuccessAlert />
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
