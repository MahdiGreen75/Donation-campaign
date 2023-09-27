import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../utilites/localStorage";
import PieChart from "./PieChart";
import { UserData } from "./userData"
import { useState } from "react";

const Statistics = () => {
    const routeData = JSON.parse(useLoaderData());
    const localStorageData = getStoredData();
   
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.userGain),
        datasets: [{
            label: "Users Gained",
            data: UserData.map((data) => data.year),
            backgroundColor: ["green", "blue"]
        }]
    });



     //Total amount price
     let totalAmount = 0;
     for (let key of routeData) {
         totalAmount += Number(key.price);
     }

     let filtered = {};
     for (let i of localStorageData) {
         for (let j of routeData) {
             if (i === j.id) {
                 filtered[i] = j;
             }
         }
     }
     const storedData = Object.values(filtered);

     //Total donation amount
     let totalDonation = 0;
     for (let key of storedData) {
         totalDonation += Number(key.price);
     }

     const yourDonation = (totalDonation / totalAmount) * 100;
     const restTotal = 100 - yourDonation;


    //pie chart data

    return (
        <div>
            <div className="w-96 mx-auto mt-20">
                <PieChart chartData={userData}></PieChart>
            </div>
            <div className="text-center my-5">
                <h1 className="text-blue-600 font-bold text-xl">Your Donation is: {+yourDonation.toFixed(1)} %</h1>
                <h1 className="text-green-600 font-bold text-xl">Total Donation is: {+restTotal.toFixed(1)} %</h1>
            </div>
        </div>
    );
};

export default Statistics;