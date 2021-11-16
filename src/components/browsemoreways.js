import './../styles/browsemoreways.css' 
function Browsemoreways(props){
    return(
        <>
            <div className="Browsemoreways-card">
                    <div className="Browsemoreways-card-img">
                        <img src={props.imgurl} className="Browsemoreways-img"></img>
                    </div>
                    <div className="Browsemoreways-card-content-main">
                        <div className="Browsemoreways-card-content">
                            <p style={{marginTop:"0px",color:"#051145",fontFamily:"Poppins"}}>{props.content}</p>
                        </div>
                        <button className="Browsemoreways-card-button">{props.buttoncontent}</button>
                    </div>
            </div>
        </>
    )
}
export default Browsemoreways;