import React from "react";
import aboutImg from "../../assets/about-img.jpg";
import {FiCheck} from "react-icons/fi";
import "./About.css";

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about__grid container grid">
                <div className="about__img-wrapper">
                    <img src={aboutImg} alt="" className="about__img"/>
                </div>

                <div className="about__content">
                    <h2 className="section__title title-left" data-title="About Us">
                        Fresh Quality And Organic Tasty Coffee House For You
                    </h2>

                    <p className="about__description">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humor, or randomised words which don't look even slightly believable
                    </p>

                    <div className="about__details grid">
                        <p className="about__details-description">
                            <FiCheck />
                            At vero eos accusamus et iusto odio
                        </p>
                        <p className="about__details-description">
                            <FiCheck />
                            At vero eos accusamus et iusto odio
                        </p>
                        <p className="about__details-description">
                            <FiCheck />
                            At vero eos accusamus et iusto odio
                        </p>
                    </div>

                    <a href="#team" className="btn">
                        Our Experts
                    </a>
                </div>
            </div>
        </section>
    )

}

export default About;