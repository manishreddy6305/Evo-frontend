import './../styles/customer.css'
import customercarddata from './../data/customer/cartdata.json'
import Customercard from './customercard';
function Customer() {
    return (
        <>
            <div className="customer-welcomepart">
                <div className="customer-welcomepart-content">
                    <h1 className="customer-welcomepart-content-sub">Explore our case studies to see what <span style={{ color: "#F37381" }}>Evo Live Shopping</span> has done for partner brands.</h1>
                </div>
            </div>
            <div>
                {
                    customercarddata.map(element => {
                        return <Customercard logo={element.logo} imgurl={element.imgurl} content={element.content} buttondata={element.buttondata} rev={element.rev} />
                    })
                }
            </div>
            <div className="customer-slider">
                <div className="customer-slider-sub">
                    <div className="customer-slider-img">
                        <img src="./images/customer-slider1.webp" style={{width:"100%",height:"auto"}}></img>
                    </div>
                    <div className="customer-slider-img">
                        <img src="./images/customer-slider2.webp" style={{width:"100%",height:"auto"}}></img>
                    </div>
                </div>
            </div>
            <div className="customer-tagline">
                <h2 class="tagline-cus">Learn how  <span style={{ color: "#F37381" }}>Evo Live </span> can increase your sales significantly</h2>
            </div>
            <div className="customer-requestdemo">
                <button className="customer-requestbutton">Request Demo</button>
            </div>
        </>
    )
}
export default Customer;