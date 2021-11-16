import './../styles/onetomanypoints.css'
function OneToManyPoints(props){
    const numdis=()=>{
        if(props.numdisplay=="1")
        return <div className="one-number">
                    <span className="one-points-data-num">{props.number}</span>
                </div>
        else
        return 
    }
    return(
        <>
            <div className="one-points-data">
                {
                    numdis()
                }
                <div>
                    <h3 className="one-points-data-heading">{props.heading}</h3>
                </div>
                <div>
                    <p style={{color: "#fff",textAlign:"center",fontSize:"18px",margin:"0px"}}>{props.content}</p>
                </div>
            </div>
        </>
    )
}
export default OneToManyPoints;