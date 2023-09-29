import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { styleObject, backgroundFunc } from "./utils/backgroundImg";
import { Route, Routes, useLocation } from "react-router-dom";
import "./CSS/main.css";

export default function App() {
  return (
    <main
      style={styleObject}
      className={`
      ${backgroundFunc(useLocation().pathname)} 
      min-h-screen flex flex-col relative bg-cover bg-center overflow-hidden
      `}
    >
      <Navbar />
      <Routes>
        <Route path={`/space-tourism/`} element={<Home />} />
        <Route path={`/space-tourism/destination`} element={<Destination />} />
        <Route path={`/space-tourism/crew`} element={<Crew />} />
        <Route path={`/space-tourism/technology`} element={<Technology />} />
      </Routes>
    </main>
  );
}
