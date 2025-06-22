import Image from "next/image";
import Insta from "../../assets/Footer/Insta.png";
import Link from "../../assets/Footer/linkedn.png";
import "./Footer.css";
import USA from "../../assets/Footer/USA.png";
import White_pay from "../../assets/Footer/white_pay.png";
import Purple_pay from "../../assets/Footer/purple_pay.png";
import Amex from "../../assets/Footer/amex.png";
import Blue_white_pay from "../../assets/Footer/blue_white_pay.png";
import Gpay from "../../assets/Footer/Gpay.png";
import Red_yellow from "../../assets/Footer/red_yellow.png";
const Footer = () => {
  return (
    <div className="footerMain">
      <div className="firstPart">
        <div className="subscribe">
          <p className="BoldClass">BE THE FIRST TO KNOW</p>
          <p className="summary">
            Sign up for the updates from the metta muse{" "}
          </p>
          <div className="inputBox">
            <input type="text" placeholder="Enter your email..." />

            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="subscribe">
          <h4 className="BoldClass">Contact Us</h4>
          <p className="summary">+44 221 133 5360</p>
          <p className="summary">customercare@mettamuse.com</p>
          <h4 className="BoldClass">Currency</h4>
          <div className="Usa">
            <Image src={USA} alt="" />
            <p>.</p>
            <p>USA</p>
          </div>
          <p className="summary">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr className="hr" />
      <div className="bottomPart">
        <div className="bottomPart1">
          <h5 className="BoldClass">metta muse</h5>
          <p className="summary">About Us</p>
          <p className="summary">Stories</p>
          <p className="summary">Artisans</p>
          <p className="summary">Boutiques</p>
          <p className="summary">Contact Us</p>
          <p className="summary">EU Compliances Docs</p>
        </div>
        <div className="bottomPart1">
          <h5 className="BoldClass">QUICK LINKS</h5>
          <p className="summary">Orders & Shipping</p>
          <p className="summary">Join/Login as a Seller</p>
          <p className="summary">Payment & Pricing</p>
          <p className="summary">Return & Refunds</p>
          <p className="summary">FAQS</p>
          <p className="summary">Privacy Policy</p>
          <p className="summary">Terms & Conditions</p>
        </div>
        <div>
          <div className="followUs">
            <h3 className="BoldClass">FOLLOW US</h3>

            <div>
              <Image src={Insta} alt="" />
              <Image src={Link} alt="" />
            </div>
          </div>
          <div className="followUs">
            <p className="BoldClass">mettā muse ACCEPTS</p>
            <div className="icon">
              <Image src={Gpay} alt="" />
              <Image src={Red_yellow} alt="" />
              <Image src={Blue_white_pay} alt="" />
              <Image src={Amex} alt="" />
              <Image src={White_pay} alt="" />
              <Image src={Purple_pay} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
