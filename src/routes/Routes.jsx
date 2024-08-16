import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <div>Hello Layout</div>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Registration/>
            }
        ]
    }
])
export default router;