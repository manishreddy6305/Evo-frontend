import './../styles/partners.css'
import Partnersimg from './partnersimg';
import partnersdataimg from './../data/partners/partnersimg.json'
function Partners(props){
     return(
         <>
             <div className="Partners-main">
                  <div className="Partners-sub">
                        <div className="Partners-heading">
                          <h2>{props.heading}</h2>
                        </div>
                        <div className="Partners-img">
                          {
                              partnersdataimg.map(element=>{
                                  return <Partnersimg imgurl={element.imgurl}/>
                              })
                          }
                        </div>
                  </div>
             </div>
         </>
     )
}
export default Partners;
