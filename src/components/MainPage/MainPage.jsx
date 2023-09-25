import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainPage = () => {
    return (
        <div>
            <div className="mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl ">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainPage;