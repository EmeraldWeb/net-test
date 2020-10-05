import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Typography, Container } from '@material-ui/core';
import Layout from './Layout/Layout';

import { getUser } from '../actions/users';

const mapState = (state) => {
  const users = [...state.users];
  return { users };
};

const mapDispatch = { getUser };

export default
@connect(mapState, mapDispatch)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.getUser();
  }

  renderUserList() {
    if (this.props.users) {
      const users = [...this.props.users];
      const list = users.map((user) => {
        const { lastName, firstName, age, id } = user;
        return <ol key={id}>{`${firstName} ${lastName}, age: ${age}`}</ol>;
      });

      return <ul>{list}</ul>;
    }

    return null;
  }

  render() {
    return (
      <Layout>
        <Typography variant="subtitle1">Request a collection of users</Typography>
        <Button onClick={this.handleClick} variant="contained" color="primary">
          Get Users
        </Button>

        <Container>{this.renderUserList()}</Container>
      </Layout>
    );
  }
}

App.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      age: PropTypes.number,
    })
  ),
  getUser: PropTypes.func.isRequired, // TODO: Failed prop type
};
