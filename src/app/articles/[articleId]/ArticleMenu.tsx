"use client";

import React, { useEffect, useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  Placement,
} from "@floating-ui/react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

import Dialog from "@/components/ui/Dialog";
import DeleteArticle from "./DeleteArticle";

function ArticleMenu({
  setIsEditing,
  isEditing,
}: {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
}) {
  const { articleId } = useParams();

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [placement, setPlacement] = useState<Placement>("bottom-end");

  useEffect(() => {
    const updatePlacement = () => {
      setPlacement(window.innerWidth < 640 ? "bottom-start" : "bottom-end");
    };
    window.addEventListener("resize", updatePlacement);
    updatePlacement();
    return () => window.removeEventListener("resize", updatePlacement);
  }, []);

  const { x, y, refs, strategy } = useFloating({
    placement,
    middleware: [offset(8), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  return (
    <div className="relative">
      <button
        ref={refs.setReference}
        onClick={() => setMenuIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        className="flex items-center justify-center text-button bg-pink hover:bg-dashboardblue text-white dark:hover:bg-white dark:hover:text-dashboardblue w-[3rem] h-[3rem] rounded-xl shadow-md rotate-[0.3rad]"
      >
        <Menu className="stroke-[2.5]" />
      </button>
      {menuIsOpen && (
        <div
          ref={refs.setFloating}
          style={{ position: strategy, top: y ?? 0, left: x ?? 0 }}
          className="bg-darkblue dark:bg-dashboardblue shadow-lg rounded-md p-2 w-48 z-30"
        >
          <ul className="space-y-2">
            {/* toggle between edit and read states */}
            <li className="px-4 py-2 text-white hover:bg-lightgrey hover:text-dashboardblue cursor-pointer">
              <button
                onClick={() => setIsEditing((prevIsEditing) => !prevIsEditing)}
              >
                {isEditing ? "Cancel Edit" : "Edit Article"}
              </button>
            </li>

            {/* delete article */}
            <li className="px-4 py-2 text-white hover:bg-lightgrey hover:text-dashboardblue cursor-pointer">
              <Dialog
                trigger={<button>Delete Article</button>}
                title="Delete Article"
                description="Are you sure you want to delete this article?"
                className="bg-white dark:bg-dashboardblue absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 py-12 px-8 rounded-lg text-center"
                dialogIsOpen={dialogIsOpen}
                setDialogIsOpen={setDialogIsOpen}
              >
                <DeleteArticle />
              </Dialog>
            </li>
            <li className="px-4 py-2 text-white hover:bg-lightgrey hover:text-dashboardblue cursor-pointer">
              <Link href={`/articles/${articleId}/pdf`}>
                <span>Download as PDF</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ArticleMenu;
