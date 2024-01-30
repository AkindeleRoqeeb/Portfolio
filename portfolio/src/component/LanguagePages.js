import React from "react";

import '../styles/languageStyle.css'

const Languages = () => {

    let counter = 0

    // setInterval(() => {
    //     if(counter == 65) {
    //         clearInterval;
    //     } else {
    //         counter += 1;
    //         number.innerHTML = `${counter}%`;
    //     }
    // }, 30);

    return (
        <div className=" d-flex justify-content-evenly row-cols-5 justify-content-md-between justify-content-center mt-3 mb-5">
            <div className="skill me-5" id="carryBody">
                <div className="outer">
                    <div className="inner">
                        <div id="number">
                            95%
                        </div>
                    </div>
                </div>
                <svg xmlns="htttp://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                        <linearGradient id="GredientColor">
                            <stop offset="0%" stop-color="#DA22FF" />
                            <stop offset="100%" stop-color="#9733EE" />
                        </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" stroke-linecap="round" className="circle1"/>
                </svg>
                <span className="p-4">
                    english
                </span>
            </div>
            <div className="skill me-5" id="carryBody">
                <div className="outer">
                    <div className="inner">
                        <div id="number">
                            65%
                        </div>
                    </div>
                </div>
                <svg xmlns="htttp://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                        <linearGradient id="GredientColor">
                            <stop offset="0%" stop-color="#DA22FF" />
                            <stop offset="100%" stop-color="#9733EE" />
                        </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" stroke-linecap="round" className="circle2"/>
                </svg>
                <span className="p-4">Russia</span>
            </div>
            <div className="skill" id="carryBody">
                <div className="outer">
                    <div className="inner">
                        <div id="number">
                            96%
                        </div>
                    </div>
                </div>
                <svg xmlns="htttp://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                        <linearGradient id="GredientColor">
                            <stop offset="0%" stop-color="#DA22FF" />
                            <stop offset="100%" stop-color="#9733EE" />
                        </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" stroke-linecap="round" className="circle3" />
                </svg>
                <span className="p-4">
                    yoruba
                </span>
            </div>
        </div>
    )
}

export default Languages