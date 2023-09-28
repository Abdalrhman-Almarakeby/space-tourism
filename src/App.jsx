import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { styleObject, backgroundFunc } from "./utils/backgroundImg";
import { Route, Routes, useLocation } from "react-router-dom";
import "./CSS/main.css";

export default function App() {
  const base = "space-tourism";
  return (
    <div
      style={styleObject}
      className={`
      ${backgroundFunc(useLocation().pathname, base)} 
      min-h-screen flex flex-col relative bg-cover bg-center overflow-hidden
      `}
    >
      <Navbar base={base} />
      <Routes>
        <Route path={`/${base}/`} element={<Home base={base} />} />
        <Route path={`/${base}/destination`} element={<Destination />} />
        <Route path={`/${base}/crew`} element={<Crew />} />
        <Route path={`/${base}/technology`} element={<Technology />} />
      </Routes>
    </div>
  );
}
