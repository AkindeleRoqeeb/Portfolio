import React from "react";


import image1 from "../Image/image-rock1.jpg"
import profileLogo from  "../Image/profileImg.jpg"

function BlogPage() {
    return (
        <main>
            <h3 className="p-10 text-center">
                blog
            </h3>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner text-center">
                    <div className="carousel-item active">
                        {/* <img src={image1} class="d-block w-100" alt="" /> */}
                        
                    </div>
                    <div class="carousel-item">
                        {/* <img src={profileLogo} className="d-block w-100 h-100" alt="" /> */}
                    </div>
                    <div class="carousel-item">
                        {/* <img src="" className="d-block w-100 h-100" alt=""/> */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BlogPage;