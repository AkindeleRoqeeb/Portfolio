import React, { useState } from 'react';
import './App.css';

// import files
// import './component/HeaderPage';

import SideBar from './component/sideBar';
import Services from './component/Services';
import HomePage from './component/Homepage';
import Footer from './component/Footer';



// import Codetester from './component/codeTest';

// image
// import image from "./Image/image-rock2.jpg"
// import image1 from "./Image/image-rock3.jpg"
// import image2 from  "./Image/image-rock4.jpg"

// const name1 = "Abdul life you all"
// const info1 = "subscribe for more info on our course!"
// const name2 = "Abdul all"
// const info2 = "subscribe for more info here!"
// const name3 = "Ali"
// const info3 = "more info on our course!"

// const bills = [34, 43, 56, 1, 9, 5]
// const names = ["right", "truth", "bright", "lie"]

// const newbills = bills.map(function(item){
//   return item * 2  /// or /// item * item
// })

// const capitalizeName = names.map((name) => {
  // return name[0].toUpperCase() + name.slice(1)
  // return `${name[0].toUpperCase()} ${name.slice(1)}`
  // return `${name[0].toUpperCase()}${name.slice(1)}`
// })

// console.log(capitalizeName)

// data
// import jokedata from "./FeedbackData/jokeData";

function App() {

  // const jokeElement = jokedata.map(joke => {
  //   return <Codetester setup = {joke.setup} punchline = {joke.punchline} />
  // })

  // const [greet, changegreet] = useState("Hello")
  // function handlechange(){
  //   changegreet("Dear user you're high o")
  // }

  return (
    <div className=" text-capitalize row bg-black bg-gradient text-white p-3" id=''>
      {/* <SideBar />
      <Details /> */}
      {/* <Codetester 
        img={image}
        name={name1} 
        info = {info1}
        punch = "good punch"
        isPuch = {true}
        number = {98}
        num = {[ 7, 5, 20]}
        comments = {[{miss: "head", love: "nine", hate: 50}]}
        />
      <Codetester 
        img={image1}
        name = {name2}
        info = {info2}
        punch = "bad punch"
        number = {80}
        isPuch = {false}
        num = {[0, 1, 5, 23]}
        // comments = {[{miss: "six", love: "two", hate: 9}]}
        />
      <Codetester 
        img={image2}
        name = {name3}
        info = {info3}
        // punch = "good punch 2"
        isPuch = {true}
        number = {200}
        num = {[2, 3, 5, 23]}
        comments = {[{miss: "none", love: "one", hate: 5}]}
        /> */}

        {/* <Codetester items = {newbills} /> */}

        {/* {jokeElement} */}


        {/* <Codetester greeting = {greet} button = {handlechange} /> */}

        {/* <Codetester /> */}
        
        <div className=" col-md-6 p-4 pt-0 pb-2">
          <SideBar />
        </div>
        <div className=' col-md-6'>
        <HomePage />
        </div>
        <div className=''>
          <Footer />
        </div>
    </div>
  );
}

export default App;
