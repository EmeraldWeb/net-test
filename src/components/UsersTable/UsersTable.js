import React from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
} from '@material-ui/core';
import { header } from './mockTableHeader.json';
import usersProcessing from './usersProcessing';

export default class UsersTable extends React.Component {
  renderTableRow(itemsArray) {
    const cellList = itemsArray.map((item) => {
      let content = item.value;
      if (item.type === 'checkbox') {
        content = (
          <label htmlFor={item.value}>
            {item.value}
            <input type="checkbox" id={item.value} value={item.value} />
          </label>
        );
      }

      return (
        <TableCell key={`${item.type}-${item.value}`} align="center">
          {content}
        </TableCell>
      );
    });

    return <TableRow>{cellList}</TableRow>;
  }

  renderTableBody() {
    let tableRows = usersProcessing(this.props.users);
    tableRows = tableRows.map(this.renderTableRow);
    return <TableBody>{tableRows}</TableBody>;
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>{this.renderTableRow(header)}</TableHead>
          {this.renderTableBody()}
        </Table>
      </TableContainer>
    );
  }
}
