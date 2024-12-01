import React from "react";

const PieChartWithCircles = () => {
  return (
    <div className="flex justify-center items-center h-full ">
      <svg width="500" height="500" viewBox="0 0 300 300">
        {/* Outer Circle (Pie Chart Base) */}
        <circle
          cx="150"
          cy="150"
          r="140"
          fill="white"
          stroke="rgba(128, 128, 128, 0.7)" /* Faded Gray */
          strokeWidth="1" /* Reduced Thickness */
        />

        {/* Pie Chart Slices */}
        <path
          d="M150,150 L150,10 A140,140 0 0,1 290,150 Z"
          fill="none"
          stroke="rgba(128, 128, 128, 0.7)" /* Faded Gray */
          strokeWidth="1" /* Reduced Thickness */
        />
        <path
          d="M150,150 L290,150 A140,140 0 0,1 150,290 Z"
          fill="none"
          stroke="rgba(128, 128, 128, 0.7)" /* Faded Gray */
          strokeWidth="1" /* Reduced Thickness */
        />
        <path
          d="M150,150 L150,290 A140,140 0 0,1 10,150 Z"
          fill="none"
          stroke="rgba(128, 128, 128, 0.7)" /* Faded Gray */
          strokeWidth="1" /* Reduced Thickness */
        />
        <path
          d="M150,150 L10,150 A140,140 0 0,1 150,10 Z"
          fill="none"
          stroke="rgba(128, 128, 128, 0.7)" /* Faded Gray */
          strokeWidth="1" /* Reduced Thickness */
        />

        {/* Inner Circles */}
        <circle
          cx="150"
          cy="150"
          r="90"
          fill="white"
          stroke="rgba(128, 128, 128, 0.7)" /* Faded Gray */
          strokeWidth="1" /* Reduced Thickness */
        />
        <circle
          cx="150"
          cy="150"
          r="50"
          fill="white"
          stroke="rgba(128, 128, 128, 0.7)" /* Faded Gray */
          strokeWidth="1" /* Reduced Thickness */
        />
      </svg>
    </div>
  );
};

export default PieChartWithCircles;
