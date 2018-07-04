import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectMe} from '../redux/actions/ChoiceAction';
import {activate} from '../redux/actions/ActiveAction';

class Choice extends Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.onClick = this.onClick.bind(this);
  }

  onClick(id, e) {
    e.preventDefault();
    const selected = this.props.options.find(option => option.id === id);
    this.props.selected(selected);
    this.props.active(this.props.current);
  }

  render() {
    return (
      <span className="square">
        {this.props.options.map(option => <button className="square-button"
                                                  onClick={this.onClick.bind(this, option.id)}
                                                  key={option.id}>{option.text}</button>)}
      </span>
    )
  }
}

Choice.propTypes = {
  selected: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  if (state.active < state.quizzes.length)
    return {
      options: state.quizzes[state.active].options,
      current: state.quizzes[state.active].id,
      active: state.active
    };
  else
    return {
      options: [],
      current: state.active,
      active: state.active
    };
}

const mapDispatchToProps = {
  selected: selectMe,
  active: activate
};

export default connect(mapStateToProps, mapDispatchToProps)(Choice);

