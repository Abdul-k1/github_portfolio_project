import React from "react";
import Profile from "./Profile";

const TestBoundary = () => {
    /* eslint-disable */
    throw Error();
    return (
        <div>
           <Profile /> 
        </div>
    )
}

export default TestBoundary;