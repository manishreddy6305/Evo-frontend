import "./../styles/navbar.css";
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons/lib'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState } from 'react';
function Navbar() {
  const [hb, shb] = useState("No");
  const [hb2, shb2] = useState("No");
  const closehb = () => {
    console.log(3);
    let r = document.getElementById("Hamburger");
    r.classList.toggle("active");
    let r1 = document.getElementsByClassName("nav2-linkmain")[0];
    if (hb === "No") {
      r1.style.display = "initial";
      shb("Yes");
    } else {
      r1.style.display = "none";
      shb("No");
    }
  };
  return (
    <>
      <div className="nav-main">
        <div className="nav-cmain">
          <div className="nav-c">
            <div className="logo">
              <Link to="/">
                <img src="./images/evopng.png" className="image" alt="" />
              </Link>
            </div>
            <Link to="" className="navlink">
              How it works
            </Link>
            <Link to="/oneToMany" className="navlink navlink-dropdownm">
              Products
              <IconContext.Provider value={{ className: "dropdown" }}>
                <RiArrowDropDownLine />
              </IconContext.Provider>
            </Link>
            <Link to="/customer" className="navlink">
              Customers
            </Link>
            <Link to="/startup" className="navlink">
              Evo Startups
            </Link>
            <Link to="/pricing" className="navlink">
              Pricing
            </Link>
            {/* <Link to="" className="navlink">
              Newsroom
            </Link> */}
          </div>
        </div>
      </div>
      <div className="nav2-main">
        <svg
          className="ham hamRotate ham1"
          viewBox="0 0 100 100"
          id="Hamburger"
          width="80"
          onClick={closehb}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
        <div className="logo">
              <Link to="/">
                <img src="./images/evopng.png" className="image" alt="" />
              </Link>
            </div>
      </div>
      <div className="nav2-linkmain">
        <div className="navbar2-navlink">
            <Link to="" className="navlink2">
              How it works
            </Link>
          <div className="nav2dd">
            <Link to="" className="navlink2 ">
              Products
            </Link>
            <IconContext.Provider value={{ className: "dropdown2" }}>
              <RiArrowDropDownLine />
            </IconContext.Provider>
          </div>
            <Link to="/customer" className="navlink2">
              Customers
            </Link>
          <Link to="" className="navlink2">
            Evo startups
          </Link>
          <Link to="/pricing" className="navlink2">
            Pricing
          </Link>
          {/* <Link to="" className="navlink2">
            Newsroom
          </Link> */}
        </div>
      </div>
    </>
  );
}
export default Navbar;
