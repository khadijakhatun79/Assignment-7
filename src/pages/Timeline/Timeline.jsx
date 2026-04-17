import React, { useState, useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import CallPng from "../../assets/call.png";
import VideoPng from "../../assets/video.png";
import TextPng from "../../assets/text.png";
import { FaChevronDown } from "react-icons/fa6";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);

  const [filter, setFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const filteredData = timeline.filter((item) => {
    if (filter === "All") return true;
    return item.type === filter;
  });

  return (
    <div className="p-5 max-w-4xl mx-auto mb-20">
      <h2 className="text-4xl font-bold mb-6">Timeline</h2>

      {/* Filter */}
      <div className="relative mb-6 w-48">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-3 bg-white shadow flex justify-between"
        >
          {filter}
          <FaChevronDown />
        </button>

        {isOpen && (
          <ul className="absolute w-full bg-white shadow">
            {[ "All","Call", "Text", "Video"].map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  setFilter(opt);
                  setIsOpen(false);
                }}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="p-4 items-center bg-white shadow flex gap-4">

              <img
                src={
                  item.type === "Call"
                    ? CallPng
                    : item.type === "Video"
                    ? VideoPng
                    : TextPng
                }
                className="w-6 h-6"
              />

              <div>
                <h3>{item.title}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No activities found</p>
        )}
      </div>
    </div>
  );
};

export default Timeline;