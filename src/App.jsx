import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { styleObject, backgroundFunc } from "./utils/backgroundImg";
import { Route, Routes, useLocation } from "react-router-dom";
import "./CSS/main.css";

export default function App() {
  console.log(useLocation().pathname);
  return (
    <div
      style={styleObject}
      className={`
      ${backgroundFunc(useLocation().pathname)} 
      min-h-screen flex flex-col relative bg-cover bg-center overflow-hidden
      `}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}
