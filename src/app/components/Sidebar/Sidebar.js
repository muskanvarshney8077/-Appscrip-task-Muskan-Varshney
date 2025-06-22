"use client";
import React from "react";
import "./Sidebar.css";

import CustomCheckBox from "../CustomCheckBox/CustomCheckBox";
import { useMyContext } from "@/app/utils/Context";

const Sidebar = () => {
  const { state, handleState } = useMyContext();
  return (
    <div>
      <div className="customizable">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">CUSTOMIZABLE</label>
      </div>
      {state.SideBarData?.map((ele, i) => (
        <div key={i}>
          <CustomCheckBox
            id={ele.id}
            header={ele.header}
            optionArr={ele.data}
            isCollapse={ele.isCollapse}
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
