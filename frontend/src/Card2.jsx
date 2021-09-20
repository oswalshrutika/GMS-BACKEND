import React from 'react';
import { NavLink } from 'react-router-dom';
const Card2 = (props) => {
    return (
        <>
            <div className="cards">
                <div className="card2 border border-2">
                    <img src={props.imgsrc} alt="img" className="card_img"/>
                    <div className="card_info" style={{textAlign:"center"}}>
                        <h6 className="card_title">{props.title}</h6>
                        <a href="" target="_blank">
                         <NavLink to="/Book"><button className="button_card2 btn btn-outline-warning">Read</button></NavLink>   
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card2;