"use client";
import React from "react";
import "./Productstore.css";
import Sidebar from "../Sidebar/Sidebar";
import { useMyContext } from "@/app/utils/Context";
import ProductCard from "../ProductCard/ProductCard";

const Productstore = () => {
  const { state } = useMyContext();
  return (
    <div className="productStoreMainDiv">
      {!state.hideFilter && (
        <div className="sidebarDiv">
          <Sidebar />
        </div>
      )}
      <div
        className={`productCardContainer ${
          state.hideFilter ? "fulllength" : "partiallength"
        }`}
      >
        <div
          className={`container ${
            state.hideFilter ? "fullcontainer" : "partialcontainer"
          }`}
        >
          {state.mainData?.map((ele, i) => (
            <ProductCard
              key={i}
              id={ele.id}
              header={""}
              isoutofstock={ele.isoutofstock}
              img={ele.image}
              title={ele.title}
              like={ele.isLike}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productstore;
