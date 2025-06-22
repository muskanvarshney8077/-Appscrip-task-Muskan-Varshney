import React from "react";
import TopHeader from "../components/TopHeader/TopHeader";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Filter from "../components/Filter/Filter";

import { DataProvider } from "../utils/Context";
import "../Dashboard/Dashboard.css";
import "../globals.css";
import Productstore from "../components/Productstore/Productstore";
import Footer from "../components/Footer/Footer";
const page = () => {
  return (
    <div>
      <DataProvider>
        <TopHeader />
        <div className="mainDiv">
          <Header />
          <Banner />
          <Filter />
          <Productstore />
        </div>
        <Footer />
      </DataProvider>
    </div>
  );
};

export default page;
