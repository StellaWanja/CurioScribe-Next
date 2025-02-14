"use client";

import { motion } from "motion/react";
import { BookOpenText } from "lucide-react";

import Blob1 from "@/components/ui/Blobs/Blob1";
import Blob2 from "@/components/ui/Blobs/Blob2";
import Blob3 from "@/components/ui/Blobs/Blob3";
import Button from "@/components/ui/Button";
import HomeCard from "@/components/ui/HomeCard/HomeCard";
import Spiral from "@/components/ui/Patterns/Spiral";
import FloatingIcons from "@/components/ui/FloatingIcons";
import { subTitleVars, titleVars } from "@/utils/variants";

export default function Home() {
  return (
    <main className="bg-yellow dark:bg-black text-black dark:text-white">
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-4">
        <div className="absolute hidden sm:block -top-20 z-10 left-0">
          <Blob1 />
        </div>
        <motion.div
          variants={titleVars}
          initial="initial"
          animate="animate"
          className="relative z-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black">
            CurioScribe
          </h1>
          <div className="absolute -top-5 -right-5">
            <BookOpenText className="stroke-[2.5] w-8 h-8 md:w-12 sm:h-12" />
          </div>
        </motion.div>
        <motion.p
          variants={subTitleVars}
          initial="initial"
          animate="animate"
          className="mt-4 px-10 z-20 text-center text-wrap text-pink font-black font-mono sm:text-xl md:text-2xl"
        >
          Unleash Your Creativity with AI-Powered Content Generation.
        </motion.p>
        <Button className="solid-button mt-8 py-4 z-20">
          Sign up for free
        </Button>
        <div className="absolute bottom-0 right-0">
          <Blob2 />
        </div>
      </section>

      <section className="bg-white dark:bg-black relative min-h-screen w-full pt-20 pb-8 px-8">
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
          <Spiral />
        </div>
        <FloatingIcons />

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
