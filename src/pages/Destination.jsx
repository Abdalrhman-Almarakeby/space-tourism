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

  return (
    <section className="container flex flex-col gap-5 px-6 pt-2 pb-10 md:px-20 xl:px-20 lg:px-0 md:pt-16 xl:flex-col xl:justify-between xl:pt-8 xl:gap-12">
      <h2 className="section-title">
        <span>01</span>Pick your destination
      </h2>
      <div className="xl:flex xl:flex-row xl:gap-44">
        <div className="flex flex-col flex-grow gap-12">
          <img
            src={getImage()}
            alt={`${destination.name} Image`}
            id="destination-img"
            loading="lazy"
            className="my-10 duration-300 lg:px-48 xl:p-0"
          />
        </div>
        <div className="flex flex-col justify-end xl:mt-24 xl:gap-8">
          <ul className="flex justify-center gap-7 md:gap-9">
            {/* Make a tab for each destination in the data (destinationArr)  */}
            {destinationsArr.map((destinationItem) => {
              return (
                <Tab
                  tabData={destinationItem.name}
                  objectsArr={destinationsArr}
                  setFunc={setDestination}
                  className={`${
                    destination.name === destinationItem.name ? "active" : ""
                  } tab`}
                  key={destinationItem.name}
                >
                  {destinationItem.name}
                </Tab>
              );
            })}
          </ul>
          <DestinationInfo {...destination} />
        </div>
      </div>
    </section>
  );
}
