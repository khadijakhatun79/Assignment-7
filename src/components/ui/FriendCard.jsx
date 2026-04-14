import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  return (
    // <Link to={`/${friend.id}`} className="card bg-base-100 shadow-sm">
      
    //   <figure>
    //     <img src={friend.picture} alt={friend.name} className="h-[200px] w-full object-cover"
    //     />
    //   </figure>
    //   <figure>
    //     <img src="https://randomuser.me/api/portraits/men/32.jpg" alt={friend.name} className="h-[200px] w-full object-cover"
    //     />
    //   </figure>

    //   <div className="card-body">
    //     <h2 className="card-title">{friend.name}</h2>

    //     <p className="text-sm text-gray-500">
    //       {friend.days_since_contact} days ago
    //     </p>

    //     {/* Tags */}
    //     <div className="flex flex-wrap gap-1">
    //       {friend.tags.map((tag, i) => (
    //         <span key={i} className="bg-gray-200 text-xs px-2 py-1 rounded">
    //           {tag}
    //         </span>
    //       ))}
    //     </div>

    //     {/* Status */}
    //     <span
    //       className={`mt-2 px-2 py-1 text-sm font-semibold rounded ${
    //         friend.status === "overdue"
    //           ? "bg-red-100 text-red-500"
    //           : friend.status === "almost due"
    //           ? "bg-yellow-100 text-yellow-500"
    //           : "bg-green-100 text-green-500"
    //       }`}
    //     >
    //       {friend.status}
    //     </span>
    //   </div>
    // </Link>
    <div className="card p-6 bg-base-100 shadow-sm">
            <figure>
              <img className="h-[80px] w-auto rounded-[50%]" src={friend.picture} alt={friend.name} />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold text-[#1F2937]">{friend.name}</h2>
             <span className="text-[#64748B]">{friend.timeAgo}</span>
            <div>  <span className="bg-[#CBFADB] text-[#64748B] p-2 ">{friend.tags}</span></div>
             <span>{friend.status}</span>
             
            </div>
          </div>
  );
};

export default FriendCard;