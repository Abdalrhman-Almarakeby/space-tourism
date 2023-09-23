/* eslint-disable react/prop-types */
export default function DestinationInfo(props) {
  return (
    <div className="flex flex-col gap-8 xl:gap-8 ">
      <h3 className="pt-6 pb-4 text-6xl text-center uppercase font-Bellefair md:text-8xl xl:text-[7rem]">
        {props.name}
      </h3>
      <p className="text-light self-center text-[15px] leading-6 font-Barlow text-center md:text-lg md:mb-7 max-w-[50ch] xl:text-left xl:text-xl">
        {props.description}
      </p>

      <hr className="bg-[#383B4B] border-none h-[1px] " />

      <div className="flex flex-col justify-center gap-8 md:flex-row md:py-3 md:gap-12">
        <div className="mb-4 space-y-3 text-center">
          <span className="text-sm uppercase text-light tracking-[2.5px]">
            Avg. distance
          </span>
          <p className="text-4xl">{props.distance}</p>
        </div>

        <div className="space-y-3 text-center">
          <span className="text-sm uppercase text-light tracking-[2.5px]">
            Est. travel time
          </span>
          <p className="text-4xl">{props.travel}</p>
        </div>
      </div>
    </div>
  );
}
