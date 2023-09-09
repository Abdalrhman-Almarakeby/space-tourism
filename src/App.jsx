import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import "./CSS/main.css";

export default function App() {
  let page;
  switch (window.location.pathname) {
    case "/":
      page = <Home />;
      break;
    case "/destination":
      page = <Destination />;
      break;
    case "/crew":
      page = <Crew />;
      break;
    case "/technology":
      page = <Technology />;
      break;
  }
  return (
    <div
      className={`h-[300vh] relative bg-cover bg-center bg-background-home-mobile md:bg-background-home-tablet lg:bg-background-home-desktop overflow-hidden `}
    >
      <Navbar />
      {page}
    </div>
  );
}
