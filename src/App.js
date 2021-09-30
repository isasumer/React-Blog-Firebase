import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import { BlogProvider } from "./context/BlogContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import New from "./components/New";

function App() {
  return (
    <Router>
      <AuthProvider>
        <BlogProvider>
          <Header />
          <Route  path="/details" component={Details} />
          <Route  path="/login" component={Login} />
          <Route  path="/register" component={Register} />
          <Route  path="/profile" component={Profile} />
          <Route  path="/new" component={New} />
          <Route exact path="/" component={Home} />
        </BlogProvider>{" "}
      </AuthProvider>
    </Router>
  );
}

export default App;
