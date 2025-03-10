import React from "react";
import { Loader } from "lucide-react";

function Spinner() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-darkblue z-50">
      <Loader className="animate-spin" width={50} height={50} />
    </div>
  );
}

export default Spinner;
