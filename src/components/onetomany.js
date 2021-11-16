import './../styles/oneToMany.css'
import {Link} from 'react-router-dom'
import OneToManyPoints from './oneToManyPoints';
import onetomanydata from '../data/onetomany/oneToManypoints.json'
import oneToManyFeaturesdata from '../data/onetomany/oneToManyfeaturs.json'
import OneToManyFeatures from './oneToManyFeatures';
import Analysisdata from './../data/onetomany/analysis.json'
import Browsemorewayscontent from './../data/onetomany/browsemany.json';
import Browsemoreways from './browsemoreways';
import {GoPrimitiveDot} from 'react-icons/go'
import { IconContext } from 'react-icons';
function oneToMany(){
    return(
        <>
            <div className="oneToMany-Welcomepart">
                <div className="oneToMany-Welcomepart-contentmain">
                    <div className="oneToMany-Welcomepart-content">
                        <h1 class="oneToMany-heading"> Unlock the power of<br /> Interactive Live Video Shopping</h1>
                    </div>
                    <div className="oneToMany-Welcomepart-content">
                        <h1 class="oneToMany-heading-sub">with One-to-Many</h1>
                    </div>
                    <div className="oneToMany-Welcomepart-content">
                        <Link>
						    <button className="oneToMany-Welcomepart-button">
                                BOOK A DEMO
                            </button>
					    </Link>
                    </div>
                </div>
                <div className="oneToMany-Welcomepart-img">
                    <img src="./images/one-to-many-top-banner-min.png" className="oneToMany-banner"></img>
                </div>
            </div>
            <div className="oneToMany-join">
                <div className="oneToMany-join-sub">
                    <div className="oneToMany-join-heading">
                        <h2 class="oneClickJoin">One-Click Join </h2>
                    </div>
                    <div className="oneToMany-join-content">
                        <p className="oneClickJoin-content">No download required for your audience to join. Whether you’re reaching out to them via social media, push notifications, or WhatsApp — all they have to do is click on a link.</p>
                    </div>
                </div>
            </div>
            <div className="oneToMany-points">
                <div className="oneToMany-points-sub">
                    {
                        onetomanydata.map(element=>{
                            return <OneToManyPoints heading={element.heading} number={element.number} content={element.content} numdisplay="1"/>
                        })
                    }
                </div>
            </div>
            <div className="oneToMany-Features-main">
                <div className="oneToMany-Features-sub">
                    <div className="oneToMany-Features-heading">
                        <h3 className="ourfeatures">OUR FEATURES</h3>
                    </div>
                    <div className="oneToMany-Feature-video-main">
                    <div className="oneToMany-Feature-video">
                        <video 
                            src="./images/Fabelle-Live-Video.mp4"
                            className="feature-video"
                            autoPlay
                            muted
                            loop
                        />
                    </div>
                    <div className="oneToMany-Feature-content">
                        {
                            oneToManyFeaturesdata.map(element=>{
                                return <OneToManyFeatures heading={element.heading} content={element.content}/>
                            })
                        }
                    </div>
                    </div>
                </div>
            </div>
            <div className="Analysis-main">
                <h2 style={{color:"white"}}>Live Customer Analytics</h2>
                <p className="Analysis-content">Simply plug Swirl into your website or app to accelerate your sales.</p>
                <img src="./images/analytics-dashboard-of-swirl-min.png" className="Analysis-img"></img>
                <div className="Analysis-sub">
                    {
                        Analysisdata.map(element=>{
                            return <OneToManyPoints heading={element.heading} content={element.content} numdisplay="0"/>
                        })
                    }
                </div>
            </div>
            <div className="Customerstory-main">
                <div className="Customerstory-sub">
                    <div className="Customerstory-content">
                        <div className="Customerstory-heading">
                            <h1 class="Customerstory-heading-sub" style={{marginBottom:"10px",marginTop:"0px"}}>Customer Success Story</h1>
                        </div>
                        <div className="Customerstory-content-sub">
                            <p>
                                <span style={{fontWeight:400}}>A premium jewelry brand named Zariin increased their sales by </span>
                                <span style={{color: "#8462d0"}}><b>32%</b></span>
                                <span style={{fontWeight: 400}}> and customer engagement by </span>
                                <span style={{color: "#8462d0"}}><b>117%</b></span>
                                <span style={{fontWeight: 400}}> using Swirl Live video shopping in a span of two months with an over </span>
                                <span style={{color: "#8462d0"}}><b>3X</b></span>
                                <span style={{fontWeight: 400}}> increase in Average order value.</span>
                            </p>
                        </div>
                        <div className="Customerstory-icons">
                            <img src="./images/Zariin-Statistics.jpg" className="Customerstory-icons-sub"></img>
                        </div>
                        <button className="Customerstory-button">Read Case Study</button>
                    </div>
                    <div className="Customerstory-img">
                        <img src="./images/zariin-case-study-min.png" className="Zara"></img>
                    </div>
                </div>
            </div>
            <div className="Requestdemo-main">
                <div className="Requestdemo-sub">
                    <h3 class="Requestdemo-heading">Join the league of 100+ brands using Swirl</h3>
                    <button className="Requestdemo-button">REQUEST DEMO</button>
                    <p style={{textAlign:"center",lineHeight:1.6}}>
                        <span style={{fontWeight: 400,color:"white",textAlign:"center",fontSize:"18px"}}>Available for all eCommerce platforms. </span>
                        <span style={{fontWeight: 400,color:"white",textAlign:"center",fontSize:"18px"}}><br /></span>
                        <span style={{fontWeight: 400,color:"white",textAlign:"center",fontSize:"18px"}}>Using Shopify? <span style={{color: "#8364d1",fontSize:"18px"}}><a style={{color: "#F37381",fontSize:"18px",textDecoration:"none"}} href="https://www.goswirl.live/" target="_blank" rel="noopener">Know more here.</a>
                        </span>
                        </span>
                    </p>
                </div> 
            </div>
            <div className="Browsemoreways-main">
                <div className="Browsemoreways-sub">
                    <h1 className="Browsemoreways-heading">Browse more ways to use Swirls</h1>
                    <div className="Browsemoreways-card-main">
                        {
                            Browsemorewayscontent.map(element=>{
                                return <Browsemoreways content={element.content} imgurl={element.imgurl} buttoncontent={element.buttoncontent}/>
                            })
                        }
                    </div>
                    <div className="dots">
                        <IconContext.Provider value={{className:"dot"}}>
                            <GoPrimitiveDot />
                        </IconContext.Provider>
                        <IconContext.Provider value={{className:"dot"}}>
                            <GoPrimitiveDot />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </>
    )
}
export default oneToMany;