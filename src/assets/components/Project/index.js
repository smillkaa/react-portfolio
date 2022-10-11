import React from "react";
import wdImg from "../../images/weatherr.png"
import uni from "../../images/img-12.png"
import p4 from "../../images/p4.png"
import ttb from "../../images/TTB.png"
import {FiLink} from "react-icons/fi"
import {BsGithub} from "react-icons/bs"

function Project() {
    return (
        <section className="bg-black p-5" id="Portfolio">
            <h2 className="text-center text-light mb-5 mt-5 pb-5 pt-5">PORTFOLIO</h2>
            <div className="container">
                <div className="row">
                    <div className="col-6 mb-5">
                        <div className="d-flex">
                            <h3>UNI-QOL</h3>
                            <a className="ms-2 me-2 fs-5" href="https://caitlinparsons25.github.io/uni-qol/"><FiLink /></a>
                            <a className=" fs-5" href="https://github.com/CaitlinParsons25/uni-qol"><BsGithub /></a>
                        </div>
                        <a href='https://caitlinparsons25.github.io/uni-qol/'><img className="portfolio-img" src={uni} alt="sun and clouds" /></a>
                    </div>
                    <div className="col-6 mb-5">
                    <div className="d-flex">
                            <h3>WEATHER DASHBOARD</h3>
                            <a className="ms-2 me-2 fs-5" href="https://smillkaa.github.io/weather-dashboard/"><FiLink /></a>
                            <a className=" fs-5" href="https://github.com/smillkaa/weather-dashboard"><BsGithub /></a>
                        </div>
                        <a href='https://smillkaa.github.io/weather-dashboard/'><img className="portfolio-img" src={wdImg} alt="sun and clouds" /></a>
                    </div>
                    <div className="col-6 mb-5">
                    <div className="d-flex">
                            <h3>THE TECH BLOG</h3>
                            <a className="ms-2 me-2 fs-5" href="https://shielded-mesa-81421.herokuapp.com/"><FiLink /></a>
                            <a className=" fs-5" href="https://github.com/smillkaa/tech-blog-site"><BsGithub /></a>
                        </div>
                        <a href='https://github.com/smillkaa/tech-blog-site'><img className="portfolio-img" src={ttb} alt="sun and clouds" /></a>
                    </div>
                    <div className="col-6 mb-5">
                    <div className="d-flex">
                            <h3>I AM PROJECT #4</h3>
                            <a className="ms-2 me-2 fs-5" href="https://twitter.com"><FiLink /></a>
                            <a className=" fs-5" href="https://twitter.com"><BsGithub /></a>
                        </div>
                        <a href='https://smillkaa.github.io/weather-dashboard/'><img className="portfolio-img" src={p4} alt="sun and clouds" /></a>
                    </div>
                    <div className="col-6 mb-5">
                    <div className="d-flex">
                            <h3>THIS IS PROJECT #5</h3>
                            <a className="ms-2 me-2 fs-5" href="https://twitter.com"><FiLink /></a>
                            <a className=" fs-5" href="https://twitter.com"><BsGithub /></a>
                        </div>
                        <a href='https://smillkaa.github.io/weather-dashboard/'><img className="portfolio-img" src={p4} alt="sun and clouds" /></a>
                    </div>
                    <div className="col-6 mb-5">
                    <div className="d-flex">
                            <h3>FINAL PROJECT</h3>
                            <a className="ms-2 me-2 fs-5" href="https://twitter.com"><FiLink /></a>
                            <a className=" fs-5" href="https://twitter.com"><BsGithub /></a>
                        </div>
                        <a href='https://smillkaa.github.io/weather-dashboard/'><img className="portfolio-img" src={ttb} alt="sun and clouds" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
