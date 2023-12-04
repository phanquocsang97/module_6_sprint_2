import React, { useState, useEffect } from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";

const NavBar = () => {

    const [isShow, setIsShow] = useState(false);

    const toggleMenu = () => {
        setIsShow(!isShow);
    };

    const hideMenu = () => {
        setIsShow(false);
    };

    return(
        <div>
            <div className={classes.navBar}>
                <ul className={classes.left}>
                    {/* Navbar nao active thi them class active vao  */}
                    <li>
                        <NavLink
                            end
                            to="/"
                            className={({ isActive }) =>
                                isActive ? `${classes.active}` : undefined
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                isActive ? `${classes.active}` : undefined
                            }
                        >
                            Shop
                        </NavLink>
                    </li>
                </ul>
                <div className={classes.middle}>
                    <h1>Coffero</h1>
                </div>
                <ul className={classes.right}>
                    <li className={classes.cart}>
                        <BiCartAlt />
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                isActive ? `${classes.active}` : undefined
                            }
                        >
                            Cart
                        </NavLink>
                        {/* Neu cart co item va nguoi dung luu trong cart la nguoi dung hien tai thi in so luong cart item ra man hinh */}
                        {/*{cartTotal > 0 && <span> ( {cartTotal} )</span>}*/}
                    </li>

                    {/* User chua dang nhap thi hien nut login */}

                    {/*{!userToken && (*/}
                        <li className={classes.login}>
                            <BiUserCircle />
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? `${classes.active}` : undefined
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                    {/*)}*/}

                    {/*/!* User da dang nhap thi hien email user *!/*/}
                    {/*{userToken && (*/}
                    {/*    <li className={classes.order}>*/}
                    {/*        <BsFillInboxesFill />*/}
                    {/*        <NavLink*/}
                    {/*            to="/order"*/}
                    {/*            className={({ isActive }) =>*/}
                    {/*                isActive ? `${classes.active}` : undefined*/}
                    {/*            }*/}
                    {/*        >*/}
                    {/*            Order*/}
                    {/*        </NavLink>*/}
                    {/*    </li>*/}
                    {/*)}*/}

                    {/*{userToken && (*/}
                    {/*    <li className={classes.login}>*/}
                    {/*        <BiUserCircle />*/}
                    {/*        {isUser}*/}
                    {/*    </li>*/}
                    {/*)}*/}

                    {/*/!* User da dang nhap thi hien thi nut logout *!/*/}
                    {/*{userToken && (*/}
                    {/*    <li>*/}
                    {/*        <NavLink to="/" onClick={logoutHandler}>*/}
                    {/*            Logout*/}
                    {/*        </NavLink>*/}
                    {/*    </li>*/}
                    {/*)}*/}
                </ul>
            </div>

            {/* Div Hambeger Reponsive Mobile */}
            {/*<div className={classes.navHamburger}>*/}
            {/*    <BiMenu onClick={toggleMenu} />*/}
            {/*    {isShow && (*/}
            {/*        <ul>*/}
            {/*            <li>*/}
            {/*                <NavLink*/}
            {/*                    onClick={hideMenu}*/}
            {/*                    end*/}
            {/*                    to="/"*/}
            {/*                    className={({ isActive }) =>*/}
            {/*                        isActive ? `${classes.active}` : undefined*/}
            {/*                    }*/}
            {/*                >*/}
            {/*                    Home*/}
            {/*                </NavLink>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <NavLink*/}
            {/*                    onClick={hideMenu}*/}
            {/*                    to="/shop"*/}
            {/*                    className={({ isActive }) =>*/}
            {/*                        isActive ? `${classes.active}` : undefined*/}
            {/*                    }*/}
            {/*                >*/}
            {/*                    Shop*/}
            {/*                </NavLink>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <NavLink*/}
            {/*                    onClick={hideMenu}*/}
            {/*                    to="/order"*/}
            {/*                    className={({ isActive }) =>*/}
            {/*                        isActive ? `${classes.active}` : undefined*/}
            {/*                    }*/}
            {/*                >*/}
            {/*                    Order*/}
            {/*                </NavLink>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <NavLink*/}
            {/*                    onClick={hideMenu}*/}
            {/*                    to="/cart"*/}
            {/*                    className={({ isActive }) =>*/}
            {/*                        isActive ? `${classes.active}` : undefined*/}
            {/*                    }*/}
            {/*                >*/}
            {/*                    Cart*/}
            {/*                </NavLink>*/}
            {/*                {cartTotal > 0 && <span> ( {cartTotal} )</span>}*/}
            {/*            </li>*/}
            {/*            {!isUser && (*/}
            {/*                <li className={classes.login}>*/}
            {/*                    <NavLink*/}
            {/*                        onClick={hideMenu}*/}
            {/*                        to="/login"*/}
            {/*                        className={({ isActive }) =>*/}
            {/*                            isActive ? `${classes.active}` : undefined*/}
            {/*                        }*/}
            {/*                    >*/}
            {/*                        Login*/}
            {/*                    </NavLink>*/}
            {/*                </li>*/}
            {/*            )}*/}
            {/*            {isUser && (*/}
            {/*                <li className={classes.login}>*/}
            {/*                    <BiUserCircle />*/}
            {/*                    {isUser}*/}
            {/*                </li>*/}
            {/*            )}*/}
            {/*            {isUser && (*/}
            {/*                <li>*/}
            {/*                    <NavLink to="/" onClick={logoutHandler}>*/}
            {/*                        Logout*/}
            {/*                    </NavLink>*/}
            {/*                </li>*/}
            {/*            )}*/}
            {/*        </ul>*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>
    )
}

export default NavBar;