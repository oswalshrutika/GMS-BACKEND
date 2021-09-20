import {useState} from 'react'
import {useHistory,useLocation } from 'react-router-dom'
import axios from 'axios'
const url = 'http://localhost:8080'
//{{URL}}/user/update/5
//{{URL}}/admin/customers
//admin/customers/1
const EditProfile=()=>{
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[pinCode,setPincode]=useState('')
    const[address,setAddress]=useState('')
    const[phoneNo,setPhoneno]=useState('')
    const[role,setrole]=useState('')
    const history = useHistory()
    const[ password ,setnewPassword]=useState('')
    const[ id ,setid]=useState('')
    const[users ,setUsers]=useState([])
    // const getAllfromdb=()=>{
    //     axios.get(`http://localhost:8080/admin/customers`).then((response)=>{
    //       const result=response.data
    //       console.log(result)
    //       if(result){
    //           console.log(result)
    //         setUsers(result)
    //       }else{
    //         console.log(result)
    //         alert("error while loading data ")
    //       }
    
    //     })
    //   }
      const getAllfromdb=()=>{
        const body = {id: id }
        axios.post(`http://localhost:8080/admin/customerbyId`,body).then((response)=>{
          const result=response.data
          console.log(result)
          if(result){
              console.log(result)
            setUsers(result)
          }else{
            console.log(result)
            alert("error while loading data ")
          }
    
        })
      }

    // const getfromdb=(id)=>{
    //   axios.get(`http://localhost:8080/admin/customers/${id}`).then((response)=>{
    //     const result=response.data
    //     console.log(result)
    //     if(result){
    //         console.log(result)
    //       setUsers(result)
    //     }else{
    //       console.log(result)
    //       alert("error while loading data ")
    //     }
  
    const location = useLocation()
    const user = location.state.user

    const EditProfile=(id)=>{
      const body = {id:user.id,name:name,
        email:email,
        password:password,
        phoneNo:phoneNo,
        pinCode:pinCode,
        address:address}
        axios.put(`http://localhost:8080//user/edit-profile/${id}`,body).then((response)=>{
          alert("success")
          history.push('/home')
        })
}
return (
   
      <div className="container">
        <input
                onChange={(e) => {
                    setid(e.target.value)
                }}
                className="form-control" type="hidden" />
         {/* <button className="btn btn-success"onClick={getAllfromdb}>Show Employee</button> */}
           <label htmlFor="">Name   </label>
          <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e)=>{
            setName(e.target.value)
            }}/><br/>
            <label htmlFor="">Email   </label>
             <input type="text" class="form-control"   onChange={(e)=>{
            setEmail(e.target.value)
            }}/><br/>
            <label htmlFor="">PhoneNo.  </label>
             <input type="text" class="form-control"   onChange={(e)=>{
            setPhoneno(e.target.value)
            }}/><br/>
            <label htmlFor="">Pin Code  </label>
             <input type="text" class="form-control"  onChange={(e)=>{
            setPincode(e.target.value)
            }}/><br/>
            <label htmlFor="">City  </label>
             <input type="text" class="form-control"  onChange={(e)=>{
            setAddress(e.target.value)
            }}/><br/>
            <input type="hidden" class="form-control"  onChange={(e)=>{
            setnewPassword(e.target.value)
            }}/><br/>
            <button type="submit" class="btn btn-primary" onClick={()=>{EditProfile(user.id)}}>Submit</button>

         </div> 
         
    
  );
}
export default EditProfile
