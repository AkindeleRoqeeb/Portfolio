import React, { useState } from "react";

import "../styles/testcodeStyle.css"
// import { Button } from "bootstrap";
// import imm from "../Image/image-rock2.jpg"

import jokeData from "../FeedbackData/jokeData";

function Codetester(prop) {

    // const datas = jokeData.map((item) => {item.punchline})

    // console.log(prop)
    // console.log(prop);
    // const sidebarstyle = {
    //     background: "gray",
    //     display: "flex",
    //     justifyContent: "space-between"
    // }
    
    // const help = "money"
    
    // function submit() {
    //     return console.log("you now with us")
    // }
    
    
    // const DarkMoodOn = true;
    // const darkmood = <h2>dark mood is on</h2>
    // const lightMood = <h2>light Moodc is on</h2>
    
    // function handleclick() {
        //     DarkMoodOn = !DarkMoodOn
    //     if(DarkMoodOn == false){
        //         console.log("dark mood is on")
        //     } else{
            //         console.log("light mood is on")
            //     }
            // }
            
            // const date = new Date()
    // const hours = date.getHours()
    // let timeOfDay
    
    // if(hours < 12){
        //     timeOfDay = "Good morning"
        // } else if(hours > 12 && hours > 17){
            //     timeOfDay = "good afternoon"
            // } else {
                //     timeOfDay = "good night"
                // }
                // console.log(prop.isPunch)
                
    // const name = prop.name
    
    // console.log(prop.comments)
    
    // const products = ["red", "brown", "pinck", "cloth", "yellow"]
    // const gifts = [
    //     <h4>shawama</h4>,
    //     "rice", 
    //     "beans",
    //     "indomie",
    //     "chin chin"
    // ]
    
    // const [name, UserName] = useState("")
    // console.log(name)

    // function search(formData) {
        //     const query = formData.get("query");
        //     alert(`You searched for '${query}'`);
        // }

    // const [myName, setMyName] = useState("")
    // const [mypass, setMypass] = useState("")

    // const [secondName, setsecondName] = useState("")

    // const handlechange = (event) => {
    //     event.preventDefault();
    //     event.
    //     alert(`the name you enter : '${event}'`)
    //     console.log(event)
    // }

    // console.log(myName)
    // console.log(mypass)

    // form submit

    const [myinput, setMyinput] = useState({})

    const handleChanges = (event) => {
        // event.preventDefault();
        const name = event.target.name
        const value = event.target.value
        setMyinput(values => ({...values, [name] : value}))
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(myinput)
    }
    console.log(myinput)
        
    return (
        <section className="testContainer">
            {/* <div>
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
            </div> */}
            {/* <div>
                <h3>{timeOfDay} Abdul</h3>
            </div> */}
            {/* {isture : list ? color}
            {!isture : color} */}
            {/* <div className="containerarray"> */}
            {/* <img src={prop.img} /> */}
            {/* <h4>{name}</h4> */}
            {/* <p>{prop.info}</p> */}
            {/* {prop.punch && <h5>Punch: {prop.punch}</h5>} */}
            {/* <h5 style={{display: prop.punch ? "block" : "none"}}>Punch: {prop.punch}</h5> */}
            {/* </div> */}
            <div>
                {/* <img src={`../Image/${prop.img}`} />
                <img src={imm} /> */}
            </div>
            <div>
                {/* <h4>{prop.newbills}</h4> */}
            </div>
            {/* <h4>{products.map((colors) => colors)}</h4> */}
            {/* <h5>{gifts}</h5> */}

            {/* <div>
                <h4>{prop.setup}</h4>
                <span>{prop.punchline}</span>
            </div> */}

            {/* <h3>{prop.greeting}</h3>
            <button onClick={prop.button}>click your father</button> */}

            {/* <div>
                <form>
                    <label> enter you name
                        <input
                            type=""
                            value={name}
                            onChange={(e) => UserName(e.target.value)}
                        />
                    </label>
                </form>
            </div> */}

            {/* <div>
                <form action={search}>
                    <input name="query" />
                    <button type="submit">Search</button>
                </form>
            </div> */}

            {/* <div>
                <form>
                    <label>Enter your info</label>
                    <input 
                        type="text"
                        value={myName}
                        onChange={(e) => setMyName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        value={mypass}
                        onChange={(p) => setMypass(p.target.value)}
                    />
                </form>
            </div>
            <div>
                <form onSubmit={handlechange}>
                    <label>
                        kill the killer info
                    </label>
                    <input 
                        type="text"
                        value={secondName}
                        onChange={(s) => setsecondName(s.target.value)}
                    />
                    <input type="submit" />
                </form>
            </div> */}

            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        first name
                    </label>
                    <input 
                        type="text"
                        name="username" 
                        value={myinput.username || ""}
                        onChange={handleChanges} 
                    />
                    <input />
                    <label>
                        second name
                    </label>
                    <input 
                        type="number"
                        name="age" 
                        value={myinput.age || ""}
                        onChange={handleChanges} 
                    />
                    <input type="submit" />
                </form>
            </div>

            {/* <div>
                {datas}
            </div> */}

        </section>
    )
}

export default Codetester;