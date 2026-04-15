import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const statusColor = {
  "almost due": "#EFAD44",
  overdue: "#EF4444",
  "on-track": "#244D3F",
};
  return (
   
    <Link to={`/Friends/${friend.id}`} className="card p-6 bg-base-100 shadow-sm">
            <figure>
              <img className="h-[80px] w-auto rounded-[50%]" src={friend.picture} alt={friend.name} />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold text-[#1F2937]">{friend.name}</h2>
             <span className="text-[#64748B]">{friend.timeAgo}</span>
              <div className="flex justify-center gap-2 flex-wrap">
              {(friend?.tags || []).map((tag, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded-full bg-[#CBFADB] text-[#64748B] p-2 ">
                  {tag}
                </span>
              ))}
            </div>
               <div> <span style={{backgroundColor: statusColor[friend.status],}}
                className="text-white px-3 py-1 rounded-full text-xs">{friend.status}</span>  </div>
            </div>
          </Link> 
  );
};

export default FriendCard;