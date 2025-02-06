import { BookOpenText } from "lucide-react";

import Blob1 from "@/components/Blobs/Blob1";
import Blob2 from "@/components/Blobs/Blob2";
import Blob3 from "@/components/Blobs/Blob3";
import Button from "@/components/ui/Button";

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

        <div className="absolute hidden sm:block z-10 -bottom-28 -right-[30rem] overflow-hidden">
          <Blob2 />
        </div>
      </section>

      <section className="relative min-h-screen w-full px-8">
        <div className="w-full sm:w-1/2 mx-auto px-4 z-20">
          <h3 className="font-bold text-pink text-3xl pb-8 md:text-center">
            Welcome to CurioScribe: Unleash Your Creative Potential
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
        <div className="absolute hidden sm:block top-0  sm:-left-[34rem] md:-left-[30rem]">
          <Blob3 />
        </div>
      </section>
    </main>
  );
}
