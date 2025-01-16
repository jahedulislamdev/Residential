import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import App from "../App";
import EstateDetail from "../Pages/Residential/EstateDetail";
import PrivateRoute from "../Private/PrivateRoute";
import Login from "../Pages/Login/Login";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <App /> },
            { path: "/registration" },
            { path: "/estate/:id", element: <PrivateRoute><EstateDetail /></PrivateRoute> },
            { path: "/login", element: <Login /> }
        ],
    },
]);

export default route;
