import Home from "../components/Pages/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../components/layouts/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
export default router;