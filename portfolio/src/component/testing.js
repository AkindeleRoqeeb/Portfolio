import React from "react";

function SideBar(prop) {
    // console.log(prop);
    const sidebarstyle = {
        background : "red",
        display : "flex",
        justifyContent : "space-between"
    }

    const help = "money"

    return(
        <div style={sidebarstyle}>
            <p>{prop.greeting}</p>
            <h5>hi life</h5>
            <h3>{prop.number}</h3>
            <h4>{23 + 23} {help}</h4>
        </div>
    )
};

export default SideBar;