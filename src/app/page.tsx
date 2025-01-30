import { BookOpenText } from "lucide-react";

export default function Home() {
  return (
    <section className="bg-yellow text-black dark:bg-black dark:text-white min-h-screen w-full flex flex-col justify-center items-center px-4">
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
