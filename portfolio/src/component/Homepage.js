import React from "react";


// import page
// import SocialMedia from './SocialMediaPage'
import Complement from "./complement";
import Services from "./Services";
import BlogPage from "./Blogs";

// import style
import '../styles/homepage.css'

function HomePage() {
    return (
        <div className="containerHome">

            <div className="position-relative" id="imgcontainer">
                {/* <img className="image" src={require('../Image/IMG-20231221-WA0008.jpg')} alt="" /> */}
                <div className="position-absolute top-80 start-0 px-3" id="bg-text">
                    <h3 className="">
                            discover my amazing <br /> art skills
                        </h3>
                    <strong>
                        &lt;code&gt; i build | &lt;/code&gt;
                    </strong> <br/>
                    <button className="shadow-lg btn btn-light btn-sm mt-2">download cv</button>
                </div>
                <img
                    src={require('../Image/userprofile.png')} 
                    alt=""
                    className="position-absolute top-2 bottom-0 end-0 d-none d-md-block d-lg-block"
                    id=""
                />
            </div>

            <div>
                {/* <SocialMedia /> */}
                <Complement />
                <Services />
                <BlogPage />
            </div>
        </div>
    )
}

export default HomePage;