import React from "react";

// import 
import Skills from "./Skills";
import LanguagePage from "./LanguagePages"
import Address from "./AddressPage";

import profileLogo from  "../Image/profileImg.jpg"

// styles
import "../styles/sidebarstyle.css"

export default function Navbar() {
    function submit() {
        return console.log("you've successfuly submit");
    }

    const firstName = "akindele"
    const lastName = "Roqeeb"

    // const date = new Date()

    return(
        <main className="" id="containerNavbar">
            <div className="text-center">
                <div className="logo-container">
                    <img className="profilelogo rounded-5" src={profileLogo} />
                </div>
                <h5>{firstName} {lastName}</h5>
                {/* <span>it's about to change from {date.toLocaleTimeString()} to {date.getHours() % 12}</span> */}
                <span>
                    frontend and backend developer
                </span>
            </div>
            <Address />
            <LanguagePage  />
            <Skills />
        </main>
    );
};