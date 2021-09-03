import React from "react";
import { useDispatch } from "react-redux";
import { register } from "store/actions";
import { snackbarActions } from "store/snackbar";
let fields = [
  {
    type: "text",
    name: "fullName",
    label: "Full Name",
  },
  {
    type: "email",
    name: "email",
    label: "Email Address",
  },
  {
    type: "password",
    name: "password",
    label: "Password",
  },
  {
    type: "password",
    name: "confirmPassword",
    label: "Confirm Password",
  },
];
export default function Register() {
  const dispatch = useDispatch();
  const [params, setParams] = React.useState({ email: "", password: "" });
  const RegisterForm = () => {
    if (params.password !== params.confirmPassword)
      dispatch(
        snackbarActions.open({
          message: "Password and confirm password should be same",
          type: "error",
        })
      );
    else dispatch(register(params));
  };
  return (
    <div className="flex w-full white-bg rounded-xl p-8 mt-4">
      <div className="px-6 space-y-4 ">
        <form
          className="mb-3 pt-0"
          onSubmit={(event) => {
            event.preventDefault();
            RegisterForm();
          }}
        >
          <h1 className="text-3xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800 text-center blue-text">
            Register - Todo App
          </h1>
          {fields.map((field, i) => (
            <input
              name={field.name}
              type={field.type}
              placeholder={field.label}
              className="input"
              required
              onChange={(e) =>
                setParams({ ...params, [e.target.name]: e.target.value })
              }
            />
          ))}

          <button type="submit" className="button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
