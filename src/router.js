import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

let Page;
switch (window.location.pathname) {
  case "/":
    Page = Home;
    break;
  case "/destination":
    Page = Destination;
    break;
  case "/crew":
    Page = Crew;
    break;
  case "/technology":
    Page = Technology;
    break;
}
export default Page;
