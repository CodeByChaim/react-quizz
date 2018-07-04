import React from 'react';
import {connect} from 'react-redux';

import Choice from './Choice';
import Question from './Question';
import Result from "./Result";

const Quiz = ({title}) => {
  return (
    <div className="box wrapper">
      <div className="box quiz">
        <h2>{title}</h2>
        <Question/>
        <Choice/>
      </div>
      <div className="box result">
        <Result/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  title: state.title
});

export default connect(mapStateToProps)(Quiz);