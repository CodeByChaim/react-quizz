import React from 'react';
import {connect} from 'react-redux';

const Result = ({quizzes, results}) => {

  console.log({quizzes});
  console.log({results});

  return (
    <div className="right">
      <span className="square">
        {quizzes.map(quiz => <button className="square-button"
                                     key={quiz.id}>{quiz.selected}</button>)}
      </span>
      <div className="question">
        <h2>{results[0].superhero}</h2>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  quizzes: state.quizzes,
  results: state.results
});

export default connect(mapStateToProps)(Result);
