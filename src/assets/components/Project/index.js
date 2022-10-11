import React from "react";
import wdImg from "../../images/weatherr.png"

function Project() {
    return (
        <section className="bg-black p-5" id="Portfolio">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-6 mb-5">
                        <h3>UNI-QOL</h3>
                        <a href='https://smillkaa.github.io/weather-dashboard/'><img className="portfolio-img" src={wdImg} alt="sun and clouds" /></a>
                    </div>
                    <div className="col-6 mb-5">
                        <h3>WEATHER DASHBOARD</h3>
                        <a href='https://smillkaa.github.io/weather-dashboard/'><img className="portfolio-img" src={wdImg} alt="sun and clouds" /></a>
                    </div>
                    <div className="col-6 mb-5">
                        <h3>TECH BLOG SITE</h3>
                        <a href='https://smillkaa.github.io/weather-dashboard/'><img className="portfolio-img" src={wdImg} alt="sun and clouds" /></a>
                    </div>
                    <div className="col-6 mb-5">
                        <h3>PROJECT #4</h3>
                        <a href='https://smillkaa.github.io/weather-dashboard/'><img className="portfolio-img" src={wdImg} alt="sun and clouds" /></a>
                    </div>
                    <div className="col-6 mb-5">
                        <h3>PROJECT #5</h3>
                        <a href='https://smillkaa.github.io/weather-dashboard/'><img className="portfolio-img" src={wdImg} alt="sun and clouds" /></a>
                    </div>
                    <div className="col-6 mb-5">
                        <h3>FINAL PROJECT #6</h3>
                        <a href='https://smillkaa.github.io/weather-dashboard/'><img className="portfolio-img" src={wdImg} alt="sun and clouds" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
