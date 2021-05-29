import React from 'react'
import imgi1 from "../fooddelivery/pizza.jpeg";
import imgi2 from "../fooddelivery/idly.jpeg";
import imgi3 from "../fooddelivery/dossa.jpeg";
import imgi4 from "../fooddelivery/burger.jpeg";
import imgi5 from "../fooddelivery/vdapao.jpeg";
import imgi6 from "../fooddelivery/sandwich.jpeg";
import imgi7 from "../fooddelivery/paobhaji.jpeg";
import imgi8 from "../fooddelivery/vegbiryani.jpeg";
import imgi9 from "../fooddelivery/nonvegbiryani.jpeg";

function Details() {
    let btn = document.getElementById(`btn`);
    let nav = document.getElementById(`nav`);
    if (nav.style.display != `none`) {
        nav.style.display = `none`;
    } 
    else{
        nav.style.display = `block`;
    }
}

const Recipe = () => {
    return (
        <div className="container my-4 text-center">
            <div className="row my-4">
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card crd">
                        <img src={imgi1} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Pizza</h4>
                            <h5 className="card-text">“A pizza slice a day keeps sadness away.” </h5>
                            <h5>Price: $ 9.99 <span className="badge bg-danger ">HOT</span></h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card crd" >
                        <img src={imgi2} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Idli</h4>
                            <h5 className="card-text">"Idli is one that can never get boring."</h5>
                            <h5>Price: $ 4</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card crd" >
                        <img src={imgi3} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Dosa</h4>
                            <h5 className="card-text">"Dosa is nothing but a full of Emotions."</h5>
                            <h5>Price: $ 6</h5>
                        </div>
                    </div>
                </div>
            {/* </div> */}
            {/* <div className="row my-4"> */}
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card crd">
                        <img src={imgi4} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Burger</h4>
                            <h5 className="card-text">"A Burger without cheese is like a hug without a squeeze."</h5>
                            <h5>Price: $ 11 <span className="badge bg-success ">NEW</span></h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card crd" >
                        <img src={imgi5} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Vada-Pav</h4>
                            <h5 className="card-text">"Peace and Happiness is Eating VadaPav All Alone."</h5>
                            <h5>Price: $ 5 </h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card crd" >
                        <img src={imgi6} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Sandwich</h4>
                            <h5 className="card-text">"Life is so Good if you have a good Sandwich."</h5>
                            <h5>Price: $ 6 </h5>
                        </div>
                    </div>
                </div>
            {/* </div> */}
            {/* <div className="row"> */}
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card crd ">
                        <img src={imgi7} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Pav-Bhaji</h4>
                            <h5 className="card-text">"If you wanna a Good Day , Eat PavBhaji in you Breakfast "</h5>
                            <h5>Price: $ 8 <span className="badge bg-danger ">HOT</span></h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 ">
                    <div className="card crd" >
                        <img src={imgi8} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Veg Biryani</h4>
                            <h5 className="card-text">"Biryani Taste , Better then the Rest. Happy Eating."</h5>
                            <h5>Price: $ 12 <span className="badge rounded-pill bg-warning text-dark">Yummy</span></h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 ">
                    <div className="card crd " >
                        <img src={imgi9} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Chicken Biryani</h4>
                            <h5 className="card-text">"I can't make everyone Happy , I'm not Chicken."</h5>
                            <h5>Price: $ 15 <span className="badge rounded-pill bg-warning text-dark">Yummy</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe;