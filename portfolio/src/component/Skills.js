import React from "react";

const Skills = () => {
    return (
        <section className="containerskill">
            <div className="htmlskill_container">
                <div className="">
                    <span className="skillName">html</span>
                    <span className="percentage">67%</span>
                </div>
                <div className="htmlRate">
                    <div className="htmlstrength"></div>
                </div>
            </div>
            <div className="containerstyles">
                <div className="">
                    <span className="skillName">
                        css/scss/tailwindcss/bootstrap
                    </span>
                    <span className="percentage">67%</span>
                </div>
                <div className="stylesRate">
                    <div className="styleStrength"></div>
                </div>
            </div>
            <div className="javascript_container">
                <div className="">
                    <span className="skillName">javascript</span>
                    <span className="percentage">67%</span>
                </div>
                <div className="javascriptRate">
                    <div className="javascriptStrength"></div>
                </div>
            </div>
            <div className="typescript_container">
                <div>
                    <span className="html">typescript</span>
                    <span className="html">67%</span>
                </div>
                <div className="Rate">
                    <div className=""></div>
                </div>
            </div>
            <div className="python_container">
                <div>
                    <span className="python">python</span>
                    <span className="html">67%</span>
                </div>
                <div className="htmlRate">
                    <div></div>
                </div>
            </div>
            <div>
                <div>
                    <span className="html">html</span>
                    <span className="html">67%</span>
                </div>
                <div className="htmlRate">
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Skills;