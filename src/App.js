import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import UeberUns from "./pages/ueberuns";
import KrisengebietInfos from "./pages/krisengebietInfos";
import Footer from "./components/Footer/Footer";
import RegisterForm from "./pages/Home/FormularElements/RegisterForm";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        {/* Main section */}
        <Header />

        {/* Main section */}
        <Container className="flex-grow-1 d-flex align-items-top justify-content-center">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/UeberUns" element={<UeberUns />} />
            <Route path="/KrisengebietInfos" element={<KrisengebietInfos />} />
            <Route path="/RegisterForm" element={<RegisterForm />} />
          </Routes>
        </Container>

        {/* Footer section */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}
