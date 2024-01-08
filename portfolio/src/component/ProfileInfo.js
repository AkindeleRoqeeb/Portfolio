import React from "react";

import profileLogo from  "../Image/profileImg.jpg"

// style
import "../styles/profileStyle.css"


function ProfileInfo() {

    const firstName = "akindele"
    const lastName = "Roqeeb"

    return (
            <div className="text-center mb-3">
                <div className="logo-container" id="image-Body">
                    <img className="profilelogo" src={profileLogo} />
                </div>
                <div className="mt-2">
                <h5>{firstName} {lastName}</h5>
                {/* <span>it's about to change from {date.toLocaleTimeString()} to {date.getHours() % 12}</span> */}
                <span className="">
                    frontend and backend developer
                </span>
                </div>
            </div>
    )
}
export default ProfileInfo;