import React from 'react';
import { Box } from '@material-ui/core';

export default function LineOfSelected(props) {
  const users = [...props.users];
  const namesOfSelectedUsers = [];

  users.forEach((user) => {
    if (props.selectedUsers[user.id]) {
      namesOfSelectedUsers.push(user.firstName);
    }
  });

  return <Box className="userTable-lineOfSelected">{namesOfSelectedUsers.join(', ')}</Box>;
}
