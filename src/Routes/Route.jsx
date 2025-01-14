import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
// import Error from "../Pages/Error/Error";
import App from "../App";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        //   errorElement: <Error />,
        children: [
            { path: "/", element: <App /> },
            { path: "/login" },
            { path: "/registration" },
        ],
    },
]);

export default route;
