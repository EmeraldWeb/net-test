import React, { useContext } from 'react';
import { TableCell as TableCellUI } from '@material-ui/core';
import Checkbox from './Checkbox';
import { header as headerData } from './mockTableHeader.json';
import SelectedUsersContext from './SelectedUsersContext';

function Title(title, text) {
  return (
    <>
      <span className="tableCell-title">{`${title}:`}</span>
      <span>{text}</span>
    </>
  );
}

function checkboxChange(event, selectedUsers, setSelectedUsers) {
  const collection = { ...selectedUsers };
  const { id, checked } = event.target;
  collection[id] = checked;

  if (id === 'all') {
    Object.keys(collection).forEach((key) => {
      collection[key] = checked;
    });
  }

  if (collection[id] === false) {
    collection.all = false;
  }

  setSelectedUsers(collection);
}

export default function TableCell(props) {
  const { selectedUsers, setSelectedUsers } = useContext(SelectedUsersContext);
  let content = props.value;
  const isCheckbox = props.isChecked !== undefined;

  if (isCheckbox) {
    const id = props.value;

    content = (
      <Checkbox
        id={id}
        isChecked={props.isChecked}
        handleChange={(event) => {
          checkboxChange(event, selectedUsers, setSelectedUsers);
        }}
      >
        {id === 'all' ? 'Выделить всё' : null}
      </Checkbox>
    );
  } else {
    const headerCell = headerData.find((cell) => cell.type === props.type);

    if (headerCell && headerCell.value !== props.value) {
      content = Title(headerCell.value, props.value);
    }
  }

  return (
    <TableCellUI align="center" className={isCheckbox ? 'x_checkbox' : null}>
      {content}
    </TableCellUI>
  );
}
