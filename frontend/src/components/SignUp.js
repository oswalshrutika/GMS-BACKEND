import { useState } from 'react';
import { url } from '../common/constants';
import axios from 'axios';
import {useHistory,useLocation } from 'react-router-dom'
import web1 from './gifs/basket2.gif'
import Navbar from '../components/NavBar';
import { validEmail, validPassword, validPhone, validPincode } from '../common/Regex'



const SignUp = () => {

  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [address, setAddress] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [role, setRole] = useState('')
  const history = useHistory()
  const [invalidErr, setInvalidErr] = useState(false)
  const [invalidErrMsg, setInvalidErrMsg] = useState("")

  const [addressErr, setAddressErr] = useState(false)
  const [addressErrMsg, setAddressErrMsg] = useState('')
  const [roleErr, setRoleErr] = useState(false)
  const [roleErrMsg, setRoleErrMsg] = useState('')
  const [nameErr, setNameErr] = useState(false);
  const [nameErrMsg, setNameErrMsg] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [pwdError, setPwdError] = useState(false);
  const [pwdErrorMsg, setPwdErrorMsg] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [phoneErrMsg, setPhoneErrMsg] = useState("");
  const [pinCodeErr, setPinCodeErr] = useState(false);
  const [pinCodeErrMsg, setPinCodeErrMsg] = useState("");


  // function handleSubmit(e) {
  //   e.preventDefault();
  //   //console.log(email, password);
  //   // clearing the values
  //   // setEmail("");
  //   // setPassword("");

  //   console.log(this.email.value);

  //   // clearing the values
  //   this.email.value = "";

  // };



  const signup = (() => {
    setNameErr(false)
    setEmailErr(false)
    setPwdError(false)
    setPhoneErr(false)
    setPinCodeErr(false)
    setRoleErr(false)
    setAddressErr(false)

    if (name.length == 0) {
      setNameErr(true)
      setNameErrMsg("please enter name")
    }
    else if (email.length == 0){
      setEmailErr(true);
      setEmailErrMsg("please enter email")
    }
    else if (!validEmail.test(email)) {
      setEmailErr(true);
      setEmailErrMsg("please enter a valid email")
    }
    else if (password.length == 0){
      setPwdError(true);
      setPwdErrorMsg("please enter password")
    }  
    else if (!validPassword.test(password)) {
      setPwdError(true);
      setPwdErrorMsg("Your password is not strong enough")
    }
    else if (phoneNo.length == 0){
      setPhoneErr(true);
      setPhoneErrMsg("please enter phone number")
    }
    else if (!validPhone.test(phoneNo)) {
      setPhoneErr(true);
      setPhoneErrMsg("please enter a valid phone number")
    }
    else if (address.length == 0){
      setAddressErr(true)
      setAddressErrMsg("Please Enter Address")
    }
    else if (pinCode.length == 0){
      setPinCodeErr(true);
      setPinCodeErrMsg("please enter pincode")
    }
     
    else if (!validPincode.test(pinCode)) {
      setPinCodeErr(true);
      setPinCodeErrMsg("please enter a valid pincode")
    }
    else if (role.length == 0){
      setRoleErr(true)
      setRoleErrMsg("please select a role")
    } 
    else {
      const body = { id: id, name: name, email: email, password: password, phoneNo: phoneNo, address: address, pinCode: pinCode, role: role }
      axios.post(url + `/admin/register`, body).then(response => {
        const result = response.data;
        if (result) {
          alert('succcess')
          history.push('/signin-signup')
        }
        else {
          alert('error')
        }
      // }).catch(err =>{
      //   setInvalidErr(true)
      //   setInvalidErrMsg("entered input is not a valid input")
      })
    }

   

  })



  return (
  <div>
    <Navbar></Navbar>

    <div div className="container-fluid">
      <div className="row">
        <div className="customer_border col-lg-5 col-sm-12 border-end border-4 p-5">
        <div class="card">
                  <div class="boxsignup">
          <h1>SignUp</h1>
           <input
            onChange={(e) => {
              setId(e.target.value)
            }}
            className="form-control" type="hidden" required style={{ width: "400px" }}/>

          Name: <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            className="form-control" type="text" required style={{ width: "400px" }}/>
            {nameErr && <p className="text-danger">{nameErrMsg}</p>}


          Email: <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="form-control" type="text" required style={{ width: "400px" }}/>
           {emailErr && <p className="text-danger">{emailErrMsg}</p>}

          password: <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="form-control" type="text" required style={{ width: "400px" }}/>
            {pwdError && <p className="text-danger">{pwdErrorMsg}</p>}

          Phone Number: <input
            onChange={(e) => {
              setPhoneNo(e.target.value)
            }}
            className="form-control" type="text" required style={{ width: "400px" }}/>
           {phoneErr && <p className="text-danger">{phoneErrMsg}</p>}



          PinCode: <input
            onChange={(e) => {
              setPinCode(e.target.value)
            }}
            className="form-control" type="text" required style={{ width: "400px" }}/>
             {pinCodeErr && <p className="text-danger">{pinCodeErrMsg}</p>}



          Address: <input
            onChange={(e) => {
              setAddress(e.target.value)
            }}
            className="form-control" type="text" required style={{ width: "400px" }}/>
            {addressErr && <p className="text-danger">{addressErrMsg}</p>}

<br/>

          Role: <input
            onChange={(e) => {
              setRole(e.target.value)
            }}
            className="form-control" type="hidden" required style={{ width: "400px" }}/>

          <select

            onChange={(e) => {
              setRole(e.target.value)
            }}
          >
            <option value="CUSTOMER">CUSTOMER</option>
            {/* <option value="ADMIN">ADMIN</option> */}
            <option value="SELLER">SELLER</option>
          </select>
          {roleErr && <p className="text-danger">{roleErrMsg}</p>}

          <br />
          
          <br />
          {invalidErr && <p className="text-danger">{invalidErrMsg}</p>}

          <button onClick={signup} className="btn btn-success">Signup</button>
          
          {/* <button onClick={handleSubmit} className="btn btn-success">RESET</button> 
          <button onClick={resetInputField} className="btn btn-success">RESET</button> */}
 </div> </div> </div>
 <div className="col-lg-7" >
                        <img src={web1} alt="web" style={{ paddingLeft: "200px" }}/>
                        <br/>
                        <blockquote className="blockquote mb-0" style={{ paddingLeft: "100px" }}>
                            <p className="text-center" >
                                {' '}
                                    <h2><i> Whoever said money can't buy happiness simply didn't know where to go shopping.</i></h2> {' '}
                            </p>
                    
                        </blockquote>
                    </div>
   
 
       
        </div>
        </div>
        </div>
      
  )
}


export default SignUp







// import { useState } from 'react';
// import { url } from '../common/constants';
// import axios from 'axios';
// import {useHistory,useLocation } from 'react-router-dom'
// import web1 from './gifs/basket.gif'


// const SignUp = () => {

//   const [id, setId] = useState(0)
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [phoneNo, setPhoneNo] = useState('')
//   const [address, setAddress] = useState('')
//   const [pinCode, setPinCode] = useState('')
//   const [role, setRole] = useState('')
//   const history = useHistory()

//   // function handleSubmit(e) {
//   //   e.preventDefault();
//   //   //console.log(email, password);
//   //   // clearing the values
//   //   // setEmail("");
//   //   // setPassword("");

//   //   console.log(this.email.value);

//   //   // clearing the values
//   //   this.email.value = "";

//   // };



//   const signup = (() => {
//     if (name.length == 0)
//       alert('enter name')
//     else if (email.length == 0)
//       alert('enter email')
//     else if (password.length == 0)
//       alert('enter password')
//     else if (phoneNo.length == 0)
//       alert('enter phone number')
//     else if (address.length == 0)
//       alert('enter address')
//     else if (pinCode.length == 0)
//       alert('enter pinCode')
//     else if (role.length == 0)
//       alert('enter role')

//     else {


//       const body = { id: id, name: name, email: email, password: password, phoneNo: phoneNo, address: address, pinCode: pinCode, role: role }



//       axios.post(url + `/admin/register`, body).then(response => {
//         const result = response.data;
//         if (result){
//           alert('succcess')
//           history.push('/home')
//         }
//         else {
//           alert('error')
//         }
//       })
//     }


//   })



//   return (

//     <div div className="container-fluid">
//       <div className="row">
//         <div className="customer_border col-lg-5 col-sm-12 border-end border-4 p-5">
//           <h1>SignUp</h1>
//            <input
//             onChange={(e) => {
//               setId(e.target.value)
//             }}
//             className="form-control" type="hidden" required style={{ width: "400px" }}/>

//           Name: <input
//             onChange={(e) => {
//               setName(e.target.value)
//             }}
//             className="form-control" type="text" required style={{ width: "400px" }}/>

//           Email: <input
//             onChange={(e) => {
//               setEmail(e.target.value)
//             }}
//             className="form-control" type="text" required style={{ width: "400px" }}/>

//           password: <input
//             onChange={(e) => {
//               setPassword(e.target.value)
//             }}
//             className="form-control" type="text" required style={{ width: "400px" }}/>

//           Phone Number: <input
//             onChange={(e) => {
//               setPhoneNo(e.target.value)
//             }}
//             className="form-control" type="text" required style={{ width: "400px" }}/>

//           PinCode: <input
//             onChange={(e) => {
//               setPinCode(e.target.value)
//             }}
//             className="form-control" type="text" required style={{ width: "400px" }}/>

//           Address: <input
//             onChange={(e) => {
//               setAddress(e.target.value)
//             }}
//             className="form-control" type="text" required style={{ width: "400px" }}/>
// <br/>

//           Role: <input
//             onChange={(e) => {
//               setRole(e.target.value)
//             }}
//             className="form-control" type="hidden" required style={{ width: "400px" }}/>

//           <select

//             onChange={(e) => {
//               setRole(e.target.value)
//             }}
//           >
//             <option value="CUSTOMER">CUSTOMER</option>
//             <option value="ADMIN">ADMIN</option>
//             <option value="SELLER">SELLER</option>
//           </select>

//           <br />
          
//           <br />
//           <button onClick={signup} className="btn btn-success">Signup</button>
//           {/* <button onClick={handleSubmit} className="btn btn-success">RESET</button> 
//           <button onClick={resetInputField} className="btn btn-success">RESET</button> */}
//  </div>
//  <div className="col-lg-7" >
//                         <img src={web1} alt="web" style={{ paddingLeft: "200px" }}/>
//                         <br/>
//                         <blockquote className="blockquote mb-0" style={{ paddingLeft: "100px" }}>
//                             <p className="text-center" >
//                                 {' '}
//                                     <h2><i> Whoever said money can't buy happiness simply didn't know where to go shopping.</i></h2> {' '}
//                             </p>
                    
//                         </blockquote>
//                     </div>
   
 
       
//         </div>
//         </div>
      
      
//   )
// }


// export default SignUp