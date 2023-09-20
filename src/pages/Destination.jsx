import { useState } from "react";
import data from "/data.json";

import moonImg from "../assets/destination/image-moon.webp";
import marsImg from "../assets/destination/image-mars.webp";
import europaImg from "../assets/destination/image-europa.webp";
import titanImg from "../assets/destination/image-titan.webp";

import Tab from "../components/Tab";
import DestinationInfo from "../components/DestinationInfo";

export default function Destination() {
  const destinationsArr = data.destinations;
  const [destination, setDestination] = useState(destinationsArr[0]);

  function getImage() {
    switch (destination.name) {
      case "Moon":
        return moonImg;
      case "Mars":
        return marsImg;
      case "Europa":
        return europaImg;
      case "Titan":
        return titanImg;
    }
  }

  function handleTabClick(e) {
    setDestination(
      destinationsArr.filter(
        (destination) => destination.name === e.target.getAttribute("data-tab")
      )[0]
    );
  }

  return (
    <section className="container flex flex-col gap-5 px-6 pt-2 pb-10 md:px-20 md:pt-16 lg:px-48">
      <h2 className="section-title">
        <span>01</span>Pick your destination
      </h2>
      <img
        src={getImage()}
        alt={`${destination.name} Image`}
        id="destination-img"
        loading="lazy"
        className="my-10 duration-300"
      />
      <ul className="flex justify-center gap-7 md:gap-9">
        {/* Make a tab for each destination in the data (destinationArr)  */}
        {destinationsArr.map((destinationItem) => {
          return (
            <Tab
              handleTabClick={handleTabClick}
              destination={destination}
              key={destinationItem.name}
            >
              {destinationItem.name}
            </Tab>
          );
        })}
      </ul>

      <DestinationInfo {...destination} />
    </section>
  );
}
