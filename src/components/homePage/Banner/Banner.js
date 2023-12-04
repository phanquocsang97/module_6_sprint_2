import banner1 from "../../SRCIMG/banner1.jpg";
import classes from "./Banner.module.css";
import {useNavigate} from "react-router-dom";
import React from "react";

const Banner = () => {
    // const navigate = useNavigate();
    // const goShopPage = () => {
    //     navigate("/shop")
    // }

    return(
        <div className={classes.banner}>
            <div className={classes.imgdiv}>
                <img src={banner1} alt="banner"/>
            </div>
            <div className={classes.description}>
                <p>NEW INSPIRATION 2023</p>
                <h1>20% OFF ON CHRISTMAS</h1>
                {/*<button onClick={goShopPage}>Browse Menu</button>*/}
            </div>
        </div>
    )
}

export default Banner;