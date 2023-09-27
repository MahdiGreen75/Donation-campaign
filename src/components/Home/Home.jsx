import { useLoaderData } from "react-router-dom";
import HomepageCard from "../HomepageCard/HomepageCard";
import { useState, useRef, useEffect } from "react";



const Home = () => {
    const inputRef = useRef(null);
    let [search, setSearch] = useState("");
    let cardsData = JSON.parse(useLoaderData());

    // let searchParams = ["Health", "Education", "Clothing", "Food", "health", "food", "education", "clothing"];

    const handleClick = () => {
        setSearch(inputRef.current.value);
        // console.log(inputRef.current.value === "");
    }

    return (
        <>
            <div>
                <img src="https://i.ibb.co/0Btg0Vn/banner.jpg" className="w-full absolute top-0	left-0 -z-50 opacity-5" />
                {/* banner section */}
                <div className="w-full h-[25vh] sm:h-[50vh] md:h-[65vh] lg:h-[80vh] xl:h-[90vh]">
                    <div className="flex flex-col justify-center items-center gap-2 md:gap-5 h-full">
                        <h1 className="text-xs xl:text-4xl lg:text-2xl md:text-xl sm:text-base font-bold">I Grow By Helping People In Need </h1>

                        <div className="flex items-center lg:w-1/3">
                            <input ref={inputRef} className="px-3 py-2 lg:px-4 lg:py-2 flex-1 placeholder:md:text-base placeholder:sm:text-sm rounded-l-md text-xs h-full border-gray-300 outline-none border-r-transparent border" type="text" placeholder="Search here..." />
                            <button onClick={handleClick} className="px-3 py-2 lg:px-4 lg:py-2 bg-[#FF444A] rounded-r-md text-white md:text-base sm:text-sm text-xs">Search</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-5 sm:px-0	 gap-0 sm:gap-3 md:gap-3 lg:gap-5 mb-5">
                {
                    cardsData.filter(item=>{
                        if(search === "") {
                            return item;
                        } else if( item.category.toLowerCase() === search.toLowerCase()) {
                            return item;
                        }
                    }).map(card => <HomepageCard key={card.id} {...card}></HomepageCard>)
                }
            </div>
        </>

    );
};

export default Home;