import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getUser from '../actions/users';

const mapDispatchToProps = (dispatch) => ({
  getUser: (params) => {
    getUser(dispatch, params);
  },
});

export default
@connect(null, mapDispatchToProps)
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // TODO: eslint
    this.props.getUser(); // eslint-disable-line react/destructuring-assignment
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        Get users
      </button>
    );
  }
}

Button.propTypes = {
  getUser: PropTypes.func.isRequired,
};
