import { Link ,useHistory } from 'react-router-dom';
const Info=()=>{
    const history = useHistory()
   const user= JSON.parse(localStorage.getItem('seller'))  //u=user
   console.log(seller) 
    return(
        <div className="container">
            {/* <h2>{user.id}</h2>
            <h2>{user.name}</h2> */}
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>PinCode</th>
                    <th>Phone No.</th>
                    </tr>
                </thead>
                <tbody>
                   <tr>
                     <td> {user.name}</td>
                     <td> {user.email}</td>
                     <td> {user.address}</td>
                     <td> {user.pinCode}</td>
                     <td> {user.phoneNo}</td>
                     <td>
                     <button
                       onClick={() => {
                         history.push(`/editprofile/${user.id}`, {user:user})
                        }}
                       className="btn btn-success btn-sm">
                             Edit 
                           </button>
                           <button
                       onClick={() => {
                         history.push(`/changepassword/${user.id}`, {user:user})
                        }}
                       className="btn btn-danger btn-sm">
                             Changepassword
                           </button>
                     </td>
                    <td>
                    
                    </td>
                    </tr>
                </tbody>
        </table>
       </div>
    )
}
export default Info;