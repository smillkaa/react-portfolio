import React from "react";
import resume from "../../files/resume.pdf"

function Resume() {
    return (
        <section className="bg-light pt-5 pb-5" id="Resume">
            <div>
                <h2 className="text-center mt-5">RESUME</h2>
            </div>
            <div className="d-flex justify-content-center mt-5 pt-5">
                <div className="ps-5 pe-4 mt-5">
                    <h4 className="text-end">Technical Skills</h4>
                    <p className="text-end"><a className="text-decoration-none me-2" href="/" download={resume}>Click here</a>to download resume</p>
                </div>
                <div>
                    <ul className="list-unstyled ps-4 pe-5">
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>GraphQL</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Heroku</li>
                    </ul>
                </div>
            </div>
            <div></div>

        </section>
    );
};

export default Resume;
