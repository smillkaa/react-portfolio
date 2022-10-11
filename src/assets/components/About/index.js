import React from "react";
import icon from '../../images/woman-avatar-icon.webp';

function About() {
    return (
        <section id="About" className="d-flex mt-5 pt-5 flex-column justify-content-center align-items-center">
            <div className="p-5 w-50">
                <div className="d-flex justify-content-center pb-5 pt-5">
                    <img className="avatar" src={icon} alt="Woman Icon"/>
                </div>
                <h2 className="text-center pb-4">ABOUT ME</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>
    );
};

export default About;
