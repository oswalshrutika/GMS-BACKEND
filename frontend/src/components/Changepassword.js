import {useState} from 'react'
import axios from 'axios'
import {useHistory,useLocation } from 'react-router-dom'
const url = 'http://localhost:8080'

//{{URL}}/user/update/5
//{{URL}}/admin/customers
//admin/customers/1
const Changepassword=()=>{
    const[ password ,setnewPassword]=useState('')
    const[ id ,setid]=useState('')
    const[users ,setUsers]=useState({})
    const history = useHistory()
   
    const user= JSON.parse(localStorage.getItem('user'))  
    
    // const location = useLocation()
    // const user = location.state.user
    const ChangePassword=(id)=>{
        axios.put(`http://localhost:8080/user/update/${id}`,{'password':password}).then((response)=>{
          alert("success")
          history.push('/signin-signup')
        })
}
return (
      <div className="container">
        <input
                onChange={(e) => {
                    setid(e.target.value)
                }}
                className="form-control" type="hidden" />
         {/* <button className="btn btn-success"onClick={getAllfromdb}>Show User</button> */}
         
           {
          <h1>Email: {user.email}</h1> 
         
         }
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter new Password.." onChange={(e)=>{
            setnewPassword(e.target.value)
            }}/>
            <button type="submit" class="btn btn-primary" onClick={()=>{ChangePassword(user.id)}}>Submit</button>
         </div>
         
      
);
}

export default Changepassword