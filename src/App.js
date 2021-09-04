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
      <Router>
        <Navbar />
        <div className="w-full px-2 md:w-2/4 lg:w-2/6 mx-auto flex items-center">
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
        </div>
        <Alert />
      </Router>
    </div>
  );
}

export default App;
