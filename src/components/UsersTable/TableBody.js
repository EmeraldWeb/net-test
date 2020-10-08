import React from 'react';
import { TableBody as TableBodyUI } from '@material-ui/core';
import { v4 as uuidV4 } from 'uuid';
import TableRow from './TableRow';
import usersProcessing from './usersProcessing';

export default function TableBody(props) {
  let tableRows = usersProcessing(props.users);
  tableRows = tableRows.map((rowData) => <TableRow key={uuidV4()} elementsArray={rowData} />);

  return <TableBodyUI>{tableRows}</TableBodyUI>;
}
