import './../styles/oneToManyFeatures.css'
function OneToManyFeatures(props){
    return(
        <>
            <div className="oneToManyFeatures-points-main">
                <div className="oneToManyFeatures-icon">
                    <img src="./images/featuretick.png" style={{marginRight:"20px"}}></img>
                </div>
                <div className="tick-content">
                    <div className="tick-content-heading">
                        <h3 class="tick-content-heading-sub">{props.heading}</h3>
                    </div>
                    <div className="tick-content-sub">
                        <p class="tick-content-two">{props.content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OneToManyFeatures;