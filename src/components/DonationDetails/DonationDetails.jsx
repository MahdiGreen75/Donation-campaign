import { useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DonationDetails = () => {
    const {detailsId} = useParams();
    const fetchedData = JSON.parse(useLoaderData());
    
    const {description, price, color, title, id} = fetchedData.find(item=> item.id === Number(detailsId))
    
    const bgColor = {
        slate: "bg-slate-600",
        red: "bg-red-600",
        orange: "bg-orange-600",
        lime: "bg-lime-600",
        teal: "bg-teal-600",
        cyan: "bg-cyan-600",
        violet: "bg-violet-600",
        purple: "bg-purple-600",
        pink: "bg-pink-600",
        emerald: "bg-emerald-600",
        amber: "bg-amber-600",
    }

    return (
        <div className="p-5 sm:p-0">
            <div className="relative -z-50 w-full  h-[50vh] sm:h-[60vh] md:h-[80vh] my-5">
                <img className="w-full h-full object-cover rounded-md" src={`https://i.ibb.co/Y8KP3wD/Rectangle-4288.jpg`} />
                <div className="absolute h-[20%] bottom-0 left-0 right-0 bg-[#0b0b0b80] flex justify-start items-center rounded-b-md p-6">
                    <Link><button className={`${bgColor[color]} text-white font-bold px-3 py-2  rounded-md text-xs`}>Donate {price}</button></Link>
                </div>
            </div>
            <div className="space-y-2 mb-5">
                <h1 className="text-xl font-extrabold">{title}</h1>
                <p className="text-base ">{description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;