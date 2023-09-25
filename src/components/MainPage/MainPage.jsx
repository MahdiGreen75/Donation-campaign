import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainPage = () => {
    return (
        <div>
            <div className="mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl ">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainPage;