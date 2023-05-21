import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouts from "./PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";

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
          path:'alltoys',
          element:<PrivateRouts><AllToys></AllToys></PrivateRouts>
        },
        {
          path:'addtoy',
          element:<PrivateRouts><AddToy></AddToy></PrivateRouts>
        },
        {
          path:'productDetails/:id',
          element:<PrivateRouts><ProductDetails></ProductDetails></PrivateRouts>
        },
        {
          path:'mytoy',
          element:<PrivateRouts><MyToys></MyToys></PrivateRouts>
        },
        {
          path:'updateProduct/:id',
          element:<UpdateProduct></UpdateProduct>,
          loader: ({params}) => fetch(`https://kidoozie-car-server.vercel.app/update/${params.id}`)
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