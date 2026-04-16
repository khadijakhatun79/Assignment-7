import React, {  useContext, useState } from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { TimelineContext } from "../../context/TimelineContext"; 
//import { toast } from "react-toastify";


const FriendDetails = () => {
    const { id } = useParams();
      const { friends, loading } = useApps(); 

      const expectedFriend = friends.find((friend) => String(friend.id) === id);
 
      const {Timeline, setTimeline} = useContext(TimelineContext);

      if (loading) {
        return   <div className="flex justify-center items-center h-[200px]">
          <span className="loading loading-spinner"></span>
        </div>
      }
       const statusColor = {
  "almost due": "#EFAD44",
  overdue: "#EF4444",
  "on-track": "#244D3F",
};


  const handleTimeline = ()=> {
    setTimeline([...Timeline,expectedFriend] )

  }
  console.log(Timeline, 'Timeline');
      
    return (
          <div className="container mx-auto mt-20 mb-20">
          <div className='flex gap-6'>
          <div>
          <div className="card p-6 bg-base-100 shadow-sm w-[350px]"> 
            
             <figure>
              <img className="h-[80px] w-auto rounded-[50%]" src={expectedFriend.picture} alt={expectedFriend.name} />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold text-[#1F2937]">{expectedFriend.name}</h2>
                <div> <span style={{backgroundColor: statusColor[expectedFriend.status],}}
                className="text-white px-3 py-1 rounded-full text-xs">{expectedFriend.status}</span>  </div>
            <div className="flex justify-center gap-2 flex-wrap">
              {(expectedFriend?.tags || []).map((tag, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded-full bg-[#CBFADB] text-[#64748B] p-2">
                  {tag}
                </span>
              ))}
            </div>
            <p className="">{expectedFriend.bio}</p>
            <span>Preferred: {expectedFriend.email}</span>
    
            </div>
            </div>
            <div className=' w-[350px] mt-4'>
          <div className="mt-6 space-y-2">
          <button className="w-full py-2 roundedcard p-6 bg-base-100 shadow-sm">⏰ Snooze 2 Weeks</button>
          <button className="w-full py-2 roundedcard p-6 bg-base-100 shadow-sm">📦 Archive</button>
          <button className="w-full py-2 rounded card p-6 bg-base-100 shadow-sm text-red-500">🗑 Delete</button>
        </div>
        </div>
          </div>
        
          <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-3xl md:text-4xl">{expectedFriend.days_since_contact}</h3>
          <span className="text-[#64748B]">Days Since Contact</span>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-3xl md:text-4xl">{expectedFriend.goal}</h3>
          <span className="text-[#64748B]">Goal (Days)</span>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-3xl md:text-4xl">{expectedFriend.next_due_date}</h3>
          <span className="text-[#64748B]">Next Due</span>
        </div>


      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md mt-6 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p>Connect every {expectedFriend.goal} days</p>
            </div>

            <button className="px-4 py-2 bg-gray-100 rounded">Edit</button>
          </div> 

          <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
            <h3 className="font-semibold mb-4">Quick Check-In</h3>

            

         <button
          className="btn bg-purple-500 text-white"
          onClick={handleTimeline}
        >
          Install now
        </button>
          
        </div>
          </div>
       </div>
    </div>
    );
};

export default FriendDetails; 