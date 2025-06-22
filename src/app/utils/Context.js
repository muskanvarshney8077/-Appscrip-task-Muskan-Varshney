"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
const MyContext = createContext();
const DataProvider = ({ children }) => {
  const initialState = {
    mainData: [],
    menuCollapse: false,
    hideFilter: false,
    dropDownFilter: "RECOMMENDED",
    like: false,
    showFilterDropDown: false,
    SideBarData: [
      {
        id: 1,
        header: "IDEAL FOR",
        data: ["Men", "Women", "Baby & Kids"],
        isCollapse: false,
      },
      {
        id: 2,
        header: "OCASSION",
        data: ["Diwali", "Holi", "Chritmas", "New Year"],
        isCollapse: false,
      },
      {
        id: 3,
        header: "WORK",
        data: ["Office", "Daili wears", "Casual"],
        isCollapse: false,
      },
      {
        id: 4,
        header: "FABRIC",
        data: ["Nylon", "Ryon", "Cotton", "Wool"],
        isCollapse: false,
      },
      {
        id: 5,
        header: "SEGMENT",
        data: ["lorem", "ipsum", "lrem"],
        isCollapse: false,
      },
      {
        id: 6,
        header: "SUITABLE FOR",
        data: ["Winter", "Summer", "Christmas"],
        isCollapse: false,
      },
      {
        id: 7,
        header: "RAW MATERIALS",
        data: ["Raw1", "Raw2", "Raw3", "Raw4", "Raw5"],
        isCollapse: false,
      },
      {
        id: 8,
        header: "PATTERN",
        data: ["Pattern1", "Pattern2"],
        isCollapse: false,
      },
    ],
  };
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleState = (obj) => {
    dispatch(obj);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");

      handleState({
        mainData: [
          ...res.data.map((ele) => ({
            ...ele,
            isLike: false,
            isOutOfStck: false,
          })),
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const contextValue = {
    state,
    handleState,
  };
  return (
    <div>
      <div>
        <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
      </div>
    </div>
  );
};
const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useMyContext };
