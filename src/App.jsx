import Navbar from "./components/Navbar";
import "./CSS/main.css";
import Home from "./pages/Home";

export default function App() {
  return (
    <div
      className={`h-screen bg-cover bg-center bg-background-home-mobile md:bg-background-home-tablet lg:bg-background-home-desktop `}
    >
      <Navbar />
      <Home />
    </div>
  );
}
