import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouts from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'addtoy',
          element:<PrivateRouts><AddToy></AddToy></PrivateRouts>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;