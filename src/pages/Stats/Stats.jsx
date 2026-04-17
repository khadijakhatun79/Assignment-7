import React, { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

  const callCount = timeline.filter(item => item.type === "Call").length;
  const textCount = timeline.filter(item => item.type === "Text").length;
  const videoCount = timeline.filter(item => item.type === "Video").length;

  const data = [
    { name: "Text", value: textCount, fill: "#0B666A" },
    { name: "Call", value: callCount, fill: "#7132CA" },
    { name: "Video", value: videoCount, fill: "#54C392" },
  ];

  return (
    <div className="max-w-5xl mx-auto pt-20 px-4 mb-20 overflow-hidden">
      
      {/* Title */}
      <h1 className="text-2xl sm:text-5xl font-bold text-[#1F2937] mb-10">
        Friendship Analytics
      </h1>

      {/* Chart Card */}
      <div className="bg-base-100 shadow rounded-lg p-8">
        
        <h2 className="text-xl font-bold text-[#244D3F] mb-10">
          By Interaction Type
        </h2>

        <div className="flex justify-center">
          <PieChart width={350} height={350}>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={80}
              outerRadius={110}
              paddingAngle={5}
              isAnimationActive={true}
            />

            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;