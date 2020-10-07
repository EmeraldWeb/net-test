import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Checkbox,
  FormLabel,
  Box,
} from '@material-ui/core';
import { header } from './mockTableHeader.json';
import usersProcessing from './usersProcessing';
import './UserTable.css';

export default class UsersTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.renderTableRow = this.renderTableRow.bind(this);

    this.state = {
      checkedCollection: {
        all: false,
      },
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.users.length) {
      const checkedCollection = { ...state.checkedCollection };

      props.users.forEach((user) => {
        if (checkedCollection[user.id] === undefined) {
          checkedCollection[user.id] = checkedCollection.all;
        }
      });

      return { checkedCollection };
    }

    return null;
  }

  handleChange(event) {
    // TODO: eslint react/no-access-state-in-setstate
    const checkedCollection = { ...this.state.checkedCollection }; // eslint-disable-line
    const { id, checked } = event.target;
    checkedCollection[id] = checked;

    if (id === 'all') {
      Object.keys(checkedCollection).forEach((key) => {
        checkedCollection[key] = checked;
      });
    }

    if (checkedCollection[id] === false) {
      checkedCollection.all = false;
    }

    this.setState({ checkedCollection });
  }

  renderTitle(title, text) {
    return (
      <>
        <span className="tableCell-title">{`${title}:`}</span>
        <span>{text}</span>
      </>
    );
  }

  renderCheckbox(id, isChecked) {
    return (
      <FormLabel htmlFor={id}>
        <Checkbox
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={this.handleChange}
          color="primary"
        />
        {id === 'all' ? 'Выделить всё' : null}
      </FormLabel>
    );
  }

  renderTableRow(itemsArray, index) {
    const { checkedCollection } = this.state;
    let isCheckbox = false;
    let isChecked = false;

    const cellList = itemsArray.map((item) => {
      let content = item.value;

      if (item.type === 'checkbox') {
        isCheckbox = true;
        isChecked = checkedCollection[item.value] || checkedCollection.all || false;
        content = this.renderCheckbox(item.value, isChecked);
      } else {
        isCheckbox = false;
        const headerCell = header.find((cell) => cell.type === item.type);

        if (headerCell && headerCell.value !== item.value) {
          content = this.renderTitle(headerCell.value, item.value);
        }
      }

      return (
        <TableCell
          key={`${item.type}-${item.value}`}
          align="center"
          className={isCheckbox ? 'x_checkbox' : null}
        >
          {content}
        </TableCell>
      );
    });

    // TODO: find good key
    return (
      <TableRow key={`${index}-${Date.now()}`} className={isChecked ? 'x_checked' : null}>
        {cellList}
      </TableRow>
    );
  }

  renderTableBody() {
    let tableRows = usersProcessing(this.props.users);
    tableRows = tableRows.map(this.renderTableRow);

    return <TableBody>{tableRows}</TableBody>;
  }

  renderLineOfSelected() {
    const { checkedCollection } = this.state;
    const users = [...this.props.users];
    const namewOfSelectedUsers = [];

    users.forEach((user) => {
      if (checkedCollection[user.id]) {
        namewOfSelectedUsers.push(user.firstName);
      }
    });

    return <Box className="userTable-lineOfSelected">{namewOfSelectedUsers.join(', ')}</Box>;
  }

  render() {
    return (
      <TableContainer component={Paper} className="userTable">
        <Table className="userTable-table">
          <TableHead>{this.renderTableRow(header)}</TableHead>
          {this.renderTableBody()}
        </Table>

        {this.renderLineOfSelected()}
      </TableContainer>
    );
  }
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
