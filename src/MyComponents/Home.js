import React from 'react';
import img1 from "../fooddelivery/images.jpeg";
import img2 from "../fooddelivery/catering1.jpeg";
import img3 from "../fooddelivery/delivering.jpeg";
import img4 from "../fooddelivery/tiffin.png";
import  "../App.css";

const Home = () => {
    return (  
        <div className="container my-3 bord">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={img1} className="d-block w-100" alt="Not found" height="555px"  />
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className="blck" >We provide Delicious Foods</h4>
                            <h5 className="blck" >Yummy and Hygienic Food at Low Budget</h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={img2} className="d-block w-100" alt="Not found" height="555px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className="blck" >We provide Catering Services</h4>
                            <h5 className="blck" >Our catering services are best and at low Budget</h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={img3} className="d-block w-100" alt="Not found" height="555px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className="blck" >We provide Delivering Services</h4>
                            <h5 className="blck" >Our delivering Services are Fast and Safe</h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={img4} className="d-block w-100" alt="Not found" height="555px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className="blck" >We provide Tiffin Services</h4>
                            <h5 className="blck" >Our Tiffin Services are Safe and Hygienic</h5>
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
    )
}

export default Home;
