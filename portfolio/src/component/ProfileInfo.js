import React from "react";

import profileLogo from  "../Image/profileImg.jpg"


function ProfileInfo() {

    const firstName = "akindele"
    const lastName = "Roqeeb"

    return (
            <div className="text-center mb-3">
                <div className="logo-container">
                    <img className="profilelogo rounded-5" src={profileLogo} />
                </div>
                <h5>{firstName} {lastName}</h5>
                {/* <span>it's about to change from {date.toLocaleTimeString()} to {date.getHours() % 12}</span> */}
                <span>
                    frontend and backend developer
                </span>
            </div>
    )
}
export default ProfileInfo;