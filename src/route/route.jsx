import { Outlet, createBrowserRouter, } from "react-router-dom";
import Nav from "../copoment/Navbar/Nav";

import Eorror from "../copoment/error/Eorror";
import Home from "../copoment/Home/Home";
import Favorite from "../copoment/favourit/Favorite";
import Login from "../copoment/login/Login";
import Phone from "../copoment/phones/Phone";



    const myRouter =createBrowserRouter([
    {
        path:"/",
        element:<div>
            <Nav></Nav>
           
            
            <div className="p-5">
            <Outlet></Outlet>
            </div>
        </div>,
      errorElement:<Eorror></Eorror>,
      children:[
        {
         path:'/',
         element: <Home></Home>,
         loader: ()=>fetch('/phones.json')
        },
        {
           path:'/favorite',
           element:<Favorite></Favorite>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/phones/:id',
           element:<Phone></Phone>,
           loader: ()=>fetch('/phones.json')
        }
      ]
    }

    ])
    

export default myRouter;