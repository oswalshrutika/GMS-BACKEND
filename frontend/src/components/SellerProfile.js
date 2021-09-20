import { Link ,useHistory } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../common/constants'


const SellerProfile=()=>{
    const history = useHistory()
 //  const user= JSON.parse(localStorage.getItem('user'))  //u=user
 const [seller,setSeller] = useState(JSON.parse(sessionStorage.getItem('seller')))
 console.log(sessionStorage.getItem('seller'))

  //  const [user, setUser] = useState([])

  //  useEffect(() => {
  //    console.log(`User got loaded`)
  //    getUser()
  //  }, [])
 
  //  const getUser = () => {
  //    axios.get(url + `/users/${user1.userid}`).then((response) => {
  //      const result = response.data
  //      if (result.status === 'success') {
  //        setUser(result.data)
  //      } else {
  //        alert('error while loading the user')
  //      }
  //    })
  //  }
 
   return (
     <div>
       <h1 className="page-title">My Info</h1>
       <Link className="nav-link" to="/sellerDashboard" style={{marginLeft:'1000px'}}>
                <button type="submit" className="btn btn-primary"  > Back To DashBoard </button>   
      </Link>

       <button
          onClick={() => {
            history.push(`/sellerEditProfile/${seller.sellerId}`)
          }}
          className="btn btn-secondary btn-sm" >
                Edit 
       </button>


                    <button
                       onClick={() => {
                         history.push(`/changeSellerPassword/${seller.sellerId}`, {seller:seller})
                        }}
                       className="btn btn-danger btn-sm">
                             Changepassword
                      </button>
 

       <table className="table table-striped">
         <thead>
           <tr>
           <th>Seller Id</th>
             <th>Company Name</th>
             <th>Company Email</th>
             <th>Company Phone </th>
             <th>Comapny Address</th>
             <th>GSTIN</th>
           </tr>
         </thead>
         <tbody>
           <tr>
               <td> {seller.sellerId} </td> 
               <td> {seller.companyName}</td>
               <td>{seller.companyEmail}</td>
               <td>{seller.companyPhone}</td>
               <td>{seller.companyAddress}</td>
               <td>{seller.gstin}</td>
           </tr>

           <tr>
                      
           </tr>
         </tbody>
       </table>
     </div>
   )
}
export default SellerProfile;