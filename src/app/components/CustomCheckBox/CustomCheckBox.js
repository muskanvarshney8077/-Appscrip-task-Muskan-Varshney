"use client";
import React from "react";
import "./CustomeCheckBox.css";
import FilterDown from "../../assets/Filter/arrow-down.png";
import Image from "next/image";
import { useMyContext } from "@/app/utils/Context";

const CustomCheckBox = ({ id, header, optionArr, isCollapse }) => {
  const { state, handleState } = useMyContext();

  const handleFilterDown = (id) => {
    handleState({
      SideBarData: [
        ...state.SideBarData.map((ele) => {
          if (ele.id === id) {
            ele.isCollapse = !isCollapse;
            return ele;
          } else {
            return ele;
          }
        }),
      ],
    });
  };
  return (
    <div className="fontControl">
      <div>
        <hr className="hr" />
        <div
          className="header"
          onClick={() => {
            handleFilterDown(id);
          }}
        >
          <h4>{header}</h4>
          <Image
            src={FilterDown}
            alt="filterdown"
            className={`${isCollapse && "rotateFilterDown"}`}
          />
        </div>
      </div>
      <p>All</p>
      {isCollapse && (
        <div className="dataCheckbox">
          <p className="unselect">Unselect all</p>
          {optionArr?.map((ele, i) => (
            <div key={i} className="checkboxData">
              <input type="checkbox" id={`${ele}_checkBoxId1`} />
              <label htmlFor={`${ele}_checkBoxId1`} className="checkLabel">
                {ele}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomCheckBox;
