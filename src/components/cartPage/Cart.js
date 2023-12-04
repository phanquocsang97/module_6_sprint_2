import classes from "./Cart.module.css";
import img from "../SRCIMG/banner1.jpg";
import { BiGift } from "react-icons/bi";
import React from "react";
import CartDetail from "./CartDetail";

const Cart = () => {
    return(
        <div className={classes.cart}>
            <div className={classes.cartBannerImg}>
                <img src={img} />
                <div className={classes.bannerDescription}>
                    <h1>Cart Page</h1>
                    <h3>Save up to 50% + Free shipping </h3>
                </div>
            </div>
            <h2>Shopping Cart</h2>
            {/* Thong tin gio hang o ben trai, tam tinh o ben phai  */}
            <div className={classes.shoppingCart}>
                 {/*Thong tin gio hang*/}
                <div className={classes.cartDetail}>
                    <CartDetail />
                </div>
                 {/*Tam tinh tong bill o ben phai*/}
                <div className={classes.cartTotal}>
                    <div className={classes.title}>
                        <h2>CART TOTAL</h2>
                    </div>
                    <div className={classes.subTotal}>
                        <h3>SUB TOTAL</h3>
                        {/*<h3>{totalRender}</h3>*/}
                    </div>
                    <div className={classes.total}>
                        <h3>TOTAL</h3>
                        {/*<h2>{totalRender}</h2>*/}
                    </div>
                    <form className={classes.form}>
                        <input placeholder="Enter your coupon" />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <BiGift />
                            Apply Coupon
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cart;
