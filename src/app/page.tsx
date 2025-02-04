import { BookOpenText } from "lucide-react";

export default function Home() {
  return (
    <section className="relative bg-yellow text-black dark:bg-black dark:text-white min-h-screen w-full flex flex-col justify-center items-center px-4">
      <div className="absolute w-full h-full -top-20 z-10  left-0 ">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <g transform="translate(-28.334032895975554 -27.80134924246883)">
            <path
              d="M123 -208.3C157.6 -193 182.7 -156.5 223.1 -118.2C263.6 -80 319.3 -40 320.7 0.8C322.2 41.7 269.3 83.3 234.1 130.5C198.8 177.7 181.2 230.5 145.1 255.3C109 280.1 54.5 277.1 10.5 258.9C-33.5 240.7 -67 207.4 -95.6 178.2C-124.2 149 -147.8 124 -168.1 95C-188.3 66 -205.2 33 -227.5 -12.9C-249.9 -58.8 -277.8 -117.7 -256.4 -144.7C-235.1 -171.8 -164.4 -167.1 -113.5 -173C-62.5 -178.9 -31.3 -195.5 6.5 -206.6C44.2 -217.8 88.3 -223.7 123 -208.3"
              fill="#262642"
            ></path>
          </g>
        </svg>
      </div>
      <div className="relative">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black ">
          CurioScribe
        </h1>
        <div className="absolute -top-5 -right-5">
          <BookOpenText className="stroke-[2.5] w-8 h-8 md:w-12 sm:h-12" />
        </div>
      </div>
      <p className="mt-4 px-10 text-center text-wrap text-pink font-black font-mono sm:text-xl md:text-2xl">
        Unleash Your Creativity with AI-Powered Content Generation.
      </p>
    </section>
  );
}
