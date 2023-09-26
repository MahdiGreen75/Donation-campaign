/* eslint-disable react/prop-types */


const SeeAllBtn = ({handleSeeAllBtn}) => {
    return (
        <div className="w-full flex justify-center">
            <button onClick={handleSeeAllBtn} className="px-3 py-1 bg-green-600 hover:bg-green-700 duration-300 rounded-sm mb-5 text-center text-white font-bold text-sm">See All</button>
        </div>
    );
};

export default SeeAllBtn;