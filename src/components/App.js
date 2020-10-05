import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import Layout from './Layout/Layout';
import UsersTable from './UsersTable/UsersTable';

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

  render() {
    return (
      <Layout>
        <Typography variant="subtitle1">Request a collection of users</Typography>
        <Button onClick={this.handleClick} variant="contained" color="primary">
          Get Users
        </Button>

        <UsersTable users={this.props.users} />
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
