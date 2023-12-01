import './App.css';
import React from 'react';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Menu from "./components/menu/Menu";
import Choose from "./components/choose/Choose";
import Stats from "./components/stats/Stats";
import Gallery from "./components/gallery/Gallery";
import Team from "./components/team/Team";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Home/>
            <About/>
            <Features/>
            <Menu/>
            <Choose/>
            <Stats/>
            <Gallery/>
            <Team/>
            <Footer/>
        </>
    );
}

export default App;
