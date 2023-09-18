/* eslint-disable react/prop-types */
export default function DestinationInfo(props) {
  return (
    <>
      <h3 className="pt-6 pb-4 text-6xl text-center uppercase font-Bellefair">
        {props.name}
      </h3>
      <p className="text-light text-[15px] leading-6 font-Barlow text-center">
        {props.description}
      </p>

      <hr className="bg-[#383B4B] border-none h-[1px] " />

      <div className="mb-4 space-y-3 text-center">
        <span className="text-sm uppercase text-light tracking-[2.5px]">
          Avg. distance
        </span>
        <p className="text-3xl ">{props.distance}</p>
      </div>

      <div className="space-y-3 text-center">
        <span className="text-sm uppercase text-light tracking-[2.5px]">
          Est. travel time
        </span>
        <p className="text-3xl ">{props.travel}</p>
      </div>
    </>
  );
}
