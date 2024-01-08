import React from "react";

import '../styles/skill.css'

const Skills = () => {
    return (
        <section className="containerskill mb-5 pt-5">
            <div className="htmlskill_container mb-4">
                <div className="">
                    <div className="d-flex justify-content-between">
                        <span className="skillName">html</span>
                        <span className="percentage">67%</span>
                    </div>
                    <div className="p-0 w-100 progress mb-2" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-end-pill" style={{ width: "95%" }}></div>
                    </div>
                </div>
            </div>
            <div className="containerstyles mb-4">
                <div className="d-flex justify-content-between">
                    <span className="skillName">
                        css/scss/tailwindcss/bootstrap
                    </span>
                    <span className="percentage">67%</span>
                </div>
                <div className="p-0 w-100 progress mb-2 default" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-end-pill" style={{ width: "85%" }}></div>
                </div>
            </div>
            <div className="javascript_container mb-4">
                <div className="d-flex justify-content-between">
                    <span className="skillName">javascript</span>
                    <span className="percentage">67%</span>
                </div>
                <div className="p-0 w-100 progress mb-2 default" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-end-pill" style={{ width: "65%" }}></div>
                </div>
            </div>
            <div className="typescript_container mb-4">
                <div className="d-flex justify-content-between">
                    <span className="html">typescript</span>
                    <span className="html">67%</span>
                </div>
                <div className="p-0 w-100 progress mb-2 default" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-end-pill" style={{ width: "55%" }}></div>
                </div>
            </div>
            <div className="python_container mb-4">
                <div className="d-flex justify-content-between">
                    <span className="python">python</span>
                    <span className="html">67%</span>
                </div>
                <div className="p-0 w-100 progress mb-2 default" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-end-pill" style={{ width: "45%" }}></div>
                </div>
            </div>
            <div className="mb-4">
                <div className="d-flex justify-content-between">
                    <span className="html">html</span>
                    <span className="html">67%</span>
                </div>
                <div className="flex p-0 w-100 progress mb-2 default" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-end-pill" style={{ width: "35%" }}></div>
                </div>
            </div>
        </section>
    );
};

export default Skills;