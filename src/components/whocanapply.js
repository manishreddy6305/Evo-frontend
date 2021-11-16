import './../styles/whocanapply.css'
function Whocanapply(props){
    return(
        <>
            <div className={props.reverse}>
                <div className={props.reversetwo}>
                    <h1>{props.heading}</h1>
                    <p className="who-can-apply-content-sub">{props.content}</p>
                </div>
                <div className="who-can-apply-img" style={{width:"302px",height:"600px"}}>
                    <img src={props.imgurl} style={{width:"100%",height:"auto"}}></img>
                </div>
            </div>
        </>
    )
}
export default Whocanapply;