import { Link, useHistory } from 'react-router-dom'
import { useState } from "react"
import axios from 'axios';
import web1 from './gifs/couchgif.gif'
const SellerSignIn =()=>{
    const [companyEmail, setCompanyEmail] = useState('')
    const [password, setPassword] = useState('')
    
 
    const history = useHistory()
    // const saveTokenInLocalStorage=(result)=>{
    //     localStorage.setItem('seller',JSON.stringify(result))
    //   }
    const sellerSignIn = (() => {
       
        if (companyEmail.length === 0) {
            alert('Enter email')
        }
        else if (password.length === 0) {
            alert('enter password')
        }
        else {
            const body = { companyEmail: companyEmail, password: password }

            axios.post( `http://localhost:8080/seller/sellerAuthenticate`, body).then(response => {
                const result = response.data
                console.log(result)
                if (result.companyEmail!='admin@gmail.com') {
                    alert('Seller successfully logged in')
                    // saveTokenInLocalStorage(result)
                    // if(result.role=='seller')
                    //console.log(result)

                    sessionStorage.setItem("seller" , JSON.stringify({sellerId:result.sellerId, companyName: result.companyName, companyAddress: result.companyAddress, companyEmail: result.companyEmail,  companyPhone: result.companyPhone, gstin: result.gstin, password:result.password, role:result.role }))

                    sessionStorage.setItem("isLogin", true)
                 
                    history.push('/sellerDashboard')
                   
                         
                    }       
                else if(result.companyEmail=='admin@gmail.com') {
                    alert('welcome admin')
                    history.push('/admin') 
                    
                }
                else{
                    alert('Error while login')
                }
            })
        }
    })

    return (
        <div className="container">
           <div className="row">
           <div className="customer_border col-lg-5 col-sm-12 border-end border-4 p-5">
            <h1>SignIn As Seller</h1>
          

            <label for="exampleInputEmail1">Comapny Email</label>
            <input
                onChange={(e) => {
                    setCompanyEmail(e.target.value)
                }}
                className="form-control" type="text" required style={{ width: "400px" }} />
                <br/>
            <label for="exampleInputPassword1" class="col-sm-2 control-label">Password</label>
            <input
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                className="form-control" type="text" type="password" required style={{ width: "400px" }}/>
                <br/>
                <button onClick={sellerSignIn}className="btn btn-success">SignIn</button><br/> <Link className="nav-link" to="/sellerSignup">SignUp</Link>
                <Link to="/changepassword">Forgot Password ?</Link>
        </div>
        <div className="col-lg-7" >
                        <img src={web1} alt="web" style={{ paddingLeft: "100px" }}/>
                        <blockquote className="blockquote mb-0" style={{ paddingLeft: "100px" }}>
                            <p className="text-center">
                                {' '}
                               <h2><i>STAY HOME AND SHOP ONLINE.</i></h2> 
                                {' '}
                            </p>
                            {/* <footer className="blockquote-footer">
                         <cite title="Source Title"></cite>
                            </footer> */}
                        </blockquote>
                    </div>
        </div>
        </div>
        )
}
export default SellerSignIn