import React, { useContext } from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { TimelineContext } from "../../context/TimelineContext";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineSms } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import CallPng from "../../assets/call.png";
import VideoPng from "../../assets/video.png";
import TextPng from "../../assets/text.png";
import { toast } from "react-toastify";
import { HiBellSnooze } from "react-icons/hi2";
import { FaArchive } from "react-icons/fa";
import { ImBin } from "react-icons/im";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useApps();

  const { setTimeline } = useContext(TimelineContext);

  const expectedFriend = friends.find(
    (friend) => String(friend.id) === id
  );


  if (loading) {
    return (
      <div className="flex justify-center items-center h-[200px]">
        <span className="loading loading-spinner"></span>
      </div>
    );
  }

 
  if (!expectedFriend) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Friend not found
      </h1>
    );
  }

  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${expectedFriend.name}`,
      date: new Date().toLocaleDateString(),
    };

    setTimeline((prev) => [...prev, newEntry]); 

    toast.success(`${type} with ${expectedFriend.name}`);
  };

  const statusColor = {
    "almost due": "#EFAD44",
    overdue: "#EF4444",
    "on-track": "#244D3F",
  };

  return (
    <div className="container mx-auto mt-20 mb-20 px-4">
      <div className="flex flex-col lg:flex-row gap-6">

        {/* LEFT */}
        <div>
          <div className="card p-6 bg-base-100 shadow-sm w-full lg:max-w-[350px]">
            <figure>
              <img
                className="h-[80px] w-[80px] rounded-full object-cover"
                src={expectedFriend.picture}
                alt={expectedFriend.name}
              />
            </figure>

            <div className="card-body text-center">
              <h2 className="text-xl font-semibold">
                {expectedFriend.name}
              </h2>

              <div><span
                style={{
                  backgroundColor:
                    statusColor[expectedFriend.status],
                }}
                className="text-white px-3 py-1 rounded-full text-xs"
              >
                {expectedFriend.status}
              </span></div>

              <div className="flex justify-center gap-2 flex-wrap mt-2">
                {expectedFriend.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-full bg-[#CBFADB]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm mt-2">
                {expectedFriend.bio}
              </p>

              <span className="text-sm text-gray-500">
                {expectedFriend.email}
              </span>
            </div>
          </div>

            {/* Cards */}
      <div className="mt-4">
        
        <div className="bg-white rounded-2xl p-4 mb-2 border border-[#E9E9E9]">
          <h3 className="flex items-center gap-2 text-base text-[#1F2937] font-medium"> <HiBellSnooze /> Snooze 2 weeks</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 mb-2 border border-[#E9E9E9]">
          <h3 className="flex items-center gap-2 text-base text-[#1F2937] font-medium"> <FaArchive />Archive</h3>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-[#E9E9E9]">
          <h3 className="flex items-center gap-2 text-base text-red-600 font-medium"><ImBin />Delete</h3>
        </div>

        

      </div>
          
        </div>

        {/* RIGHT */}
        <div className="flex-1">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-3xl">
                {expectedFriend.days_since_contact}
              </h3>
              <span>Days Since Contact</span>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-3xl">
                {expectedFriend.goal}
              </h3>
              <span>Goal</span>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-2xl xl:text-3xl">
                {expectedFriend.next_due_date}
              </h3>
              <span>Next Due</span>
            </div>
          </div>

          {/* Goal */}
          <div className="bg-white p-8 rounded-2xl shadow mt-6 flex justify-between">
            <div>
              <h3 className="font-semibold mb-3 text-xl">
                Relationship Goal
              </h3>
              <p>Connect every {expectedFriend.goal} days</p>
            </div>

            <button className="px-4 py-2 bg-gray-100 rounded">
              Edit
            </button>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white p-6 rounded-2xl shadow mt-6">
            <h3 className="font-semibold mb-4">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleAction("Call")}
                className="h-24 flex flex-col items-center justify-center btn bg-[#F8FAFC] btn-soft"
              >
                 <img src={CallPng} className="h-[26px]" />  
                Call
              </button>

              <button
                onClick={() => handleAction("Text")}
                className="h-24 flex flex-col items-center justify-center btn bg-[#F8FAFC] btn-soft"
              >
                 <img src={TextPng} className="h-[26px]" />  
                Text
              </button>

              <button
                onClick={() => handleAction("Video")}
                className="h-24 flex flex-col items-center justify-center btn bg-[#F8FAFC] btn-soft"
              >
               <img src={VideoPng} className="h-[20px]" /> 
                Video
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;