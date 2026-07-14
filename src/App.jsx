import { Routes, Route } from "react-router-dom";
import Navbar from "/components/Navbar.jsx";
import Home from "/pages/Home.jsx";
import Payment from "/pages/Payment.jsx";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/payment"
          element={<Payment />}
        />
      </Routes>
    </>
  );
}
export default App;