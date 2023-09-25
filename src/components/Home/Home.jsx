import { useLoaderData } from "react-router-dom";
import HomepageCard from "../HomepageCard/HomepageCard";


const Home = () => {
    
    const dataStr = useLoaderData()
    const cards = JSON.parse(dataStr);
    

    return (
        <>
            <div>
                <img src="https://i.ibb.co/0Btg0Vn/banner.jpg" className="w-full absolute top-0	left-0 -z-50 opacity-5" />
                {/* banner section */}
                <div className="w-full h-[25vh] sm:h-[50vh] md:h-[65vh] lg:h-[80vh] xl:h-[90vh]">
                    <div className="flex flex-col justify-center items-center gap-2 md:gap-5 h-full">
                        <h1 className="text-xs xl:text-4xl lg:text-2xl md:text-xl sm:text-base font-bold">I Grow By Helping People In Need</h1>
                        <div className="flex items-center lg:w-1/3">
                            <input className="px-3 py-2 lg:px-4 lg:py-2 flex-1 placeholder:md:text-base placeholder:sm:text-sm rounded-l-md text-xs" type="text" placeholder="Search here..." />
                            <button className="px-3 py-2 lg:px-4 lg:py-2 bg-[#FF444A] rounded-r-md text-white md:text-base sm:text-sm text-xs">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {
                    cards.map(card => <HomepageCard key={card.id} {...card}></HomepageCard>)
                }
            </div>
        </>

    );
};

export default Home;