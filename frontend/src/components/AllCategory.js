import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'
import { useHistory, useLocation } from 'react-router-dom'
import SellerMenuBar from './SellerMenuBar'
import SellerNavbar from './SellerNavbar'


const AllCategory = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = () => {
        axios.get(url + '/category/').then((response) => {
            const result = response.data
            setCategory(result)

            console.log(result)


        })
    }

    return (

        <div className="image">
              < SellerNavbar />
            <tr>
                <td md={2}>
                    <div>
                        <SellerMenuBar />
                    </div>
                </td>
                <td >
                    <h4 className="text-center">View All Category</h4>
                    <br />
                    <br />
                    <table
                        className="table"
                        className="table table-bordered border-dark"
                        className="table table-striped table-hover">
                        <thead>
                            <tr>

                                <th >
                                    Category Id
                                </th>
                                <th >
                                    Category Name
                                </th>
                                <th scope="col" colSpan="1">
                                    Category Description
                                </th>

                                <th scope="col" colSpan="1">
                                    Category Image
                                </th>


                            </tr>
                        </thead>
                        <tbody>

                            {

                                category.map((cat) => {
                                    return (

                                        <tr>
                                            <td>{cat.categoryId}</td>
                                            <td>{cat.categoryName}</td>
                                            <td>{cat.categoryDescription}</td>
                                            <td>
                                                <td>

                                                    <img src={url + '/' + cat.categoryImage} alt="" class="rounded" height="150px" width="200px" />


                                                </td>
                                            </td>

                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>


                </td>
            </tr>
        </div>

    )




}



export default AllCategory









