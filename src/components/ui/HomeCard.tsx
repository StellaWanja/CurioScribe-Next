import React from "react";
import { Palette, Eye, FolderOpen } from "lucide-react";

function HomeCard() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div>
        <div className="mt-6 w-24 h-24 bg-[#FDEEF8] flex items-center justify-center rounded-2xl shadow-md">
          <Palette size={48} className="stroke-[#990066]" />
        </div>
        <div className="mt-10">
          <h4 className="font-bold text-xl">Creative Freedom</h4>
          <p className="mt-2 text-lg">
            Let your imagination run wild. From whimsical tales to insightful
            articles, CurioScribe adapts to your needs.
          </p>
        </div>
      </div>

      <div>
        <div className="mt-6 w-24 h-24 bg-[#E5FAF9] flex items-center justify-center rounded-2xl shadow-md">
          <Eye size={48} className="stroke-[#00CCBE]" />
        </div>
        <div className="mt-10">
          <h4 className="font-bold text-xl">Seamless Customization</h4>
          <p className="mt-2 text-lg">
            Review, edit, and personalize generated content to reflect your
            voice and vision.
          </p>
        </div>
      </div>

      <div>
        <div className="mt-6 w-24 h-24 bg-[#F2FAFD] flex items-center justify-center rounded-2xl shadow-md">
          <FolderOpen size={48} className="stroke-[#4A8DFF]" />
        </div>
        <div className="mt-10">
          <h4 className="font-bold text-xl">Effortless Organization</h4>
          <p className="mt-2 text-lg">
            Manage and organize your projects with an intuitive content
            dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
