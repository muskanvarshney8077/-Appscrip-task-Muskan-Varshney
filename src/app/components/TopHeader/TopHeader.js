import "../TopHeader/TopHeader.css";
import LoreumPic from "../../assets/TopHeader/LoremPic.png";
import Image from "next/image";
const TopHeader = () => {
  return (
    <div className="TopHeader">
      <div className="TopHeaderTextAlign">
        <Image src={LoreumPic} alt="loreumpic" />
        <p>Loreum Ipsom dolor</p>
      </div>

      <div className="TopHeaderTextAlign">
        <Image src={LoreumPic} alt="loreumpic" />
        <p>Loreum Ipsom dolor</p>
      </div>
      <div className="TopHeaderTextAlign">
        <Image src={LoreumPic} alt="loreumpic" />
        <p>Loreum Ipsom dolor</p>
      </div>
    </div>
  );
};

export default TopHeader;
