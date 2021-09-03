import React from "react";
import { useDispatch } from "react-redux";
import { login } from "store/actions";
export default function Login() {
  const dispatch = useDispatch();
  const [params, setParams] = React.useState({ email: "", password: "" });
  return (
    <div className="flex w-full white-bg rounded-xl p-8 mt-4">
      <div className="px-6 space-y-4 ">
        <form
          className="mb-3 pt-0"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(login(params));
          }}
        >
          <h1 className="text-3xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800 text-center blue-text">
            Log In - Todo App
          </h1>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email Address"
            required
            onChange={(e) =>
              setParams({ ...params, [e.target.name]: e.target.value })
            }
          />
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
            onChange={(e) =>
              setParams({ ...params, [e.target.name]: e.target.value })
            }
          />
          <button type="submit" className="button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
