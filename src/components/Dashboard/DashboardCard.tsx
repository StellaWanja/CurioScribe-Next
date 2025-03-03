import React from "react";
import Link from "next/link";
import { ArrowRight, Brush, NotebookPen } from "lucide-react";

const cardContent = [
  {
    id: 1,
    icon: <NotebookPen />,
    title: "Create an engaging article",
    link: "",
  },
  { id: 2, icon: <Brush />, title: "Create an imaginative tale", link: "" },
];

function DashboardCard() {
  return (
    <div className="flex gap-8 flex-col sm:flex-row">
      {cardContent.map(({ id, icon, title, link }) => (
        <div
          key={id}
          className="font-sans w-full sm:w-1/2 bg-dashboardblue rounded-2xl p-8"
        >
          <div className="flex justify-between items-center">
            <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
              {icon}
            </div>
            <Link href={link}>
              <ArrowRight className="text-white" />
            </Link>
          </div>
          <div className="text-white mt-4 ">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="font-mono mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, et?
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCard;
