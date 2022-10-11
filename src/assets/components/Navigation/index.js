import React from "react";

function Nav() {
    return (
        <div className="nav text-white" id="nav-bar">
            <ul className="list-unstyled">
                <li><a className="text-decoration-none" href="#About">About Me</a></li>
                <li><a className="text-decoration-none" href="#Portfolio">Portfolio</a></li>
                <li><a className="text-decoration-none" href="#Resume">Resume</a></li>
                <li><a className="text-decoration-none" href="#Contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default Nav;
