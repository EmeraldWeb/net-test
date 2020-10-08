import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, TableHead, TableContainer, Paper } from '@material-ui/core';
import { header as headerData } from './mockTableHeader.json';
import TableBody from './TableBody';
import TableRow from './TableRow';
import LineOfSelected from './LineOfSelected';
import SelectedUsersContext from './SelectedUsersContext';
import './UserTable.css';

export default function UsersTable(props) {
  const [selectedUsers, setSelectedUsers] = useState({ all: false });
  const contextValue = {
    selectedUsers,
    setSelectedUsers,
  };

  useEffect(() => {
    // getDerivedStateFromProps
    if (props.users.length) {
      let isNewData = false;
      const collection = { ...selectedUsers };

      props.users.forEach((user) => {
        if (collection[user.id] === undefined) {
          collection[user.id] = collection.all;
          isNewData = true;
        }
      });

      if (isNewData) {
        setSelectedUsers(collection);
      }
    }
  }, [props.users, selectedUsers]);

  return (
    <TableContainer component={Paper} className="userTable">
      <SelectedUsersContext.Provider value={contextValue}>
        <Table className="userTable-table">
          <TableHead>
            <TableRow elementsArray={headerData} />
          </TableHead>

          <TableBody users={props.users} />
        </Table>
      </SelectedUsersContext.Provider>

      <LineOfSelected users={props.users} selectedUsers={selectedUsers} />
    </TableContainer>
  );
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      age: PropTypes.number,
    })
  ),
};
