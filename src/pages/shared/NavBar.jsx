import { Link, NavLink } from "react-router-dom";
import icon from '../../../public/icons8-shopping-basket.gif'
import useAuth from "../../hooks/useAuth";


const Navbar = () => {
    const { user, logOut } = useAuth();

    const navLinks = <>
        <li>
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
            <NavLink to={'/contact'}>Contact Us</NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-black bg-opacity-20 max-w-7xl p-4 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className="h-10 w-10 hidden lg:flex" src={icon} alt="icon" /><span>Product Plus</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div>
                        <Link onClick={logOut} className="px-4 py-2 bg-[#f85437] text-white hidden rounded-none lg:flex">Logout</Link>
                    </div>
                    :
                    <div>
                        <Link to='/login' className="px-4 py-2 bg-[#f85437] text-white hidden rounded-none lg:flex">Login</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;