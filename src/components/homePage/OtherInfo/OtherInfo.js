import classes from "./OtherInfo.module.css";
import React from "react";

const OtherInfo = () => {
    //Other info de quang cao
    return (
        <div className={classes.otherInfo}>
            <div className={classes.service}>
                <div>
                    <h2>FREE SHIPPING</h2>
                    <p>Free shipping worldwide</p>
                </div>
                <div>
                    <h2>24 / 7 SERVICE</h2>
                    <p>Free shipping worldwide</p>
                </div>
                <div>
                    <h2>FESTIVAL OFFER</h2>
                    <p>Free shipping worldwide</p>
                </div>
            </div>
        </div>
    );
};

export default OtherInfo;
