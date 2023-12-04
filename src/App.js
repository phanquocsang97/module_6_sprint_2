import './App.css';
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/homePage/Home/Home";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import Login from "./components/loginPage/Login";
import Cart from "./components/cartPage/Cart";
import Register from "./components/registerPage/Register";
import DetailProduct from "./components/detailPage/DetailProduct";


function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/detailProduct" element={<DetailProduct/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
