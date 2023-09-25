/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const HomepageCard = ({ picture, title, id, category, color }) => {


    const bgColor = {
        slate: "bg-slate-100",
        red: "bg-red-100",
        orange: "bg-orange-100",
        lime: "bg-lime-100",
        teal: "bg-teal-100",
        cyan: "bg-cyan-100",
        violet: "bg-violet-100",
        purple: "bg-purple-100",
        pink: "bg-pink-100",
        emerald: "bg-emerald-100",
        amber: "bg-amber-100",
    }

    const categoryBgColor = {
        slate: "bg-slate-300",
        red: "bg-red-300",
        orange: "bg-orange-300",
        lime: "bg-lime-300",
        teal: "bg-teal-300",
        cyan: "bg-cyan-300",
        violet: "bg-violet-300",
        purple: "bg-purple-300",
        pink: "bg-pink-300",
        emerald: "bg-emerald-300",
        amber: "bg-amber-300",
    }

    const textColor = {
        slate: "text-slate-600",
        red: "text-red-600",
        orange: "text-orange-600",
        lime: "text-lime-600",
        teal: "text-teal-600",
        cyan: "text-cyan-600",
        violet: "text-violet-600",
        purple: "text-purple-600",
        pink: "text-pink-600",
        emerald: "text-emerald-600",
        amber: "text-amber-600",
    }




    return (
        <Link to={`/donate/${id}`}>
            <div className="drop-shadow-lg rounded-lg h-full">
                <div className="h-[65%] rounded-lg">
                    <img className="w-full h-full object-cover rounded-t-lg" src={picture} />
                </div>
                <div className={`${bgColor[color]} h-auto rounded-b-lg  pl-2 pb-2 pt-2 md:pl-3 md:pb-3 md:pt-3 lg:pl-5 lg:pb-5 lg:pt-5`}>
                    <p className={`${categoryBgColor[color]} ${textColor[color]} text-xs font-bold inline-block px-2 py-1 mb-1  rounded-sm`}>{category}</p>
                    <p className={`${textColor[color]} font-extrabold md:text-xs lg:text-sm`}>{title}</p>
                </div>
            </div>
        </Link>
    );
};

export default HomepageCard;