import React from "react";

// import 
import Skills from "./Skills";
import LanguagePage from "./LanguagePages"
import Address from "./AddressPage";
import Profile from "./ProfileInfo"


// styles
import "../styles/sidebarstyle.css"

export default function Navbar() {
    // const date = new Date()

    return(
        <main>
            <Profile />
            <Address />
            <LanguagePage  />
            <Skills />
        </main>
    );
};