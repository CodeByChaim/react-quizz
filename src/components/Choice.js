import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selected} from '../redux/actions/ChoiceAction';
import {active} from '../redux/actions/ActiveAction';

class Choice extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.selected(this.myRef.value);
    console.log('Props', this.props.selected);

    this.props.active(this.props.current);
    console.log('Props', this.props.active);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <span className="square">
          {this.props.options.map(option => <button className="square-button"
                                                    ref={ref => this.myRef = ref}
                                                    key={option.id}
                                                    value={option.text}>{option.text}</button>)}
         </span>
      </form>
    )
  }
}

Choice.propTypes = {
  selected: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  if(state.active < state.quizzes.length)
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

// const mapStateToProps = (state) => ({
//   options: state.quizzes[state.active].options,
//   current: state.quizzes[state.active].id,
//   active: state.active
// });

const mapDispatchToProps = {
  selected: selected,
  active: active
};

export default connect(mapStateToProps, mapDispatchToProps)(Choice);

