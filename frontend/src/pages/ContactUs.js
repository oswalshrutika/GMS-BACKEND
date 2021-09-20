import { useState } from 'react';
import axios from 'axios';
import {  useHistory } from 'react-router-dom'
import Navbar from '../components/NavBar';
const ContactUs = () => {
const [userName, setUserName] = useState('')
const [userEmail, setUserEmail] = useState('')
const [userMessage, setUserMessage] = useState('')
const history = useHistory()
    const Send = (() => {
     
        if (userName.length === 0) {
            alert('Enter  UserName')
        }
        else if (userEmail.length === 0) {
            alert('enter Email')
        }
     
        else {
            const body = {
                userName: userName,
                userEmail: userEmail,
            userMessage: userMessage}

            axios.post( `http://localhost:8080/contactUs/add`, body).then(response => {
                const result = response.data
                if (result.status==='success') {
                    alert(' successfully send Message')
                    history.push('/home')
                }
                else {
                  alert('Error while user ')
                
                }
            })
        }
    })

    return (
        <div>
      
        <Navbar/>
    
<div class="about">
           
            <h1 >Contact Us Page</h1>
<h5>India's most convenient online grocery channel</h5>
<h5>We offer you convenience of shopping everything that you need for your home - be it fresh fruits & vegetables, rice, dals, oil, packaged food, dairy item, frozen, pet food, household cleaning items & personal care products from a single virtual store.

.</h5>


        </div>
     
        <div className="divss">
        <br />
        <br />
           
      
<div className="container">
<div className="content">
  <div className="left-side">
      <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">Hinjewadi,Pune</div>
          <div className="text-two">pune</div>
      </div>
      <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+008380090833</div>
          <div className="text-two">+008380083832</div>
      </div>
      <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">mygrocery@gmail.com</div>
          <div className="text-two">ourgrocery@gmail.com</div>
      </div>
                    </div>
                   
                    <div className="right-side">
                    <br />
            <br />
      <div className="topic-text">Send us a message</div>
      <div className="topic-text">Share your queries and valuable feedback below</div>
      {/* <p>If you have any work from me or any types of quries related to my portal, you can send me message from here. It's my pleasure to help you.</p> */}
     
          <div className="input-box">
              <input type="text" placeholder="Enter your name" value={userName} onChange={ (e)=>setUserName(e.target.value) } required="required"/>
          </div>
          <div className="input-box">
              <input type="text" placeholder="Enter your email" value={userEmail} onChange={ (e)=>setUserEmail(e.target.value) } required="required"/>
          </div>
          <div className="input-box message-box">
          <input type="text" placeholder="Enter your message"value={userMessage} onChange={ (e)=>setUserMessage(e.target.value) } required="required"/>
                            </div>
                            <br />     <br />
            
                           
          <div className="buttons">
              <center>
              <button type="submit"  onClick={Send} className="btn btn-success">Send</button>
                                </center>
                                
            <br/>
            
                </div>
          
                    </div>
                    <br />
         <br />
     <br />
                </div>
             
            </div>
            
            
          
      
            <br />
         <br />
             
        </div>
        
</div>
    );
}

export default ContactUs