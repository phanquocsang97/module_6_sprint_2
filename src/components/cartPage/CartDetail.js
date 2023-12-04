import classes from "./CartDetail.module.css";
import {BiSubdirectoryLeft} from "react-icons/bi";
import {BiSubdirectoryRight} from "react-icons/bi";
import React from "react";
import {useNavigate} from "react-router-dom";

const CartDetail = () => {
    const navigate = useNavigate();
    const backToShop = () => {
        //click continue thi quay lai shopping tiep
        navigate("/shop");
    };

    const goCheckOutPage = () => {
        //di tinh tien
        navigate("/checkout");
    };
    return (
        <>
            <div className={classes.title}>
                <h3>IMAGE</h3>
                <h3>PRODUCTS</h3>
                <h3>PRICE</h3>
                <h3>QUANTITY</h3>
                <h3>TOTAL</h3>
                <h3>REMOVE</h3>
            </div>

            {/* Button chuyen trang  */}
            <div className={classes.buttonTransPage}>
                {/* Quay lai shop  */}
                <div className={classes.buttonLeft} onClick={backToShop}>
                    <button>
                        <BiSubdirectoryLeft />
                        Continue Shopping
                    </button>
                </div>
                {/* Di tinh tien  */}
                <div className={classes.buttonRight} onClick={goCheckOutPage}>
                    <button>
                        Proceed to checkout
                        <BiSubdirectoryRight />
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartDetail;