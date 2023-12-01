import React from "react";
import "./Home.css"

const Home = () => {
    return(
        <section className="home" id="home">
            <div className="home__container container">
                <div className="home__content">
                    <span className="home__subtitle">
                        Welcome To Coffero!
                    </span>
                    <h1 className="home__title">
                        Discover Amazing Coffee
                        House & Get Energy
                    </h1>
                    <p className="home__description">
                        There are many variations of passages available but the majority have suffered alteration in some
                        form by injected humor or randomised word.
                    </p>

                    <div className="home__btns">
                        <a href="#menu" className="btn">
                            Check Menu
                        </a>
                        <a href="#menu" className="btn home__btn">
                            Book Table
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;