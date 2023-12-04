import img from "../SRCIMG/banner1.jpg";
import classes from "./Register.module.css";
import React from "react";
import {Link} from "react-router-dom";

const Register = () => {
    return(
        <div className={classes.register}>
            <img src={img}/>
            <form className={classes.form}>
                <h1>Sign Up</h1>
                <input
                    type="text"
                    placeholder="User Name">
                </input>
                <input
                    type="text"
                    placeholder="Password">
                </input>
                <input
                    type="text"
                    placeholder="Confirm Password">
                </input>
                <input
                    type="text"
                    placeholder="Email">
                </input>
                <input
                    type="text"
                    placeholder="Phone Number">
                </input>
                <button>SIGN UP</button>
                <h3>
                    Login ? <Link to="/login"> Click here</Link>
                </h3>
            </form>
        </div>
    )
}

export default Register;