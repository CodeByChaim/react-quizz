import React from 'react';
import {connect} from 'react-redux';

const Result = ({selected, results, qizLength}) => {

  console.log({selected});
  console.log({results});

  let message = "";
  if (selected.length) {
    message = <h2>Your selection</h2>;
  }

  let showResults = "";
  if (selected.length === qizLength) {
    const score = selected.reduce((acc, item) => acc + item.id, 0);
    showResults = <div className="question">
      <img src={`assets/${results[score % results.length].img}`} alt={results[score % results.length].superhero}
           height="250" width="400"></img>
    </div>;
  }

  return (
    <div>
      <div className="result">{message}</div>
      <div className="square">
        {selected.map((select, index) => <button className="square-button"
                                                 key={index}>{select.text}</button>)}

      </div>
      {showResults}
    </div>
  )
};

const mapStateToProps = (state) => ({
  selected: state.selected,
  results: state.results,
  qizLength: state.quizzes.length
});

export default connect(mapStateToProps)(Result);
