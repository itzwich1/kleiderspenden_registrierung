import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";

/*import Home from "./pages/Home";
import UeberUns from "./pages/UeberUns";
import UnsereGeschichte from "./pages/UnsereGeschichte";*/

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
    //<h1>Hallo Test 1234</h1>
    //<Route path="/home" element={<Home />} />
    //<Route path="/UeberUns" element={<UeberUns />} />
    //<Route path="/UnsereGeschichte" element={<UnsereGeschichte />} />
  );
}
