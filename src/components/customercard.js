import { useEffect, useState } from 'react';
import './../styles/customercard.css'
function Customercard(props) {
    let [reverse,setreverse]=useState("Customercard-sub");
    let [store,setstore]=useState(props.rev)
    let [content,setcontent]=useState("Customercard-content")
    useEffect(()=>{
        reversing();
    },[])
    const reversing=()=>{
        if(store=="true"){
            setreverse("Customercard-sub2")
            setcontent("Customercard-content2")
        }
    }
    return (
        <>
            <div className="Customercard-main">
                <div className={reverse}>
                    <div className="Customercard-img">
                        <img src={props.imgurl} style={{ width: "100%", height: "auto" }}></img>
                    </div>
                    <div className={content}>
                        <div style={{ width: "30%" }}>
                            <img src={props.logo} style={{ width: "100%", height: "auto" }}></img>
                        </div>
                        <div style={{width:"100%"}}>
                            <p>
                                <strong className="customercontent-main">
                                    {props.content}
                                </strong>
                            </p>
                        </div>
                        <button className="customerbutton">{props.buttondata}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Customercard;