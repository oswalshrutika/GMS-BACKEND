import React from 'react';
import web1 from "../src/images/Grocery9.jpg";
const Carousel1 = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    {/* <img src={web1} className="image" height="auto" alt="web1" /> */}
                                    
                                    
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1 style={{ fontSize: "80px", color: "Black" }}><strong>Grocery Mart</strong></h1>
                                        <h2 style={{ color: 'darkmagenta' }}>"A Site for Perfect Grocery Shopping"</h2>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={web1} className="d-block w-100" alt="web2" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1 style={{ fontSize: "80px", color: "yellow" }}><strong>Park Your Car </strong></h1>
                                            <h2 style={{ color: 'lightblue' }}>You can park your car at our location,we will provide you safety and quality service</h2>
                                            <button type="button" className="btn btn-warning">Customer Login</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={web1} className="d-block w-100" alt="web3" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1 style={{ fontSize: "80px", color: "yellow" }}><strong>Parking Business</strong></h1>
                                        <h2 style={{ color: 'lightblue' }}>If You Are Admin Please Login Here</h2>
                                        <button type="button" className="btn btn-warning">Admin Login</button>
                                    </div>
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default Carousel1;
