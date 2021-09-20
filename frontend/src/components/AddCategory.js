import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { url } from '../common/constants';
import axios from 'axios';
import SellerNavbar from './SellerNavbar';

const AddCategory=()=>{
    const[categoryId, setCategoryId]= useState(0)
    const[categoryName, setCategoryName]= useState('')
    const[categoryDescription, setCategoryDescription]= useState('')
    const[categoryImage, setCategoryImage]= useState(undefined)
    const history = useHistory()

    const category=(()=>{
        const body= new FormData();

        body.append("categoryId", categoryId);
        body.append("categoryName", categoryName);
        body.append("categoryDescription", categoryDescription);
        body.append("categoryImage", categoryImage);

        axios.post(url + `/category`, body).then(response=>{
            const result= response.data
            if(result){
                alert("success");
                history.push("/sellerDashboard")
            }
              
            else
                alert("error");
            })
        

    })


    return (
        <div div className="container-fluid">
             < SellerNavbar />
            <div className="row">
                <div className="customer_border col-lg-5 col-sm-12 border-end border-4 p-5">
                    <h1>Add Category</h1>
                    {/* Category Id:  */}
                    <input
                        onChange={(e) => {
                            setCategoryId(e.target.value)
                        }}
                        className="form-control" type="hidden" required style={{ width: "400px" }} />

                    Category Name: <input
                        onChange={(e) => {
                            setCategoryName(e.target.value)
                        }}
                        className="form-control" type="text" required style={{ width: "400px" }} />

                    Category Description: <input
                        onChange={(e) => {
                            setCategoryDescription(e.target.value)
                        }}
                        className="form-control" type="text" required style={{ width: "400px" }} />

                    Category Image: <input
                        onChange={(e) => {
                            setCategoryImage(e.target.files[0])
                        }}
                        className="form-control" type="file" required style={{ width: "400px" }} />

                    <br />
                    <button onClick={category} className="btn btn-success">Add Category</button>  {'  '}{'  '}{'  '}
                    <a href="/sellerDashboard" className="btn btn-success">Back To DashBoard</a>
                </div>

            </div>
        </div>
    )
}
export default AddCategory