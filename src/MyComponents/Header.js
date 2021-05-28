import React from 'react'
import { Link } from "react-router-dom";
import "../App.css";
import img0 from "../fooddelivery/foodlogo.png";
import "../../node_modules/bootstrap-social/bootstrap-social.css"
import "../../node_modules/font-awesome/css/font-awesome.css"

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src={img0} alt="not found" width="40px" height="40px" className="logo" />
                    <Link className="navbar-brand" to="/">Singh's Cafe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Recipes">Recipes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                        </ul>
                        <div className="d-flex ">
                            <a className="socialbuttons btn btn-social-icon btn-google" href="http://google.com/+">
                                <i className="fa fa-google-plus"></i></a>
                            
                            <a className="socialbuttons btn btn-social-icon btn-facebook" href="http://www.facebook.com">
                                <i className="fa fa-facebook"></i></a>

                            <a className="socialbuttons btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/+">
                                <i className="fa fa-linkedin"></i></a>
                                
                            <a className="socialbuttons btn btn-social-icon btn-twitter" href="http://twitter.com/+">
                                <i className="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
