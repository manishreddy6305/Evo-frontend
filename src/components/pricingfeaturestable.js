import './../styles/pricingfeaturestable.css'
function Pricingfeaturestable(props){
    return(
        <>
            <div className="pricingfeaturestable-sub">
                <div className="pricingfeaturestable-sub-heading">
                    {props.heading[0]}
                </div>
                <div className="pricingfeaturestable-sub-data-main">
                <div className="pricingfeaturestable-sub-data">
                    {
                        props.heading[1][0]=="." ? <img style={{height:"30px",width:"30px"}} src={props.heading[1]} /> : props.heading[1] 
                    }
                </div>
                <div className="pricingfeaturestable-sub-data">
                    {
                        props.heading[2][0]=="." ? <img style={{height:"30px",width:"30px"}} src={props.heading[2]} /> : props.heading[2] 
                    }
                </div>
                <div className="pricingfeaturestable-sub-data">
                    {
                        props.heading[3][0]=="." ? <img style={{height:"30px",width:"30px"}} src={props.heading[3]} /> : props.heading[3] 
                    }
                </div>
                <div className="pricingfeaturestable-sub-data">
                    {
                        props.heading[4][0]=="." ? <img style={{height:"30px",width:"30px"}} src={props.heading[4]} /> : props.heading[4]
                    }
                </div>
                </div>
            </div>
        </>
    )
}
export default Pricingfeaturestable;