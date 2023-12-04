import Banner from "../Banner/Banner";
import BrowseCategory from "../BrowseCategory/BrowseCategory";
import OtherInfo from "../OtherInfo/OtherInfo";
import Subscribe from "../Subscribe/Subscribe";
import React from "react";

const Home = () => {
    //chua toan bo noi dung cua trang home
    return (
        <>
            <Banner />
            <BrowseCategory />;
            <OtherInfo />
            <Subscribe />
        </>
    );
};

export default Home;