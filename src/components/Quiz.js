import React from "react";
import Choice from "./Choice";
import {Question} from "./Question";


export const Quiz = ({question, answers}) => {

    console.log({question});
    console.log({answers});

    return (
    <div className="left">
        <Question body={question} />
        <Choice choices={answers} />
    </div>
    );
};