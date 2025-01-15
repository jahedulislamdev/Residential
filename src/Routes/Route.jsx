import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
// import Error from "../Pages/Error/Error";
import App from "../App";
import EstateDetail from "../Pages/Residential/EstateDetail";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        //   errorElement: <Error />,
        children: [
            { path: "/", element: <App /> },
            { path: "/login" },
            { path: "/registration" },
            { path: "/estate/:id", element: <EstateDetail /> }
        ],
    },
]);

export default route;
