import React from "react";
import {connect} from 'react-redux';

const Result = ({quizzes}) => {
    return (
        <div className="right">
            <span className="square">
                {quizzes.map(quiz => <button className="square-button"
                                               key={quiz.selected.id}
                                               >{quiz.selected.text}</button>)}
            </span>
        </div>
    )
};

const mapStateToProps = (state) => ({
    quizzes: state.quizzes
});

export default connect(mapStateToProps)(Result);
