import React from "react";
import { Eye, FolderOpen, Palette } from "lucide-react";

import Card from "./Card";

function HomeCard() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card
        icon={<Palette size={48} className="stroke-[#990066]" />}
        iconBGColour="bg-[#FDEEF8]"
        title="Creative Freedom"
        text="Let your imagination run wild. From whimsical tales to insightful
            articles, CurioScribe adapts to your needs."
      />
      <Card
        icon={<Eye size={48} className="stroke-[#00CCBE]" />}
        iconBGColour="bg-[#E5FAF9]"
        title="Seamless Customization"
        text="Review, edit, and personalize generated content to reflect your
            voice and vision."
      />
       <Card
        icon={<FolderOpen size={48} className="stroke-[#4A8DFF]" />}
        iconBGColour="bg-[#F2FAFD]"
        title="Effortless Organization"
        text="Manage and organize your projects with an intuitive content
            dashboard."
      />
    </div>
  );
}

export default HomeCard;
