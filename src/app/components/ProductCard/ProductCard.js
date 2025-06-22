"use client";
import Image from "next/image";
import React from "react";
import EmptyHeart from "../../assets/ProductCard/EmptyHeart.png";
import Heart from "../../assets/ProductCard/Heart.png";
import { useMyContext } from "@/app/utils/Context";
import "./ProductCard.css";
const ProductCard = ({ id, header, isoutofstock, img, title, like }) => {
  const { state, handleState } = useMyContext();

  return (
    <div className="ProductMain">
      <div className="imageContainer">
        <img src={img} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="Title">{title}</div>
      <div className="bottomSection">
        <div className="Signin">
          Sign in or Create an account to see pricing
        </div>
        <Image
          src={like ? Heart : EmptyHeart}
          alt="heart"
          width={30}
          height={30}
          onClick={() =>
            handleState({
              mainData: [
                ...state.mainData.map((ele) => {
                  if (ele.id === id) {
                    ele.isLike = !like;
                    return ele;
                  } else {
                    return ele;
                  }
                }),
              ],
            })
          }
        />
      </div>
    </div>
  );
};

export default ProductCard;
