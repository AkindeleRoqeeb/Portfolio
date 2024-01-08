import React from "react";


import image1 from "../Image/image-rock1.jpg"
import profileLogo from "../Image/profileImg.jpg"

function BlogPage() {
    return (
        <main className="mt-3 mb-3">
            <h3 className="p-2 text-center">
                blog
            </h3>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={image1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={profileLogo} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={image1} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </main>
    )
}

export default BlogPage;