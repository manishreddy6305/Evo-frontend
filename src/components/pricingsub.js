import { IconContext } from 'react-icons/lib'
import './../styles/pricingsub.css'
import {BsQuestionCircleFill} from 'react-icons/bs'
function Pricingsub(props){
    return(
        <>
            {console.log(props.points)}
            <div className="Pricingsub-main">
                <ul className="points-list">
                    {
                        props.points.map((element,index)=>{
                            if(index!=17){
                                if(index!=3){
                                    return <li className="points-list-sub">
                                                <strong>{props.strongpoints[index]}</strong>{element} 
                                                <IconContext.Provider value={{ className: "questionmark"}}>
                                                <BsQuestionCircleFill />
                                                </IconContext.Provider>
                                            </li>
                                }
                                else{
                                    return <li className="points-list-sub2">
                                                <strong>{props.strongpoints[index]}</strong>{element} 
                                                <IconContext.Provider value={{ className: "questionmark"}}>
                                                <BsQuestionCircleFill />
                                                </IconContext.Provider>
                                                <span class="tooltiptext"></span>
                                            </li>
                                }
                            }
                            else{
                            return <li className="points-list-sub">
                                        <img src={element} className="price-logos"></img>
                                        <IconContext.Provider value={{ className: "questionmark2"}}>
                                        <BsQuestionCircleFill />
                                        </IconContext.Provider>
                                        <span class="tooltiptext"></span>
                                    </li>
                            }
                        })
                    }    
                </ul>
            </div>
        </>
    )
}
export default Pricingsub;