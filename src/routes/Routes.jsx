import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ChefsLayout from "../layouts/chefsLayout";
import ViewRecipes from "../pages/ViewRecipes/ViewRecipes";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element:<Register></Register>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            }
        ]
    },

    {
      path:'chef',
      element:<ChefsLayout></ChefsLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:':id',
            element:<PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
            loader:({params})=>fetch(`https://chef-recipe-server-shuvo9620.vercel.app/chef/${params.id}`)
        }
      ]
    }
])

export default router;