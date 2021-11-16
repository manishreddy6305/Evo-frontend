import "./../styles/footer.css";
import { useState } from "react";
import Footersub from "./footersub.js";
import { Link } from "react-router-dom";
import { ImHeart } from "react-icons/im";
import { IconContext } from "react-icons/lib";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillDribbbleSquare,
  AiFillBehanceSquare,
} from "react-icons/ai";
import footerData from "../data/footer.json";

const Footer = () => {
  const [placeholder, setPlaceholder] = useState("Your email Address");
  return (
    <>
      <div className="Footer-main">
        <div className="Footer-container">
          <div className="Footer-row">
            {footerData.map((data) => (
              <Footersub {...data} />
            ))}
            <div className="footersub-main2">
              <h4 className="fsh">Newsletter</h4>
              <p
                style={{ marginTop: "0px", fontSize: "15px", color: "#797979" }}
              >
                You can trust us. we only send promo offers,
              </p>
              <div className="ff">
                <form target="_blank" className="fform">
                  <span>
                    <input
                      name="EMAIL"
                      placeholder={placeholder}
                      required
                      type="email"
                      className="email"
                      onFocus={() => setPlaceholder("")}
                      onBlur={() => setPlaceholder("Your email Address")}
                    />
                  </span>
                  <span>
                    <button className="subscribe">subscribe</button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footercr">
          <p className="copyright">
            Copyright ©2021 All rights reserved | Made with{" "}
            <IconContext.Provider value={{ className: "heart" }}>
              <ImHeart />
            </IconContext.Provider>{" "}
            by{" "}
            <Link to="" className="footerlinksb" style={{ color: "white" }}>
              Evo
            </Link>
          </p>
          <div className="slinks">
            {[
              <AiFillFacebook />,
              <AiFillTwitterSquare />,
              <AiFillDribbbleSquare />,
              <AiFillBehanceSquare />,
            ].map((link) => (
              <Link to="" className="footerlinksb">
                <IconContext.Provider value={{ className: "handles" }}>
                  {link}
                </IconContext.Provider>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
