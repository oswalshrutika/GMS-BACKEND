import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'
const url = 'http://localhost:8080'
const SellerEditProfile = () => {


  const [sellerId ,setSellerId] = useState(0)
  const [companyName, setCompanyName] = useState('')
  const [companyPhone, setCompanyPhone] = useState('')
  const [companyAddress, setCompanyAddress]=useState('')
  const [gstin, setGstin] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [password, setPassword]=useState('')
  const [role , setRole]= useState('')
  const history = useHistory()




  const [seller,setSeller] = useState(JSON.parse(sessionStorage.getItem('seller')))
  console.log(sessionStorage.getItem('seller'))


  const EditProfile = () => {
    const body = { sellerId:seller.sellerId,companyName: companyName,  companyPhone:companyPhone, companyAddress:companyAddress,  gstin:gstin, companyEmail:companyEmail,  password:password, role:role}
  


    axios.put(`http://localhost:8080/seller/edit-profile/`, body).then((response) => {
      const result = response.data
    
      if(result){
        alert("success")
        console.log(result)
        sessionStorage.setItem("seller", JSON.stringify({sellerId : result.sellerId}))
      }
      // saveTokenInLocalStorage(result)
      else{
        alert( 'success')
      }
      
       history.push('/home')
    })
  }
  return (


    <div className="container">
     


      <label htmlFor="">Company Name   </label>
      <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => {
        setCompanyName(e.target.value)
      }} defaultValue={seller.companyName} /><br />

      <label htmlFor="">Company Phone  </label>
      <input type="text" class="form-control" onChange={(e) => {
        setCompanyPhone(e.target.value)
      }} defaultValue={seller.companyPhone} /><br />

      <label htmlFor="">Comapany Address  </label>
      <input type="text" class="form-control" onChange={(e) => {
        setCompanyAddress(e.target.value)
      }} defaultValue={seller.companyAddress} /><br />

      <label htmlFor="">GSTIN  </label>
      <input type="text" class="form-control" onChange={(e) => {
        setGstin(e.target.value)
      }} defaultValue={seller.gstin} /><br />

   
      <input type="hidden" class="form-control" onChange={(e) => {
        setSellerId(e.target.value)
      }} defaultValue={seller.sellerId} /><br />

    <input type="hidden" class="form-control" onChange={(e) => {
        setCompanyEmail(e.target.value)
      }} defaultValue={seller.companyEmail} /><br />


      <input type="hidden" class="form-control" onChange={(e) => {
        setPassword(e.target.value)
      }} defaultValue={seller.password} /><br />

        <input type="hidden" class="form-control" onChange={(e) => {
        setRole(e.target.value)
      }} defaultValue={seller.role} /><br />

      <button type="submit" class="btn btn-primary" onClick={() => { EditProfile(seller.sellerId) }}>Submit</button>
    </div>


  );
}
export default SellerEditProfile