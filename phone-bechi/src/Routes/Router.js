import Blog from "../components/Pages/Blog";
import Error from "../components/Pages/Error";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Signup from "../components/Pages/Signup";

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
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])
export default router;