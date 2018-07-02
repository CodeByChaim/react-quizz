import React from 'react';
import {connect} from 'react-redux';

import Choice from './Choice';
import Question from './Question';


const Quiz = ({title}) => {

  return (
    <div className="left">
      <h4>{title}</h4>
      <Question/>
      <Choice/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  title: state.title
});

export default connect(mapStateToProps)(Quiz);