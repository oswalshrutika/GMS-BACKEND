//2 imports for pdfs 
//1 npm install --save @progress/kendo-react-buttons @progress/kendo-licensing
//2 npm install --save @progress/kendo-react-pdf @progress/kendo-drawing @progress/kendo-licensing
import { useState, useEffect } from 'react'
import axios from 'axios'

import { Button } from '@progress/kendo-react-buttons';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { useRef } from 'react';
import './users.css';
export const Users=()=>{
const[users ,setUsers]=useState([])
const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);
  
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  }

useEffect(() => {
    getAllfromdb()
}, [])
const getAllfromdb=()=>{
        axios.get(`http://localhost:8080/admin/customers`).then((response)=>{
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
      const deletefromdb=(id,e)=>{
          console.log(id)
        axios.delete(`http://localhost:8080/admin/customer/delete/${id}`).then((response)=>{
          setUsers(users.filter((user)=>{
            return user.id!=id
          }))
        })
    }
      return (
        <div className="Space-Sidebar">
           <div className="app-content">
      <PDFExport ref={pdfExportComponent} paperSize="Tabloid">
        <div ref={contentArea}>
        <h2 className="myTable">Customers</h2>
  
        <table className="table table-striped myTable  " >
          <thead>
            <tr>
              {/* <th>id</th>
              <th>Name</th> */}


              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone no</th>
              <th>Address</th>
              <th>PinCode</th>
  
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  {/* <td></td>
                  <td></td> */}
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNo}</td>
                  <td>{user.address}</td>
                  <td>{user.pinCode}</td>
                  <td>
                  <button className="btn btn-danger"onClick={(e)=>{deletefromdb(user.id,e)}}>Remove</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
        </PDFExport>
         
          <div className="button-area">
            <Button  className ="btn btn-info myTable "onClick={handleExportWithComponent}>Download PDF</Button>
            
          </div>
      
     
    </div>
      </div>
      )

}