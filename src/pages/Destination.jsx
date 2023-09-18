import { useState } from "react";
import data from "/data.json";
import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";
import Tabs from "../components/Tabs";
import DestinationInfo from "../components/DestinationInfo";

export default function Destination() {
  const destinationsArr = data.destinations;
  const [destination, setDestination] = useState(destinationsArr[0]);

  function getImage() {
    switch (destination.name) {
      case "Moon":
        return moon;
      case "Mars":
        return mars;
      case "Europa":
        return europa;
      case "Titan":
        return titan;
    }
  }

  function handleTabClick(e) {
    setDestination(
      destinationsArr.filter(
        (destination) => destination.name.toLowerCase() === e.target.innerText
      )[0]
    );
  }

  return (
    <section className="text-white">
      <h2>
        <span>01</span>Pick your destination
      </h2>
      <img src={getImage()} alt="Moon Image" />
      <Tabs handleTabClick={handleTabClick} destination={destination.name} />

      <DestinationInfo {...destination} />
    </section>
  );
}
