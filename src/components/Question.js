import React from "react";

export const Question = ({body}) => {
    console.log({body});
    return (
        <div className="question">
            <h2>{body}</h2>
        </div>
    );
};
