import { BookOpenText, PenTool, LetterText, NotebookPen } from "lucide-react";

import Blob1 from "@/components/ui/Blobs/Blob1";
import Blob2 from "@/components/ui/Blobs/Blob2";
import Blob3 from "@/components/ui/Blobs/Blob3";
import Button from "@/components/ui/Button";
import HomeCard from "@/components/ui/HomeCard";

export default function Home() {
  return (
    <main className="bg-yellow dark:bg-black text-black dark:text-white">
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-4">
        <div className="absolute hidden sm:block -top-20 z-10 left-0">
          <Blob1 />
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
        <div className="absolute bottom-0 right-0">
          <Blob2 />
        </div>
      </section>

      <section className="bg-white dark:bg-black relative min-h-screen w-full pt-20 pb-8 px-8">
        {/* <div className="absolute hidden lg:block z-10 -top-[40%] -right-[25rem] overflow-hidden">
          <Blob2 />
        </div> */}
        <div className="w-full sm:w-1/2 mx-auto px-4 z-20">
          <h3 className="font-bold text-pink text-3xl pb-8">
            Welcome to CurioScribe: Unleash Your Creative Potential!
          </h3>
          <p className="pb-4 text-xl">
            At CurioScribe, we believe that creativity knows no bounds. Powered
            by cutting-edge AI technology, our platform empowers you to
            effortlessly generate high-quality, engaging stories and articles
            tailored to your unique ideas and themes.
          </p>
          <p className="pb-4 text-xl">
            Whether you&apos;re a content creator, blogger, storyteller, or just
            someone seeking inspiration, CurioScribe transforms your prompts
            into captivating narratives that capture your audience&apos;s
            attention.
          </p>
        </div>
        <div className="absolute hidden sm:block top-0  sm:-left-[34rem] md:-left-[30rem] overflow-hidden">
          <Blob3 />
        </div>
        <div className="w-full sm:w-1/2 mx-auto px-4 pt-8 z-20">
          <h3 className="font-bold text-pink text-3xl">Why CurioScribe?</h3>
          <HomeCard />
        </div>
      </section>

      <section className="relative bg-white dark:bg-black min-h-screen w-full">
        <div className="absolute top-0 lg:-top-1/3 2xl:-top-1/2 left-0 w-full">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="w-full h-full"
          >
            <path
              d="M0 328L15 326.3C30 324.7 60 321.3 90 313.5C120 305.7 150 293.3 180 323C210 352.7 240 424.3 270 439.7C300 455 330 414 360 361.3C390 308.7 420 244.3 450 273.3C480 302.3 510 424.7 540 455.8C570 487 600 427 630 408.3C660 389.7 690 412.3 720 425.8C750 439.3 780 443.7 810 405.3C840 367 870 286 885 245.5L900 205"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              stroke="#FF3399"
              strokeWidth="52"
            ></path>
          </svg>
        </div>
        <div>
          <div className="floating-home-icon top-8 sm:top-0 left-8 sm:left-20 rotate-[15deg] bg-[#F5DF4D] ">
            <PenTool className="stroke-[#990066] size-8 sm:size-12" />
          </div>
          <div className="floating-home-icon top-40 right-5 sm:right-20 -rotate-[15deg] bg-[#94D483]">
            <LetterText
              size={48}
              className="stroke-[#990066] size-8 sm:size-12"
            />
          </div>
          <div className="floating-home-icon top-12 sm:top-16 left-[55%] rotate-[15deg]  bg-[#00CCBE]">
            <NotebookPen
              size={48}
              className="stroke-[#990066] size-8 sm:size-12"
            />
          </div>
        </div>

        <div className="absolute bottom-[30%] md:bottom-[20%] xl:bottom-[10%] left-1/2 transform -translate-x-1/2 flex flex-col">
          <h2 className="text-2xl font-semibold">
            Ready to turn your ideas into compelling creations?
          </h2>
          <Button className="solid-button mt-8 py-4 z-20">
            Sign up for free
          </Button>
        </div>
      </section>
    </main>
  );
}
