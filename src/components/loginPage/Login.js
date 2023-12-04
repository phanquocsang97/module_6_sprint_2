import img from "../SRCIMG/banner1.jpg";
import classes from "./Login.module.css";
import {Link} from "react-router-dom";
const Login = () => {

    return(
        <div className={classes.login}>
            <img src={img}></img>
            <form className={classes.form}>
                <h1>Sign In</h1>
                <input type="text" placeholder="User Name" ></input>
                <input
                    type="password"
                    placeholder="Password"
                ></input>
                <button>SIGN IN</button>
                {/* Goi y chua co tai khoan thi chuyen den trang dang ky  */}
                <h3>
                    Create an account ? <Link to="/register"> Sign up</Link>
                </h3>
            </form>
        </div>
    )
}

export default Login;