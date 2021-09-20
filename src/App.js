import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </AuthContextProvider>
  );
}

export default App;