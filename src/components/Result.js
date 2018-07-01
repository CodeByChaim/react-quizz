import React from 'react';
import {connect} from 'react-redux';

const Result = ({quizzes}) => {

  console.log({quizzes});

  return (
    <div className="right">
      <span className="square">
        {quizzes.map(quiz => <button className="square-button"
                                          key={quiz.id}>{quiz.selected}</button>)}
      </span>
    </div>
  )
};

const mapStateToProps = (state) => ({
  quizzes: state.quizzes
});

export default connect(mapStateToProps)(Result);
