import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../utilites/localStorage"
import NoDonation from "./NoDonation";
import HasDonation from "./HasDonation";
import SeeAllBtn from "./SeeAllBtn";
import { useState } from "react";

const Donation = () => {
    const [count, setCount] = useState(4);
    const [isShowBtn, setIsShowBtn] = useState(true);

    const routeData = JSON.parse(useLoaderData());
    const localStorageData = getStoredData();

    let filtered = {};
    for (let i of localStorageData) {
        for (let j of routeData) {
            if (i === j.id) {
                filtered[i] = j;
            }
        }
    }
    const storedData = Object.values(filtered);

    const handleSeeAllBtn = () => {
        setCount(storedData.length);
        setIsShowBtn(false);
        return;
    }

    return (
        <div>
            {!localStorageData.length ? <NoDonation></NoDonation> :
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 py-5 px-3 sm:px-0">
                        {
                            storedData.slice(0, count).map((item, index) => <HasDonation key={index} {...item}></HasDonation>)
                        }
                    </div>
                    <div>
                        {storedData.length >=4 && <div>
                            {isShowBtn ? <SeeAllBtn handleSeeAllBtn={handleSeeAllBtn}></SeeAllBtn> : ""}
                        </div>}
                    </div>
                </div>
            }
        </div >
    );
};

export default Donation;