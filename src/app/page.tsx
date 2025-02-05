import { BookOpenText } from "lucide-react";

import TopBlob from "@/components/Blobs/Blob1";
import BottomBlob from "@/components/Blobs/Blob2";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main>
      <section className="relative bg-yellow text-black dark:bg-black dark:text-white min-h-screen w-full flex flex-col justify-center items-center px-4">
        <div className="absolute -top-20 z-10 left-0">
          <TopBlob />
        </div>
        <div className="relative z-20">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black">
            CurioScribe
          </h1>
          <div className="absolute -top-5 -right-5">
            <BookOpenText className="stroke-[2.5] w-8 h-8 md:w-12 sm:h-12" />
          </div>
        </div>
        <p className="mt-4 px-10 z-20 text-center text-wrap text-pink font-black font-mono sm:text-xl md:text-2xl">
          Unleash Your Creativity with AI-Powered Content Generation.
        </p>
        <Button className="solid-button mt-8 py-4 z-20">
          Sign up for free
        </Button>

        <div className="absolute z-10 -bottom-28 -right-[30rem] overflow-hidden">
          <BottomBlob />
        </div>
      </section>

      <section className="min-h-screen w-full bg-yellow dark:bg-black text-black dark:text-white">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <g transform="translate(427.94301878714225 256.48574759618356)">
            <path
              d="M181.7 -195.2C236.5 -170.5 282.7 -114.2 278.1 -60.8C273.4 -7.4 217.9 43.2 179.6 98.3C141.3 153.3 120.3 212.9 71.8 256C23.4 299.1 -52.4 325.8 -108.8 303.3C-165.2 280.9 -202.1 209.5 -219.8 143.8C-237.5 78.2 -235.9 18.4 -231.1 -46.3C-226.3 -111.1 -218.3 -180.8 -179.2 -208.2C-140.1 -235.7 -70.1 -220.8 -3.3 -216.9C63.4 -212.9 126.8 -219.8 181.7 -195.2"
              fill="#262642"
            ></path>
          </g>
        </svg>
      </section>
    </main>
  );
}
