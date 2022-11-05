import React from "react";
import Profile from "./Profile";

const TestBoundary = () => {
    throw Error();
    return (
        <div>
           <Profile /> 
        </div>
    )
}

export default TestBoundary;