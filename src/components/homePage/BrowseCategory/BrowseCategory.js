import image1 from "../../SRCIMG/product_1.jpg";
import image2 from "../../SRCIMG/product_2.jpg";
import image3 from "../../SRCIMG/product_3.jpg";
// import image4 from "../../SRCIMG/product_4.jpg";
import image5 from "../../SRCIMG/product_5.jpg";
import classesCategory from "./BrowseCategory.module.css";

import {useNavigate} from "react-router-dom";
import React from "react";

const BrowseCategory = () => {
    //gom cac hih anh duoc dieu huong den shoppage
    // const navigate = useNavigate();
    //
    // const goShopPage = () => {
    //     navigate("/shop");
    // };

    return(
        <div className={classesCategory.browseCategory}>
            <p>CAREFULLY CREATED COLLECTIONS</p>
            <h1>BROWSE OUR CATEGORIES</h1>
            <div>
                <div className={classesCategory.imgtop}>
                    <img src={image1}  className={classesCategory.img1} />
                    <img src={image2}  className={classesCategory.img2}/>
                </div>
                <div className={classesCategory.imgbottom}>
                    <img src={image5} />
                    <img src={image5}/>
                    <img src={image5} />
                </div>
            </div>
        </div>

    )
}

export default BrowseCategory;