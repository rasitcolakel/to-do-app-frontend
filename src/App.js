import Alert from "components/Alert";
import Register from "pages/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Index from "pages/Index";
function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <div className="h-screen w-full flex flex-col gray-bg">
      <Navbar />
      <div className="w-2/6 mx-auto flex items-center">
        <Router>
          <Switch>
            <Route path="/login">
              {isAuth ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/register">
              {isAuth ? <Redirect to="/" /> : <Register />}
            </Route>
            <Route path="/">
              {!isAuth ? <Redirect to="/login" /> : <Index />}
            </Route>
          </Switch>
        </Router>
      </div>
      <Alert />
    </div>
  );
}

export default App;
