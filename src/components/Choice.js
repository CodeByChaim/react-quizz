import React from "react";

const Choice = ({choices}) => {
    console.log({choices});
    return (
        <span className="square">
            {choices.map(answer => <button className="square-button" key={answer}>{answer}</button>)}
        </span>
    );
}

export default Choice;
