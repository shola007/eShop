import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/checkout" element={[<Header />, <Checkout />]} />

          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
