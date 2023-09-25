import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center relative">
                <div>
                    <img className="w-24 sm:w-36 " src="https://i.ibb.co/YRxp1MY/Logo.png" />
                </div>
                <div id="navbar">
                    {/* Style for Hamburger button in mobitle devices. */}
                    
                        <ul className="opacity-0 sm:opacity-100 right-0 -bottom-32 duration-200 bg-red-200  rounded-md shadow-2xl sm:bg-transparent sm:shadow-none sm:rounded-none absolute sm:static flex  flex-col sm:flex-row gap-1 p-3 sm:p-0 sm:gap-10 text-lg font-normal tracking-tighter">
                            <li><NavLink to={`/`} >Home</NavLink></li>
                            <li><NavLink to={`/donation`} >Donation</NavLink></li>
                            <li><NavLink to={`/statistics`} >Statistics</NavLink></li>
                        </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;