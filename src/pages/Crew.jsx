import { useState } from "react";
import data from "/data.json";
import hurleyiImg from "../assets/crew/image-douglas-hurley.webp";
import shuttleworthImg from "../assets/crew/image-mark-shuttleworth.webp";
import gloverImg from "../assets/crew/image-victor-glover.webp";
import ansariImg from "../assets/crew/image-mark-shuttleworth.webp";
import Tab from "../components/Tab";
import CrewMemberInfo from "../components/CrewMemberInfo";

export default function Crew() {
  const crewArr = data.crew;
  const [crewMember, setCrewMember] = useState(crewArr[0]);

  function getImage() {
    switch (crewMember.name) {
      case "Douglas Hurley":
        return hurleyiImg;
      case "Mark Shuttleworth":
        return shuttleworthImg;
      case "Victor Glover":
        return gloverImg;
      case "Anousheh Ansari":
        return ansariImg;
    }
  }

  return (
    <section className="container flex flex-col gap-8 px-6 pt-2 pb-10 md:px-20 md:pt-16 lg:px-0 xl:px-20 xl:flex-col xl:justify-between xl:pt-8 xl:gap-12">
      <h2 className="section-title">
        <span>02</span> Meet your crew
      </h2>
      <div className="flex flex-col">
        <img
          className="px-12 sm:px-14"
          src={getImage()}
          alt={`${crewMember.name} Image`}
          loading="lazy"
        />
        <div className="border-t-[#383B4B] border-t-2">
          <ul className="flex flex-row justify-center gap-4 my-8 ">
            {crewArr.map((crewMemberObj) => {
              return (
                <Tab
                  tabData={crewMemberObj.name}
                  objectsArr={crewArr}
                  setFunc={setCrewMember}
                  className={`bullet ${
                    crewMember.name === crewMemberObj.name ? "active" : ""
                  }`}
                  key={crewMemberObj.name}
                ></Tab>
              );
            })}
          </ul>
          <CrewMemberInfo {...crewMember} />
        </div>
      </div>
    </section>
  );
}
