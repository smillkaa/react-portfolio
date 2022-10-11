import React from "react";
import {AiFillLinkedin} from "react-icons/ai"
import { AiFillGithub } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'

function Footer() {
    return (
        <footer className="bg-black text-white p-3 text-center">
            <div>
                <h4>I am the footer</h4>
                <div className="mb-2">
                    <a className="p-1" href="https://github.com/smillkaa"><AiFillGithub /></a>
                    <a className="p-1" href="https://linkedin.com"><AiFillLinkedin /></a>
                    <a className="p-1" href="https://twitter.com"><AiFillTwitterCircle /></a>
                </div>
                <p className="text-dark">&copy; 2022 Saidana. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
