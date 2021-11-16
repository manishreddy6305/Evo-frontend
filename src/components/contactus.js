import './../styles/contactus.css'
import { IconContext } from 'react-icons/lib'
import {TiLocationOutline} from 'react-icons/ti'
import {IoCall} from 'react-icons/io5'
import {GrMail} from 'react-icons/gr'
import axios from 'axios'
import { useState } from 'react'
function Contactus(){
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [phone,setphone]=useState("")
    const [company,setcompany]=useState("")
    const [message,setmessage]=useState("")
    const sendmail=()=>{
        axios.post('http://localhost:3005/sendmail', {
            formname: name,
            formemail: email,
            formphone: phone,
            formcompany: company,
            formmessage: message
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
    <>
       <div className="Contactform-maindiv">
            <div className="Contactform-subdiv">
                <div className="form-details">
                    <h3>Send us a message</h3>
                    <form className="form" onSubmit={sendmail}>
                        <div className="row">
                            <div className="row-content">
                                <label for="" className="col-form-label">Name *</label>
                                <input type="text" className="form-control" value={name} name="name" id="name" placeholder="Your name" onChange={e=>{
                                    setname(e.target.value)
                                }}/>
                            </div>
                            <div class="row-content">
                                <label for="" className="col-form-label">Email *</label>
                                <input type="text" className="form-control" name="email" id="email" value={email} placeholder="Your email" onChange={e=>{
                                    setemail(e.target.value)
                                }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row-content">
                                <label for="" className="col-form-label">Phone</label>
                                <input type="text" className="form-control" name="phone" id="name" value={phone} placeholder="Phone #" onChange={e=>{
                                    setphone(e.target.value)
                                }}/>
                            </div>
                            <div class="row-content">
                                <label for="" className="col-form-label">Company</label>
                                <input type="text" className="form-control" name="company" id="email" value={company} placeholder="Company name" onChange={e=>{
                                    setcompany(e.target.value)
                                }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-form-label-message">
                                <label for="" className="col-form-label">Message</label>
                                <textarea class="form-control" name="message" id="message" cols="30" rows="4" value={message} placeholder="Write your message" onChange={e=>{
                                    setmessage(e.target.value)
                                }}></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-form-label-message mgb-0">
                                <input type="submit" value="Send Message" className="contact-submit-button"/>
                            </div>
                        </div>
                    </form>
                </div>    
                <div className="contact-information">
                    <div class="contact-info h-100">
                        <h3  className="contact-info">Contact Information</h3>
                        <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, magnam!</p>
                        <ul class="list-unstyled">
                            <li class="d-flex mb-25">
                                <IconContext.Provider value={{className:"contact-icons"}}>
                                    <TiLocationOutline />
                                </IconContext.Provider>
                                <span class="contact-text">9757 Aspen Lane South Richmond Hill, NY 11419</span>
                            </li>
                            <li class="d-flex mb-25">
                                <IconContext.Provider value={{className:"contact-icons"}}>
                                    <IoCall />
                                </IconContext.Provider>
                                <span class="contact-text">+1 (291) 939 9321</span>
                            </li>
                            <li class="d-flex mb-25">
                                <IconContext.Provider value={{className:"contact-icons"}}>
                                    <GrMail />
                                </IconContext.Provider>
                                <span class="contact-text">info@mywebsite.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
       </div>
    </>
    )
}
export default Contactus;
