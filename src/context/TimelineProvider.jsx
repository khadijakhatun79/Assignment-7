import { useState } from "react";
import { TimelineContext } from "./TimelineContext";


const TimelineProvider = ({children}) => {
  const [Timeline, setTimeline] = useState([]);
  const data = {
   Timeline,
   setTimeline,
  };

  

  return (
    <TimelineContext.Provider value={data}>
  {children}
  
   
</TimelineContext.Provider>
  );
};

export default TimelineProvider;
