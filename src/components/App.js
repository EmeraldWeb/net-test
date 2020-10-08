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

function App(props) {
  return (
    <Layout>
      <Typography variant="subtitle1">Запросите коллекцию пользователей</Typography>
      <Button onClick={props.getUser} variant="contained" color="primary">
        Запросить
      </Button>

      <UsersTable users={props.users} />
    </Layout>
  );
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
  getUser: PropTypes.func,
};

export default connect(mapState, mapDispatch)(App);
