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

const mapStateToProps = (state) => ({
  text: state.quizzes[state.active].question
});

export default connect(mapStateToProps)(Question);

