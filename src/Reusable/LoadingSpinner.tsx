import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full bg-inherit">
      <div className="w-8 h-8 border-4 border-whiteborder-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
