import React, { Component } from 'react';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import Sdata from "./S1data";
import './index.css'
const Slist = Sdata.map((val, ind) => {
    return (<Card
        key={ind}
        imgsrc={val.imgsrc}
        title={val.title}
    />);
})
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite:true,
            centerPadding: "80px",
            slidesToShow: 6,
            speed: 1000
        };
        return (
            <>
            <div className="container-fluid border-bottom border-4 bs-popover-bottom mt-3"  >
                <h3 style={{ fontStyle:"oblique", color: "black", }}> Top <span style={{color:"Black"}}>Suggestion</span></h3>
                </div>
                <div className="container-fluid"  >
                    <Slider {...settings} >
                        {Slist}
                    </Slider>
                </div>
                <div className="container-fluid border-bottom border-3 mt-2" >
                <h3 style={{ fontStyle:"oblique", color:"black"  }}> Just <span style={{color:"lightseagreen"}}>Arrived</span></h3>
                </div>
                <div className="container-fluid">
                    <Slider {...settings} >
                        {Slist}
                    </Slider>
                </div>
            </>
        );
    }
}
