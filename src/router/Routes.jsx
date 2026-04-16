import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Stats from "../pages/Stats/Stats";
import Timeline from "../pages/Timeline/Timeline";
import FriendDetails from "../pages/FriendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>
        
      },
       {
        path: "/Friends/:id",
        element: <FriendDetails />, 
      },
      
       {
        path: "Timeline",
        element: <Timeline></Timeline>  
      },
        {
        path: "Stats",
        element: <Stats></Stats> 
      },
    ],
    errorElement: <NotFoundPage></NotFoundPage>
  },
]);