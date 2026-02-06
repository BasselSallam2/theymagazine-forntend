"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
      <div
        className="bg-dark h-full bg-blue-600 transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
