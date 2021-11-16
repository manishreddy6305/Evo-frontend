import './../styles/startupprogram.css'
import {Link} from 'react-router-dom'
import Problemsolution from './problemsolution';
import business from "./../data/startupprogram/business.json"
import businessimg from './../data/startupprogram/businessimg.json'
import howitwillhelpdata from './../data/startupprogram/who-can-apply.json'
import featuresicon from './../data/startupprogram/featuresimg.json'
import Problemsolutionsub from './problemsolutionsub';
import Whocanapply from './whocanapply';
import faqs from "../data/faqs.json";
import Frequentlyaq from './frequentlyaq';
function Startupprogram(){
    const renderbusiness=()=>{
        let count=0;
        return business.map(element=>{
            count++;
            if(count==1)
            return <Problemsolution heading={element.heading} contentone={element.contentone} contenttwo={element.contenttwo} businessimg={businessimg} counter="1" display="Business-problem" imgurl="./images/business-problem.png" cname="business-problem-sub"/>
            else
            return <Problemsolution heading={element.heading} contentone={element.contentone} contenttwo={element.contenttwo} businessimg={businessimg} counter="2" display="Business-problem-reverse" imgurl="./images/problem.png" cname='business-problem-sub-two'/>
        })
    }
    const renderhowit=()=>{
        let count=0;
        return howitwillhelpdata.map(element=>{
            count++;
            if(count==1)
                return <Whocanapply heading={element.heading} content={element.content} imgurl={element.imgurl} reverse="Who-can-apply-main" reversetwo="Who-can-apply-content"/>
            else
                return <Whocanapply heading={element.heading} content={element.content} imgurl={element.imgurl} reverse="Who-can-apply-main-two" reversetwo="Who-can-apply-content-two"/>
        })
    }
    return(
        <>
            <div className="Welcomepart">
                <div className="Welcomepart-contentmain">
                    <div className="Welcomepart-content">
                        <h1 className="Welcomepart-heading fs-30">Welcome to Evo Live Startup program</h1>
                    </div>
                    <div className="Welcomepart-content">
                        <h3 className="Welcomepart-heading fw-100 fs-28">A new age</h3>
                    </div>
                    <div className="Welcomepart-content">
                        <h3 className="Welcomepart-heading fw-400 fs-28">Live Commerce SaaS</h3>
                    </div>
                    <div className="Welcomepart-content" fw-400>
                        <h4 className="Welcomepart-heading fw-400 ">Get Complimentary Live credits up to INR 25k ($499)</h4>
                    </div>
                    <div className="Welcomepart-content">
                        <Link>
						    <button className="Welcomepart-button">
                                APPLY NOW
                            </button>
					    </Link>
                    </div>
                    
                </div>
                <div className="Welcomepart-img">
                    <img src="./images/startup-banner.png" className="startup-banner"></img>
                </div>
            </div>
            {
                renderbusiness()
            }
            <div className="Features-main">
                <div className="Features">
                    <div className="Features-heading">
                        <h1 style={{fontWeight: 400}}>FEATURES</h1>
                        <p className="Features-content">Our technology helps businesses to create byte-sized short videos and Livestream shopping sessions with built-in CTA’s that allows the end consumers to</p>
                    </div>
                    <div className="Features-icons">
                        {
                            featuresicon.map(element=>{
                                return  <Problemsolutionsub imgurl={element.imgurl} heading={element.heading} cname="business-sub-img-two" imgdimension="greater"/>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="how-will-it-help">
                {
                    renderhowit()
                }
            </div>
            <div className="faq">
                <div className="faqt-div">
                    <h2 className="faqt">Frequently Asked Questions</h2>
                </div>
                <div className="faq-top">
                    {
                        faqs.map((faq) => (
                            <Frequentlyaq {...faq} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Startupprogram;