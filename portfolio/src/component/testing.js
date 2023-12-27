import React from "react";

function Tester(prop) {
    // console.log(prop);
    const sidebarstyle = {
        background: "gray",
        display: "flex",
        justifyContent: "space-between"
    }

    const help = "money"

    function submit() {
        return console.log("you now with us")
    }

    
    const DarkMoodOn = true;
    const darkmood = <h2>dark mood is on</h2>
    const lightMood = <h2>light Moodc is on</h2>

    // function handleclick() {
    //     DarkMoodOn = !DarkMoodOn
    //     if(DarkMoodOn == false){
    //         console.log("dark mood is on")
    //     } else{
    //         console.log("light mood is on")
    //     }
    // }
    

    return (
        <div>
            <div>
                {DarkMoodOn ? darkmood : lightMood}
                <button className="btn btn-outline-primary" >Click Me</button>
            </div>

            <div style={sidebarstyle}>
                <p>{prop.greeting}</p>
                <h5>hi life</h5>
                <h3>{prop.number}</h3>
                <h4>{23 + 23} {help}</h4>
            </div>
            
            <div className="btn-group">
                <button onClick={submit} className="btn btn-warning">submit</button>
            </div>
        </div>
    )
};

export default Tester;