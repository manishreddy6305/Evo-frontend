import "./../styles/pricing.css";
import Monthyear from "./monthyear";
import Pricecard from "./pricecard";
import { useState } from "react";
import Frequentlyaq from "./frequentlyaq";
import faqs from "../data/faqs.json";
import prices from "../data/prices.json";
import {Link} from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import pricefeaturesdata from './../data/pricing/price-features.json'
import Pricingfeatures from "./pricingfeatures";
import Pricingfeaturessub from "./pricingfeaturessub";
import pricefeaturesdatasub from './../data/pricing/features-data/data.json'
const Pricing = () => {
  const [period, setPeriod] = useState("monthly");
  const [periodtwo, setPeriodtwo] = useState("monthly");
  return (
    <>
      <div className="price-heading">
        <h1 className="price-heading-content">Plans & Pricing</h1>
        <h3 className="price-heading-tagline">We do not nickel and dime you for features like transcoding or processing</h3>
      </div>
      <Monthyear {...{ period, setPeriod }} />
      <div>
      <h5 className="price-heading-tagline2">Want to have more control? Make a plan that suits you. <Link style={{textDecoration:"none",color:"#F37381"}}>Add-ons <IconContext.Provider value={{className:"addarrow"}}>
      <BsFillArrowRightCircleFill />
      </IconContext.Provider></Link></h5>
      </div>
      <div className="pricing-main">
        {prices.map((price) => (
          <Pricecard {...price} period={period} />
        ))}
      </div>
      <div className="pricing-add">
        <h2 className="Onestream">OneStream <em className="add-on">Add-ons</em> and Extras</h2>
        <Link name="signin_utm"  class="pricing-add-button">Get Started</Link>
      </div>
      <div className="price-heading">
        <h1 className="price-heading-content">Plan & Compare Plans, Side by Side</h1>
        <h3 className="price-heading-tagline">Easy to switch at any time.</h3>
      </div>
      <div className="pricng-features">
          <div className="pricing-features-sub">
            <div className="pricing-features-content" style={{backgroundColor:"white"}}>
              <h3 style={{fontSize:"25px"}}>Features</h3>
            </div>
            {
              pricefeaturesdata.map((element,index)=>{
                return <Pricingfeatures heading={element.heading} price={element.price} />
              })
            }
          </div>
      </div>
      <div className="pricingfeatures-table">
        {
            pricefeaturesdatasub.map(element=>{
                return <Pricingfeaturessub heading={element.heading} subheading={element.subheading}/>
            })
        }
      </div>
      <div className="faq">
        <div className="faqt-div">
          <h2 className="faqt">Frequently Asked Questions</h2>
        </div>
        <div className="faq-top">
          {faqs.map((faq) => (
            <Frequentlyaq {...faq} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
