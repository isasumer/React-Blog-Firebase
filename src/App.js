import "./App.css";
import Header from "./components/Header";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <AuthContextProvider>
          <Header />
         <Route exact path="/" component= {Home}/>
         <Route exact path="/details" component= {Details}/>
        
      </AuthContextProvider>
    </Router>
  );
}

export default App;
