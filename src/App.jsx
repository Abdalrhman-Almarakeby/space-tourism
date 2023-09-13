import Navbar from "./components/Navbar";
import Page from "./router";
import "./CSS/main.css";

export default function App() {
  return (
    <div
      className={`min-h-screen flex flex-col relative bg-slate-800 bg-cover bg-center bg-background-home-mobile md:bg-background-home-tablet xl:bg-background-home-desktop overflow-hidden`}
    >
      <Navbar />
      <Page />
    </div>
  );
}
