import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="container flex flex-col items-center gap-20 px-6 py-8 lg:flex-grow md:py-24 md:gap-36 lg:gap-14 lg:flex-row justify-evenly">
      <div className="flex flex-col items-center flex-grow gap-4 text-center xl:items-start xl:text-left md:gap-6 text-light">
        <h3 className="uppercase tracking-[3px] md:text-xl xl:text-3xl ">
          So, You Want To Travel To
        </h3>
        <h1 className="uppercase font-Bellefair text-7xl md:text-[150px] md:leading-[150px] leading-[100px]">
          Space
        </h1>
        <p className="text-[15px] max-w-[55ch] leading-6 md:text-base md:leading-7 xl:text-lg xl:leading-8 xl:max-w-[75ch] tracking-widest">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link
        to={`/space-tourism/destination`}
        className="text-main bg-white w-40 h-40 md:w-60 md:h-60 xl:w-72 xl:h-72 md:text-[32px] mx-auto grid place-content-center rounded-full text-xl font-Bellefair tracking-widest lg:mx-10 xl:mx-20 relative uppercase before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:bg-white before:opacity-20 before:rounded-full before:transition-all hover:before:w-[150%] hover:before:h-[150%] before:-translate-x-1/2 before:-translate-y-1/2 "
      >
        Explore
      </Link>
    </section>
  );
}
