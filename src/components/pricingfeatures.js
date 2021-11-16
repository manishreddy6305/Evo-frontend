function Pricingfeatures(props){
    return(
        <>
        <div className="pricing-features-content" style={{backgroundColor:"white"}}>
              <h3 style={{color:"#F37381",fontSize:"25px",textAlign:"center"}}>{props.heading}<br />
                <sup style={{color:"#4c6280",fontSize:"15px"}}>$ </sup>
                <span style={{color:"#4c6280",fontSize:"23px",fontWeight:"700",fontFamily:"Open Sans"}}>{props.price}</span>
                <span style={{color:"#4c6280",fontSize:"18px",fontWeight:"400",fontFamily:"Open Sans"}}> /mon</span>
              </h3>
        </div>
        </>
    )
}
export default Pricingfeatures;