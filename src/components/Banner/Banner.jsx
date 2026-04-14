import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="mb-20 pb-8 border-b border-b-[#E9E9E9] text-center space-y-6 pt-[60px] container mx-auto px-4">
      
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Friends to keep close in your life
      </h2>

      <p className="text-gray-600 max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      <div className="flex justify-center">
        <button className="btn bg-[#244D3F] text-white flex items-center gap-2 px-4 py-2">
          <FaPlus />
          Add a Friend
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-3xl md:text-4xl">10</h3>
          <span className="text-[#64748B]">Total Friends</span>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-3xl md:text-4xl">3</h3>
          <span className="text-[#64748B]">On Track</span>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-3xl md:text-4xl">6</h3>
          <span className="text-[#64748B]">Need Attention</span>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-3xl md:text-4xl">12</h3>
          <span className="text-[#64748B]">Interactions This Month</span>
        </div>

      </div>
    </div>
  );
};

export default Banner;