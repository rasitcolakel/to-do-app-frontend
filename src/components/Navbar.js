import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { authActions } from "store/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export default function Navbar() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const dispatch = useDispatch();
  let history = useHistory();
  const logout = () => {
    dispatch(authActions.logout());
    history.push("/login");
  };
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <header className="navbar white-bg">
      <Link to="/">
        <h3 className="text-2xl blue-text">To Do App </h3>
      </Link>
      <div className="flex flex-row items-center">
        <div className="theme-button">
          {colorTheme === "light" ? (
            <svg
              onClick={() => setTheme("light")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setTheme("dark")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </div>
        {isAuth && (
          <RiLogoutCircleRLine
            className="text-red-600 text-4xl cursor-pointer hover:text-red-400 mx-2"
            onClick={logout}
          />
        )}
      </div>
    </header>
  );
}
