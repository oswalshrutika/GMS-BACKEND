
import { Link, useHistory } from 'react-router-dom'
import { useState } from "react"
import axios from 'axios';
import web1 from './gifs/couchgif.gif'
import Navbar from '../components/NavBar';
import { validEmail } from '../common/Regex'


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])
    const history = useHistory()
    const [emailErr, setEmailErr] = useState(false);
    const [emailErrMsg, setEmailErrMsg] = useState("");
    const [authErr, setAuthErr] = useState(false);
    const [authErrMsg, setAuthErrMsg] = useState("");

    const saveTokenInLocalStorage = (result) => {
        localStorage.setItem('user', JSON.stringify(result))
    }
    const signIn = (() => {

        // if (email.length === 0) {
        //     setEmailErr(true);
        //     setEmailErrMsg("Please Enter email")
        // }
        // else if (!validEmail.test(email)) {
        //     setEmailErr(true);
        //     setEmailErrMsg("Please Enter a valid email")
        // }
        // else if (password.length === 0) {
        //     alert('enter password')
        // }

        if (email.length === 0) {
                        alert('Enter email')
                    }
                    else if (password.length === 0) {
                        alert('enter password')
                    }

        else {
            const body = { email: email, password: password }

            axios.post(`http://localhost:8080/user/authenticate`, body).then(response => {
                const result = response.data
                saveTokenInLocalStorage(result)
                sessionStorage.setItem("isLoggedin", true)
                history.push('/home')
        })
            // }).catch(err => {
            //     setAuthErr(true)
            //     setAuthErrMsg("email or password is incorrect..")
            // })
        }

    })

    return (
        <div>
            <Navbar />

            <div className="signin">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="box">




                                <h1>SignIn</h1>


                                <label for="exampleInputEmail1" class="col-sm-2 control-label">Email</label>
                                <input
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    className="form-control" type="text" required style={{ width: "400px" }} />
                                {emailErr && <p className="text-danger">{emailErrMsg}</p>}

                                <br />
                                <label for="exampleInputPassword1" class="col-sm-2 control-label">Password</label>
                                <input
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    className="form-control" type="text" type="password" required style={{ width: "400px" }} />
                                {authErr && <p className="text-danger">{authErrMsg}</p>}

                                <br />
                                <button onClick={signIn} className="btn btn-success">SignIn</button>
                                {'  '}
                {'  '}
                {/* <button className="btn btn-success">SignIn AS Seller</button><br/>  */}
                <a href="/sellerSignin" className="btn btn-success">SignIn AS Seller</a>
                                
                                <br /> <Link className="nav-link" to="/signup">SignUp</Link>
                                <Link to="/changepassword">Forgot Password ?</Link>

                            </div>

                        </div>          <div className="col-lg-7" >
                            <img src={web1} alt="web" style={{ paddingLeft: "950px" }} />
                            {/* <p className="text-center">
                                    {' '}
                                    <h2><i>STAY HOME AND SHOP ONLINE.</i></h2>
                                    {' '}
                                </p> */}
                            <blockquote className="" style={{ paddingLeft: "150px" }}>
                                
                                {/* <footer className="blockquote-footer">
                         <cite title="Source Title"></cite>
                            </footer> */}
                            </blockquote>

                        </div>
                          </div> 
                             </div>  
                               </div>  
                                 </div>





    )
}
export default SignIn










// import { Link, useHistory } from 'react-router-dom'
// import { useState } from "react"
// import axios from 'axios';
// import web1 from './gifs/couchgif.gif'
// import Navbar from './NavBar';
// import SellerSignIn from './SellerSignIn';
// const SignIn =()=>{
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const[users ,setUsers]=useState([])

//     const history = useHistory()
//     const saveTokenInLocalStorage=(result)=>{
//         localStorage.setItem('user',JSON.stringify(result))
//       }
//     const signIn = (() => {
       
//         if (email.length === 0) {
//             alert('Enter email')
//         }
//         else if (password.length === 0) {
//             alert('enter password')
//         }
//         else {
//             const body = { email: email, password: password }

//             axios.post( `http://localhost:8080/user/authenticate`, body).then(response => {
//                 const result = response.data
//                 if (result) {
//                     alert('User successfully logged in')
//                    saveTokenInLocalStorage(result)
//                    sessionStorage.setItem("isLoggedin", true)
//                     if(result.role=='CUSTOMER')
//                             history.push('/home')
//                 }                 
//                 else {
//                     alert('Error while user login')
//                 }
//             })
//         }
//     })

//     return (
//         <div>
//             <Navbar/>
//         <div className="container">
//            <div className="row">
//            <div className="customer_border col-lg-5 col-sm-12 border-end border-4 p-5">
//             <h1>SignIn</h1>
          

//             <label for="exampleInputEmail1" class="col-sm-2 control-label">Email</label>
//             <input
//                 onChange={(e) => {
//                     setEmail(e.target.value)
//                 }}
//                 className="form-control" type="text" required style={{ width: "400px" }} />
//                 <br/>
//             <label for="exampleInputPassword1" class="col-sm-2 control-label">Password</label>
//             <input
//                 onChange={(e) => {
//                     setPassword(e.target.value)
//                 }}
//                 className="form-control" type="text" type="password" required style={{ width: "400px" }}/>
//                 <br/>
//                 <button onClick={signIn}className="btn btn-success">SignIn</button> {'  '}
//                 {'  '}
//                 {/* <button className="btn btn-success">SignIn AS Seller</button><br/>  */}
//                 <a href="/sellerSignin" className="btn btn-success">SignIn AS Seller</a>
//                 <Link className="nav-link" to="/signup">SignUp</Link>
//         </div>
//         <div className="col-lg-7" >
//                         <img src={web1} alt="web" style={{ paddingLeft: "100px" }}/>
//                         <blockquote className="blockquote mb-0" style={{ paddingLeft: "100px" }}>
//                             <p className="text-center">
//                                 {' '}
//                                <h2><i>STAY HOME AND SHOP ONLINE.</i></h2> 
//                                 {' '}
//                             </p>
//                             {/* <footer className="blockquote-footer">
//                          <cite title="Source Title"></cite>
//                             </footer> */}
//                         </blockquote>
//                     </div>
//         </div>
//         </div>
//         </div>
//         )
// }
// export default SignIn