"use client";
import React from "react";
import "./Filter.css";
import ArrowLeft from "../../assets/Filter/arrow-left.png";
// import ArrowDown from "../../assets/Filter/arrow-down.png";
import Image from "next/image";
import { useMyContext } from "@/app/utils/Context";
const Filter = () => {
  const { state, handleState } = useMyContext();
  return (
    <div className="filterDiv">
      <div className="showHideFilter">
        <span className="totalItem">{`${state.mainData?.length} item`}</span>
        <span onClick={() => handleState({ hideFilter: !state.hideFilter })}>
          <span>
            <Image
              className={`${state.hideFilter && "show"}`}
              src={ArrowLeft}
              alt={"arrow"}
            />
          </span>
          <span className="filter">
            {state.hideFilter ? "Show Filters" : "Hide Filters"}
          </span>
        </span>
      </div>
      <div>
        <select
          value={state.dropDownFilter}
          className="selectFiletr"
          onChange={(e) => handleState({ dropDownFilter: e.target.value })}
        >
          <option>RECOMMENDED</option>
          <option>NEWEST FIRST</option>
          <option>POPULAR</option>
          <option>PRICE: HIGH TO LOW</option>
          <option>PRICE: LOW TO HIGH</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
