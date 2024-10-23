import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; // Adjust path accordingly
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-full bg-[#0F1825] text-white">
      <Navbar />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
