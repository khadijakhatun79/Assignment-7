import React from "react";
import useApps from "../../hooks/useApps";
import FriendCard from "../ui/FriendCard";

const Friends = () => {

  const { friends, loading } = useApps(); 

  return (
    <div className="container mx-auto my-[60px] px-4">

      {/* Section header */}
      <div className="mb-8">
        <h2 className="font-bold text-4xl">Your Friends</h2>
        <p className="text-gray-500 mt-2">
          Total Friends: {friends.length}
        </p>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-[200px]">
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <div className="grid gap-5 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4">

          {friends.map((friend) => (
            <FriendCard friend={friend} key={friend.id} />
          ))}

        </div>
      )}

    </div>
  );
};

export default Friends;