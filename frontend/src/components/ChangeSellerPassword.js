import {useState} from 'react'
import axios from 'axios'
import {useHistory,useLocation } from 'react-router-dom'
const url = 'http://localhost:8080'


const ChangeSellerPassword=()=>{
    const[ password ,setnewPassword]=useState('')
    const[ sellerId ,setSellerId]=useState('')

    const history = useHistory()
   
    const[seller,setSeller]=useState(JSON.parse(sessionStorage.getItem('seller')))
   
    
    
    // const location = useLocation()
    // const user = location.state.user
    const ChangePassword=(sellerId)=>{
        axios.put(`http://localhost:8080/seller/update/${sellerId}`,{'password':password}).then((response)=>{
          alert("success")
          history.push('/home')
        })
}
return (
      <div className="container">
        <input
                onChange={(e) => {
                    setSellerId(e.target.value)
                }}
                className="form-control" type="hidden" />
       
         
       
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter new Password.." onChange={(e)=>{
            setnewPassword(e.target.value)
            }}/>
            <button type="submit" class="btn btn-primary" onClick={()=>{ChangePassword(seller.sellerId)}}>Change Password</button>
         </div>
         
      
);
}

export default ChangeSellerPassword