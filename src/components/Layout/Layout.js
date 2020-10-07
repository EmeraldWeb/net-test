import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../Header';
import './Layout.css';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.modifyChildren = this.modifyChildren.bind(this);
  }

  modifyChildren(child) {
    const props = {
      className: `${child.props.className} layout-cell`,
    };

    return React.cloneElement(child, props);
  }

  render() {
    return (
      <Container className="layout">
        <div className="layout-cell">
          <Header>Netology</Header>
        </div>

        {React.Children.map(this.props.children, (child) => this.modifyChildren(child))}
      </Container>
    );
  }
}
