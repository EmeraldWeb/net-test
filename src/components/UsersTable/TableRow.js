import React, { useContext } from 'react';
import { TableRow as TableRowUI } from '@material-ui/core';
import { v4 as uuidV4 } from 'uuid';
import TableCell from './TableCell';
import SelectedUsersContext from './SelectedUsersContext';

export default function TableRow(props) {
  const { elementsArray } = props;
  const { selectedUsers } = useContext(SelectedUsersContext);

  let isCheckboxChecked = false;

  const cellList = elementsArray.map((elem) => {
    let isChecked;
    if (elem.type === 'checkbox') {
      isChecked = selectedUsers[elem.value] || selectedUsers.all || false;
      isCheckboxChecked = isChecked;
    }

    return <TableCell key={uuidV4()} type={elem.type} value={elem.value} isChecked={isChecked} />;
  });

  return (
    <TableRowUI key={uuidV4()} className={isCheckboxChecked ? 'x_checked' : null}>
      {cellList}
    </TableRowUI>
  );
}
