import { Link } from 'react-router-dom';
import Contactus from './contactus';
import Partners from './partners';
import "./../styles/home.css";
import { Feature } from "./feature";
import { greatFeatures, features } from "../data/features.json";
import steps from "../data/steps.json";
import How from "./how";

function Home() {
  const { media, heading, points } = greatFeatures;
  return (
    <>
      <div className="video-main">
        <video
          src="./images/MyVideo.mp4"
          className="video"
          autoPlay
          muted
          loop
        />
        <div className="video-content">
          <h1 className="vc-go">Go Live with Evo</h1>
          <h2 className="vc-l">LIVE STREAMING PLATFORM</h2>
          <Link>
            <button className="gs">Get started</button>
          </Link>
        </div>
      </div>
      <div className="tagline">
        <div className="th">
          <h1 className="thc">
            Level up your live video with reliable, high-quality streaming for
            your viewers everywhere.
          </h1>
        </div>
      </div>
      <div className="greatfeature-main">
        <div className="gfsub front">
          <img src={media.url} className="featureimg" alt="" />
          <h2>{heading}</h2>
        </div>
        <div className="points-sub">
          {points.map((point) => (
            <div className="points-sub2">
              <img src="./images/check.png" className="pointicon" alt="" />
              <p className="points-f">{point}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="how">
        <div className="how-sub">
          {steps.map((step) => (
            <How {...step} />
          ))}
        </div>
        <Link to="">
          <button className="how-b">GET STARTED</button>
        </Link>
      </div>
      {features.map((feature, i) => (
        <Feature key={i} index={i} {...feature} />
      ))}
      <div className="Technologypartners">
       <h2 style={{textAlign:'center'}}>TECHNOLOGY PARTNERS</h2>
       <Partners heading="E-COMMERCE AND TECH STACK INTEGRATIONS"/>
       <Partners heading="MARKETING AND CRM INTEGRATIONS"/>
      </div>
      <Contactus />
    </>
  );
}
export default Home;
