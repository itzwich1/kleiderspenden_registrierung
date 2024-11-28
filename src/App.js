import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./pages/home";
import UeberUns from "./pages/ueberuns";
import UnsereGeschichte from "./pages/unseregeschichte";

/*import Home from "./pages/Home";
import UeberUns from "./pages/UeberUns";
import UnsereGeschichte from "./pages/UnsereGeschichte";*/

export default function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/UeberUns" element={<UeberUns />} />
          <Route path="/UnsereGeschichte" element={<UnsereGeschichte />} />
        </Routes>
      </BrowserRouter>
    </div>
    //<h1>Hallo Test 1234</h1>
    //<Route path="/home" element={<Home />} />
    //<Route path="/UeberUns" element={<UeberUns />} />
    //<Route path="/UnsereGeschichte" element={<UnsereGeschichte />} />
  );
}
