import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Home from "./Home";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
