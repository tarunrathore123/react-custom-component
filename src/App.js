import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
    </Routes>
  );
}

export default App;
