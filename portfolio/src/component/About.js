import React from "react";

function Details() {
    return (
        <div>
            <div className="imageandtext">
                <img className="image" src={require('../Image/IMG-20231221-WA0008.jpg')} alt="" />
                <div className="info">
                    <h3>discover my amazing art skills</h3>
                    <strong>
                        &lt;code&gt; i build | &lt;/code&gt;
                    </strong>
                    <button>download cv</button>
                </div>
            </div>
            <div className="acknowledgement">
                <div className="experience">
                    <h5></h5>
                </div>
                <div className="projects"></div>
                <div className="feedback"></div>
                <div className="reward"></div>
            </div>
            <div className="services">
                <h4>
                    my services
                </h4>
                <div className="web_development">
                    <h4>
                        web development
                    </h4>
                </div>
                <div className="design">
                    <h4>
                        ui/ux designer
                    </h4>
                </div>
                <div className="mobile_development">
                    <h4>
                        mobile app
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Details;