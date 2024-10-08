
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';

const MainLayout = () => {
    return (
        <>
            <div className="mx-4 lg:max-w-7xl lg:mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default MainLayout;