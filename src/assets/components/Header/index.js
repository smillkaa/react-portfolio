import React from "react";
import Nav from "../Navigation";

function Header() {
    return (
        <header className="fixed-top p-5 pb-0 bg-black d-flex header">
             <h1 className="me-auto">
               <a className="text-decoration-none" href="/">saidana</a>
            </h1>
           <Nav></Nav>
        </header>
    );
};

export default Header;
