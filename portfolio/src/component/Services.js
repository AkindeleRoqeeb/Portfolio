import React from "react";

function Services() {
    return (
        <section>
            <div className="row">
                <h4 className="p-2">
                    my services
                </h4>
                <div className="col-md-6 col-sm-0 card border border-2 border-warning p-2" style={{color: "black", fontWeight: "bold"}}>
                    <h4 className="card-title" style={{fontWeight: "bold"}}>
                        web development
                    </h4>
                    <p>
                    “I'm an experienced software engineer who constantly 
                    seeks out innovative solutions to everyday problems. 
                    In my seven years in this industry, I've honed my analytical thinking 
                    and collaboration skills, and I love working with a team.
                    </p>
                    <a className="" href="">order now </a> //arow
                </div>
                <div className="col-md-6 col-sm-0">
                    <h4>
                        ui/ux designer
                    </h4>
                    <p>
                    “I'm an experienced software engineer who constantly 
                    seeks out innovative solutions to everyday problems. 
                    In my seven years in this industry, I've honed my analytical thinking 
                    and collaboration skills, and I love working with a team.
                    </p>
                    <a className="text-warning" href="">order now </a> //arow
                </div>
                <div className="col-md-6">
                    <h4>
                        mobile app
                    </h4>
                    <p>
                    “I'm an experienced software engineer who constantly 
                    seeks out innovative solutions to everyday problems. 
                    In my seven years in this industry, I've honed my analytical thinking 
                    and collaboration skills, and I love working with a team.
                    </p>
                    <a className="text-warning" href="">order now </a> //arow
                </div>
                <div className="col-md-6">
                    <h4>
                        technical writer
                    </h4>
                    <p>
                    “I'm an experienced software engineer who constantly 
                    seeks out innovative solutions to everyday problems. 
                    In my seven years in this industry, I've honed my analytical thinking 
                    and collaboration skills, and I love working with a team.
                    </p>
                    <a className="text-warning" href="">order now </a>
                </div>
            </div>
        </section>
    )
}

export default Services;