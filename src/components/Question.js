import React from 'react';
import {connect} from 'react-redux';

const Question = ({text}) => {

  console.log({text});

  return (
    <div className="question">
      <h2>{text}</h2>
    </div>
  );
};

function mapStateToProps(state) {
  if(state.active < state.quizzes.length)
    return {text: state.quizzes[state.active].question};
  else
    return {text: ""};
}

export default connect(mapStateToProps)(Question);

