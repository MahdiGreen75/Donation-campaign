import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainPage from './components/MainPage/MainPage';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import DonationDetails from './components/DonationDetails/DonationDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://raw.githubusercontent.com/MahdiGreen75/all-data/main/allData.json"),
        element: <Home></Home>
      },
      {
        path: "/donation",
        loader: () => fetch("https://raw.githubusercontent.com/MahdiGreen75/all-data/main/allData.json"),
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        loader: () => fetch("https://raw.githubusercontent.com/MahdiGreen75/all-data/main/allData.json"),
        element: <Statistics></Statistics>
      },
      {
        path: "/donate/:detailsId",
        loader: () => fetch("https://raw.githubusercontent.com/MahdiGreen75/all-data/main/allData.json"),
        element: <DonationDetails></DonationDetails>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
