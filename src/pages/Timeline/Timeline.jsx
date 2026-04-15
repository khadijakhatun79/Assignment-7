import React from 'react';

const Timeline = () => {
    return (
        <div>
            fgg
        </div>
    );
};

export default Timeline; 


// import React, { useContext, useState } from "react";
// import { TimelineContext } from "../../context/TimelineContext";

// const Timeline = () => {
//   const { timeline } = useContext(TimelineContext);

//   const [filter, setFilter] = useState("All");

//   // ✅ Filter logic
//   const filteredData =
//     filter === "All"
//       ? timeline
//       : timeline.filter((item) => item.type === filter);

//   return (
//     <div className="container mx-auto mt-20 mb-20 px-4">

//       {/* 🔝 Heading */}
//       <h1 className="text-3xl font-bold mb-6">📜 Timeline</h1>

//       {/* 🔍 Filter Buttons */}
//       <div className="flex gap-3 mb-6 flex-wrap">
//         {["All", "Call", "Text", "Video"].map((type) => (
//           <button
//             key={type}
//             onClick={() => setFilter(type)}
//             className={`px-4 py-2 rounded-full ${
//               filter === type
//                 ? "bg-black text-white"
//                 : "bg-gray-200"
//             }`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       {/* ❗ Empty State */}
//       {filteredData.length === 0 && (
//         <p className="text-gray-400">No interactions yet...</p>
//       )}

//       {/* 📋 Timeline List */}
//       <div className="space-y-4">
//         {filteredData.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
//           >
//             {/* Left */}
//             <div className="flex items-center gap-4">
              
//               {/* Icon */}
//               <span className="text-xl">
//                 {item.type === "Call" && "📞"}
//                 {item.type === "Text" && "💬"}
//                 {item.type === "Video" && "🎥"}
//               </span>

//               {/* Title */}
//               <div>
//                 <h3 className="font-medium">{item.title}</h3>
//                 <p className="text-sm text-gray-400">{item.date}</p>
//               </div>
//             </div>

//             {/* Right (type badge) */}
//             <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
//               {item.type}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;