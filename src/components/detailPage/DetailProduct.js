import classes from "./DetailProduct.module.css";
import React from "react";
import image0 from "../SRCIMG/product_1.jpg";

const DetailProduct = () => {
    return(
        <div className={classes.detailProduct}>
            <div className={classes.imgMain}>
                <img src={image0} alt="image0"/>
            </div>

            {/* thanh phan hien thi mo ta san pham o ben phai */}
            <div className={classes.detailDescription}>
                <h1>Capuchino</h1>
                <h3>Price : 45.000</h3>
                <p> Description : A cappuccino is a classic and beloved espresso-based beverage that originated in Italy. It is renowned
                    for its rich and velvety texture, combining equal parts of espresso, steamed milk, and frothed milk.
                    The espresso forms the strong and robust base, while the steamed milk contributes a creamy smoothness.
                    Topping off this delightful concoction is a layer of airy and light frothed milk, often adorned with
                    a sprinkle of cocoa or cinnamon.</p>
                {/*<div className={classes.formButton}>*/}
                {/*    /!* form de lay du lieu cho vao cart *!/*/}
                {/*    <form>*/}
                {/*        <label htmlFor="" for="qty">*/}
                {/*            Quantity :*/}
                {/*        </label>*/}
                {/*        <input type="number"*/}
                {/*                name="qty"*/}
                {/*                id="qty"*/}
                {/*        />*/}
                {/*    </form>*/}
                {/*    <button>Add to Cart</button>*/}
                {/*</div>*/}
                <div className={classes.formButton}>
                    {/* form de lay du lieu cho vao cart */}
                    <form>
                        <label htmlFor="" htmlFor="qty">
                            Quantity:
                        </label>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            min="1"
                            max="10"
                            step="1"
                        />
                    </form>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct;