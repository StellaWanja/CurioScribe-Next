import React from "react";
import Link from "next/link";
import { NotebookText } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full h-[30vh] bg-darkblue dark:bg-pink text-white pt-8 ">
      <div className="flex justify-around">
        <div>
          <NotebookText className="stroke-[2.5] w-12 h-12 " />
        </div>
        <nav>
          <h3 className="font-semibold pb-2 text-lg">Links</h3>
          <ul className="flex flex-col gap-1">
            <li className="hover:underline">
              <Link href="/">RSS Feed</Link>
            </li>
            <li className="hover:underline">
              <Link href="/">Terms of Use</Link>
            </li>
            <li className="hover:underline">
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className="hover:underline">
              <Link href="/">Twitter</Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="pt-8 text-center">CurioScribe &copy;{year}</p>
    </footer>
  );
}

export default Footer;
