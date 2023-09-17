import Navbar from "./components/Navbar";
import Page from "./JS/router";
import "./CSS/main.css";
import { styleObject, backgroundFunc } from "./JS/backgroundImg";

export default function App() {
  return (
    <div
      style={styleObject}
      className={`
      ${backgroundFunc(window.location.pathname)} 
      min-h-screen flex flex-col relative bg-cover bg-center overflow-hidden
      `}
    >
      <Navbar />
      <Page />
    </div>
  );
}
