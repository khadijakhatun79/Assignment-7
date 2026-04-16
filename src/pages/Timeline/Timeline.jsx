import React from 'react';
import { useContext } from 'react';
import { TimelineContext } from '../../context/TimelineContext';

const Timeline = () => {
    const {Timeline, setTimeline} = useContext(TimelineContext);
    console.log({Timeline}, "contextData");
    return (
        <div className='container mx-auto my-10'>
            {
                 Timeline.map((friend, ind) => {
          return (
            <div
              key={ind}
              className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
            >
              <div>
                <img src={friend.picture} className="h-[120px] w-auto" alt="" />
                <h2 className="font-semibold text-2xl">{friend.name}</h2>
              </div>
              
            </div>
          );
        })
            }
        </div>
    );
};

export default Timeline;