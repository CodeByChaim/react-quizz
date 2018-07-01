import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selected} from '../redux/actions/ChoiceAction';

class Choice extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.options = [];
    }

    onClick(e) {
        e.preventDefault();
        this.props.selected(this.myRef.value);
        console.log('Value', this.myRef.value);
        // this.myRef.value = {};
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit.bind(this) }>
            <span className="square">
                {this.options.map(option => <button className="square-button"
                                                    onClick={this.onClick.bind(this)}
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

const mapStateToProps = (state) => ({
    options: state.quizzes[0].options
});

const mapDispatchToProps = {
     selected: selected
};

export default connect(null, mapDispatchToProps)(mapStateToProps)(Choice);

