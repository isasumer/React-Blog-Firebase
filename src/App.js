import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </AuthProvider>
    </Router>
  );
}

export default App;
