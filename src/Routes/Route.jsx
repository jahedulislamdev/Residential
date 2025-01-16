import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import App from "../App";
import EstateDetail from "../Pages/Residential/EstateDetail";
import PrivateRoute from "../Private/PrivateRoute";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <App /> },
            { path: "/estate/:id", element: <PrivateRoute><EstateDetail /></PrivateRoute> },
            { path: "/login", element: <Login /> },
            { path: '/registration', element: <Registration /> },
            { path: '/profile', element: <Profile /> },
            { path: "/edit_profile", element: <UpdateProfile /> }
        ],
    },
]);

export default route;
