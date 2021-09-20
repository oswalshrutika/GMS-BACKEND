import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Card';
import Carousel1 from '../Carousel1';
import { url } from '../common/constants';

function SearchList({ filteredcategory }) {
    const [category, setCategory] = useState([])

    // const location = useLocation()
    const history = useHistory()

    const getCategory = () => {
        axios.get(url + '/category/').then((response) => {
            const result = response.data

            setCategory(result)
        })
    }

    return (

        <div className="mt-10">

            <ul className="list-inline-item  ">
                {
                    filteredcategory.length !== 0 ? filteredcategory.map((cat) => {
                        return (

                            <div className="list-inline-item">
                                <div className="cards">
                                    <div className="card2 border border-2">
                                        {/* <img src={props.imgsrc} className="card-img-top m-auto" alt="imgsrc" style={{height: "150px", width:"100px"}}/> */}
                                        <a
                                            onClick={() => {
                                                history.push(`/category/${cat.categoryName}`, { cat: cat })
                                               


                                            }}
                                        >

                                            <p>click here </p>
                                            <img src={url + '/' + cat.categoryImage} className="card-img-top m-auto" alt="" /><br></br>
                                             <div className="card-body" style={{textAlign:"center"}}> 
                <h6  style={{color:"black",fontStyle:"oblique"}} >     </h6> 
                                        
                                                <h4 style={{ color: "black", fontStyle: "oblique" }} >{cat.categoryName}</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        )

                    }) : <h1 className="text-purple-700">Ummmmmm.....? 🙂 No category found</h1>
                }
            </ul>
            <Carousel1 />

        </div>
    );
}

export default SearchList;