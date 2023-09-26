import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi"
import { useState } from "react";
import "./Navbar.css"

const Navbar = () => {
    const [hamburger, setHamburger] = useState(true);

    const activeHamburger = () => {
        setHamburger(!hamburger);
    }

    return (
        <div>
            <div className="flex justify-between items-center relative z-30">
                <div>
                    <img className="w-24 sm:w-36 " src="https://i.ibb.co/YRxp1MY/Logo.png" />
                </div>
                <div id="navbar">

                    {
                        hamburger ?
                            <FaBars className="text-xl m-1 sm:hidden" onClick={activeHamburger}></FaBars> :
                            <TfiClose className="text-xl m-1 sm:hidden" onClick={activeHamburger}></TfiClose>
                    }


                    {/* Style for Hamburger button in mobitle devices. */}

                        <div className={hamburger? "opacity-0 sm:opacity-100 duration-500" : "opacity-100 sm:opacity-100 duration-500"}>
                            <ul className=" right-0 -bottom-32 bg-gradient-to-r from-cyan-500 to-blue-500 sm:bg-none text-white sm:text-black rounded-md shadow-2xl sm:bg-transparent sm:shadow-none sm:rounded-none absolute sm:static flex  flex-col sm:flex-row gap-1 px-5 py-3 sm:p-0 sm:gap-5 md:gap-10 text-lg font-normal tracking-tighter">
                                <li><NavLink to={`/`} >Home</NavLink></li>
                                <li><NavLink to={`/donation`} >Donation</NavLink></li>
                                <li><NavLink to={`/statistics`} >Statistics</NavLink></li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;