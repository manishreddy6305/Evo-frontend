import "./../styles/pricecard.css";
import Pricingsub from "./pricingsub";
const Pricecard = ({ imgurl, heading, button, price, period,strongpoints, points }) => {
  return (
    <>
      {console.log(strongpoints)}
      <div className="pricecard-main">
        <div>
          <div className="pricecard-img">
            <img src={imgurl} className="priceimg" alt="" />
          </div>
          <div className="pricecard-header">
            <div className="price-free">
              <h2 className="free" style={{color:"#4c627e"}}>{heading}</h2>
            </div>
          </div>
          <div className="cost">
            <span className="currency" style={{color:"#F37381"}}>$</span>
            <span className="value" style={{color:"#4c627e"}}>{period === "monthly" ? price : 10.2 * price}</span>
            <span className="duration" style={{color:"#F37381"}}>{period === "monthly" ? "mo" : "yr"}</span>
          </div>
        </div>
        <div>
          <div className="button-main">
            <button className="pricecard-button">{button}</button>
          </div>
        </div>
        <Pricingsub points={points} strongpoints={strongpoints}/>
      </div>
    </>
  );
};
export default Pricecard;
