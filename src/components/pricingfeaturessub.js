import './../styles/pricingfeaturessub.css'
import Pricingfeaturestable from './pricingfeaturestable';
function Pricingfeaturessub(props){
    return(
        <>
            <div className="Pricingfeaturessub-main">
                <div className="Pricingfeaturessub-heading">
                    <h3 className="pricingfeature-streaming">{props.heading}</h3>
                </div>
                {
                    props.subheading.map(element=>{
                        return <Pricingfeaturestable heading={element}/>
                    })
                }
            </div>
        </>
    )
}
export default Pricingfeaturessub;