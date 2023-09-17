import homeMobile from "../assets/home/background-home-mobile.jpg";
import homeTablet from "../assets/home/background-home-tablet.jpg";
import homeDesktop from "../assets/home/background-home-desktop.jpg";
import destinationMobile from "../assets/destination/background-destination-mobile.jpg";
import destinationTablet from "../assets/destination/background-destination-tablet.jpg";
import destinationDesktop from "../assets/destination/background-destination-desktop.jpg";
import crewMobile from "../assets/crew/background-crew-mobile.jpg";
import crewTablet from "../assets/crew/background-crew-tablet.jpg";
import crewDesktop from "../assets/crew/background-crew-desktop.jpg";
import technologyMobile from "../assets/technology/background-technology-mobile.jpg";
import technologyTablet from "../assets/technology/background-technology-tablet.jpg";
import technologyDesktop from "../assets/technology/background-technology-desktop.jpg";

export const styleObject = {
  "--homeMobile": `url(${homeMobile})`,
  "--homeTablet": `url(${homeTablet})`,
  "--homeDesktop": `url(${homeDesktop})`,
  "--destinationMobile": `url(${destinationMobile})`,
  "--destinationTablet": `url(${destinationTablet})`,
  "--destinationDesktop": `url(${destinationDesktop})`,
  "--crewMobile": `url(${crewMobile})`,
  "--crewTablet": `url(${crewTablet})`,
  "--crewDesktop": `url(${crewDesktop})`,
  "--technologyMobile": `url(${technologyMobile})`,
  "--technologyTablet": `url(${technologyTablet})`,
  "--technologyDesktop": `url(${technologyDesktop})`,
};

export function backgroundFunc(pathname) {
  let courantPage;
  switch (pathname) {
    case "/":
      courantPage = "home";
      break;
    case "/destination":
      courantPage = "destination";
      break;
    case "/crew":
      courantPage = "crew";
      break;
    case "/technology":
      courantPage = "technology";
      break;
  }
  return `bg-[image:var(--${courantPage}Mobile)] md:bg-[image:var(--${courantPage}Tablet)] xl:bg-[image:var(--${courantPage}Desktop)]`;
}
