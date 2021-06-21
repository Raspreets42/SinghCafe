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
import swal from 'sweetalert';

function Menu1() {
    swal("singh's Cafe" , "We have many types of Pizza Available -\n1.Quick Tomato Pizzas \n2. Cheesy Vegetable Pizzas \n3. Baby Corn Pizzas \n4. Tandoori Paneer Pizzas \n5. Chocolate Pizzas \n6. Maggie Pizzas \n\nEnjoy Your Eating with our fresh and Yummy Pizza.");
}
function Menu2() {
    swal("singh's Cafe" , "We have many types of Idli Available -\n1. Regular Idli \n2. Poha Idli \n3. Rava Idli \n4. Oats Idli \n5. Ragi Idli \n6. Idli Fry \n\nEnjoy Your Eating with our fresh and Yummy Idli.");
}
function Menu3() {
    swal("singh's Cafe" , "We have many types of Dosa Available -\n1. Plain Dosa \n2. Masala Dosa \n3. Moong Dosa \n4. Cheese Dosa \n5. Egg Dosa \n6. Oats \n\nEnjoy Your Eating with our fresh and Yummy Dosa.");
}
function Menu4() {
    swal("singh's Cafe" , "We have many types of Burger Available -\n1. Potato Corn Burger \n2. Mushroom Burger \n3. Lamb Burger \n4. Stuffed Bean Burger \n5. Supreme Veggie Burger \n\nEnjoy Your Eating with our fresh and Yummy Burger.");
}
function Menu5() {
    swal("singh's Cafe" , "We have many types of Vada-Pav Available -\n1. Regular Vada-Pav \n2. Chinese Vada-Pav \n3. Chicken Vada-Pav \n4. Crispy Veg Vada-Pav \n5. Jain Vada-Pav \n\nEnjoy Your Eating with our fresh and Yummy Vada-Pav.");
}
function Menu6() {
    swal("singh's Cafe" , "We have many types of Sandwich Available -\n1. Aloo Grilled Sandwich \n2. Mushroom Sandwich \n3. Mixed Vegetable Sandwich \n4. Corn Cheese Sandwich \n5. Boiled Egg Sandwich \n6. Tandoori Chicken Sandwich \n\nEnjoy Your Eating with our fresh and Yummy Sandwich.");
}
function Menu7() {
    swal("singh's Cafe" , "We have many types of Pav-Bhaji Available -\n1. Regular Pav-Bhaji \n2. Khakhra Pav-Bhaji \n3. Toasted Pav-Bhaji \n4. Dhokla Pav-Bhaji \n5. Jain Pav-Bhaji \n\nEnjoy Your Eating with our fresh and Yummy Pav-Bhaji.");
}
function Menu8() {
    swal("singh's Cafe" , "We have many types of Veg Biryani Available -\n1. Jira Rice Biryani \n2. Paneer Mixed Biryani \n3. Mixed Vegetable Biryani \n4. Potato Biryani \n5. Oats Biryani \n\nEnjoy Your Eating with our fresh and Yummy Veg Biryanis.");
}
function Menu9() {
    swal("singh's Cafe" , "We have many types of Non-Veg Biryani Available -\n1. Egg Biryani \n2. Chicken Biryani \n3. Fish Biryani \n4. Mutton Biryani \n\nEnjoy Your Eating with our fresh and Yummy Non-Veg Biryanis.");
}

const Recipe = () => {
    return (
        <div className="container my-4">
            <div className="row my-4">
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card crd">
                        <img src={imgi1} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Pizza</h4>
                            <h5 className="card-text">“A pizza slice a day keeps sadness away.” </h5>
                            <h5>Price: Rs 250 <span className="badge bg-danger ">HOT</span></h5>
                            <button type="button" className="btn btn-dark"  onClick={Menu1}>Details</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card crd" >
                        <img src={imgi2} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Idli</h4>
                            <h5 className="card-text">"Idli is one that can never get boring."</h5>
                            <h5>Price: Rs 100 </h5>
                            <button type="button" className="btn btn-dark" onClick={Menu2}>Details</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card crd" >
                        <img src={imgi3} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Dosa</h4>
                            <h5 className="card-text">"Dosa is nothing but a full of Emotions."</h5>
                            <h5>Price: Rs 120 </h5>
                            <button type="button" className="btn btn-dark" onClick={Menu3}>Details</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card crd">
                        <img src={imgi4} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Burger</h4>
                            <h5 className="card-text">"A Burger without cheese is like a hug without a squeeze."</h5>
                            <h5>Price: Rs 150 <span className="badge bg-success ">NEW</span></h5>
                            <button type="button" className="btn btn-dark" onClick={Menu4}>Details</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card crd" >
                        <img src={imgi5} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Vada-Pav</h4>
                            <h5 className="card-text">"Peace and Happiness is Eating VadaPav All Alone."</h5>
                            <h5>Price: Rs 150 </h5>
                            <button type="button" className="btn btn-dark" onClick={Menu5}>Details</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card crd" >
                        <img src={imgi6} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Sandwich</h4>
                            <h5 className="card-text">"Life is so Good if you have a good Sandwich."</h5>
                            <h5>Price: Rs 120 </h5>
                            <button type="button" className="btn btn-dark" onClick={Menu6}>Details</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="card crd ">
                        <img src={imgi7} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Pav-Bhaji</h4>
                            <h5 className="card-text">"If you wanna a Good Day , Eat PavBhaji in you Breakfast "</h5>
                            <h5>Price: Rs 150 </h5>
                            <button type="button" className="btn btn-dark" onClick={Menu7}>Details</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 ">
                    <div className="card crd" >
                        <img src={imgi8} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Veg Biryani</h4>
                            <h5 className="card-text">"Biryani Taste , Better then the Rest. Happy Eating."</h5>
                            <h5>Price: Rs 250 <span className="badge rounded-pill bg-warning text-dark">Yummy</span></h5>
                            <button type="button" className="btn btn-dark" onClick={Menu8}>Details</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 ">
                    <div className="card crd " >
                        <img src={imgi9} className="card-img-top" alt="Not found"  height="120px" />
                        <div className="card-body">
                            <h4 className="card-title">Non-Veg Biryani</h4>
                            <h5 className="card-text">"I can't make everyone Happy , I'm not Chicken."</h5>
                            <h5>Price: Rs 300 <span className="badge rounded-pill bg-warning text-dark">Yummy</span></h5>
                            <button type="button" className="btn btn-dark" onClick={Menu9}>Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe;