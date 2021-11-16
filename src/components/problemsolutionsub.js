import './../styles/Problemsolutionsub.css'
function Problemsolutionsub(props){
    return(
        <>
            <div className={props.cname}>
                <img src={props.imgurl} className={props.imgdimension}></img>
                <h4 className="business-sub-heading">{props.heading}</h4>
            </div>
        </>
    )
}
export default Problemsolutionsub;