import React from "react";

const Languages = () => {
    return (
        <div className="row row-cols-3">
            <div className="bg-white text-dark rounded-pill col">
                <div className="bg-warning rounded-pill w-3">
                    <span>
                        100%
                    </span>
                </div>
                <strong>english</strong>
            </div>
            <div className="bg-white text-dark rounded-pill col">
                <div className="bg-warning rounded-pill w-3">
                    <div>
                        <span>
                            60%
                        </span>
                    </div>
                    <strong>rusia</strong>
                </div>
            </div>
            <div className="bg-white text-dark rounded-pill col">
                <div className="bg-warning rounded-pill w-3">
                    <span>
                        67%
                    </span>
                </div>
                <strong>
                    yoruba
                </strong>
            </div>
        </div>
    )
}

export default Languages