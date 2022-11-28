import AddProduct from "../components/Pages/AddProduct";
import Blog from "../components/Pages/Blog";
import Category from "../components/Pages/Category";
import Error from "../components/Pages/Error";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import MyBookings from "../components/Pages/MyBookings";
import Signup from "../components/Pages/Signup";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../components/layouts/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch('http://localhost:5000/categories'),
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/category/:brand',
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.brand}`)

            },
            {
                path: '/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/mybookings',
                element: <BuyerRoute><MyBookings></MyBookings></BuyerRoute>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])
export default router;