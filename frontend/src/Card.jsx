import React from 'react';
const Card = (props) => {
    return (
        <div className="card border border-info rounded shadow" style={{width: "230px",height:"270px"}}>
            <img src={props.imgsrc} className="card-img-top m-auto" alt="imgsrc" style={{height: "150px", width:"100px"}}/>
            <div className="card-body" style={{textAlign:"center"}}>
                <h6 className={props.title} style={{color:"black",fontStyle:"oblique"}} >     </h6>
               <button type="button" class="btn btn-outline-success">-</button><button type="button" className="btn btn-success">Add to Cart</button><button type="button" class="btn btn-outline-success">+</button>
            </div>
        </div>
    );
}
export default Card;